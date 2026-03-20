import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

const ADMIN_NAV = [
  { label: "OVERVIEW", href: "/admin" },
  { label: "INVENTORY", href: "/admin/inventory" },
  { label: "ORDERS", href: "/admin/orders" },
  { label: "LOGISTICS", href: "/admin/logistics" },
  { label: "COUPONS", href: "/admin/coupons" },
  { label: "USERS", href: "/admin/users" },
];

import { AdminThemeWrapper } from "@/components/admin/AdminThemeWrapper";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any).role !== "admin") {
    redirect("/");
  }

  return (
    <AdminThemeWrapper userEmail={session.user?.email}>
      {children}
    </AdminThemeWrapper>
  );
}
