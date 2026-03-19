import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("CLEANING_DATABASE_STATE...");
  
  // Clear all transaction and cart data
  await prisma.orderTimeline.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  
  // Clear catalog data
  await prisma.artifactSpec.deleteMany();
  await prisma.artifact.deleteMany();

  console.log("INITIALIZING_SETTLEMENT_TEST_UNIT...");

  const testArtifact = {
    slug: "proto-unit-11-test",
    title: "PROTO_UNIT_11_TEST",
    series: "TEST_DROP // SETTLEMENT",
    description: "SPECULATIVE_SETTLEMENT_TEST_UNIT. HIGH_DENSITY MATERIAL FRICTION. PRE-ALIGNED FOR ACQUISITION PROTOCOL VERIFICATION.",
    price: "₹11",
    status: "AVAILABLE",
    imageUrl: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000",
    specs: [
      { label: "PROTOCOL_PRICE", value: "INR_11.00" },
      { label: "SYNC_STATUS", value: "CALIBRATED" },
      { label: "ACQUISITION_TAG", value: "BETA_SETTLEMENT" },
    ],
  };

  await prisma.artifact.create({
    data: {
      slug: testArtifact.slug,
      title: testArtifact.title,
      series: testArtifact.series,
      description: testArtifact.description,
      price: testArtifact.price,
      status: testArtifact.status,
      imageUrl: testArtifact.imageUrl,
      specs: {
        create: testArtifact.specs,
      },
    },
  });

  console.log("SETTLEMENT_UNIT_LOCK_CONFIRMED.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
