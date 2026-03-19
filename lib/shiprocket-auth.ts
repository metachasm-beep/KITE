import { prisma } from "./db";

const SHIPROCKET_API_BASE = "https://apiv2.shiprocket.in/v1/external";

export async function loginToShiprocket() {
  const email = process.env.SHIPROCKET_EMAIL;
  const password = process.env.SHIPROCKET_PASSWORD;

  if (!email || !password) {
    throw new Error("Shiprocket credentials not found in environment variables.");
  }

  const response = await fetch(`${SHIPROCKET_API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Shiprocket Auth Failed: ${errorData.message || response.statusText}`);
  }

  const data = await response.json();
  const token = data.token;

  // Shiprocket tokens officially expire in 10 days.
  // We'll record it as expiring in 10 days from now.
  const expiresAt = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);

  // Upsert the singleton record
  await prisma.shiprocketAuth.upsert({
    where: { id: "singleton" },
    update: { jwtToken: token, expiresAt },
    create: { id: "singleton", jwtToken: token, expiresAt },
  });

  return token;
}

export async function getValidShiprocketToken() {
  const auth = await prisma.shiprocketAuth.findUnique({
    where: { id: "singleton" },
  });

  // If no auth record or token is about to expire (within 6 hours buffer), refresh it.
  if (!auth || auth.expiresAt.getTime() < Date.now() + 6 * 60 * 60 * 1000) {
    console.log("Shiprocket token missing or expiring. Refreshing...");
    return await loginToShiprocket();
  }

  return auth.jwtToken;
}
