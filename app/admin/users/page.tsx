import { prisma } from "@/lib/db";
import { AdminUserTable } from "@/components/admin/AdminUserTable";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";

export const dynamic = "force-dynamic";

export default async function AdminUsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-12 text-white">
      <header className="border-b border-white/10 pb-6">
        <h1 className="text-4xl font-heading tracking-[-0.05em]">IDENT_VAULT_SNC</h1>
        <TechnicalLabel label="SYS_PROTOCOL" value="USER_MANAGEMENT" className="mt-2 text-zinc-500" />
      </header>

      <AdminUserTable initialUsers={users as any[]} />
    </div>
  );
}
