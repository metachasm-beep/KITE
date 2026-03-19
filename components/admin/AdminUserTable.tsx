"use client";

import { useState } from "react";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { SystemButton } from "@/components/common/SystemButton";
import { updateUserRole } from "@/app/actions/users";
import { User, Shield, ShieldAlert, Loader2, Mail } from "lucide-react";

type UserData = {
  id: string;
  name: string | null;
  email: string | null;
  role: string;
  createdAt: Date | string;
};

export function AdminUserTable({ initialUsers }: { initialUsers: UserData[] }) {
  const [users, setUsers] = useState(initialUsers);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const handleRoleUpdate = async (userId: string, newRole: string) => {
    setUpdatingId(userId);
    const res = await updateUserRole(userId, newRole);
    if (res.success) {
      setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u));
    } else {
      alert("PROTOCOL_ERROR: " + res.error);
    }
    setUpdatingId(null);
  };

  return (
    <div className="border border-white/10 bg-[#050505] overflow-hidden font-mono text-[10px]">
      <table className="w-full text-left">
        <thead className="bg-[#111] text-zinc-500 uppercase tracking-widest border-b border-white/10">
          <tr>
            <th className="p-6 font-normal">AGENT_IDENTITY</th>
            <th className="p-6 font-normal">ACCESS_LEVEL</th>
            <th className="p-6 font-normal">ENCRYPTION_ID</th>
            <th className="p-6 font-normal text-right">AUTHORIZATION_CTL</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 text-zinc-400">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-white/[0.02] transition-colors group">
              <td className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${user.role === 'ADMIN' ? 'border-accent/40 bg-accent/5' : 'border-white/10 bg-white/5'}`}>
                    {user.role === 'ADMIN' ? <Shield size={14} className="text-accent" /> : <User size={14} className="text-zinc-600" />}
                  </div>
                  <div className="space-y-1">
                    <span className="text-white font-bold block">{user.name || "UNNAMED_ENTITY"}</span>
                    <span className="text-zinc-600 block flex items-center gap-2">
                       <Mail size={10} /> {user.email}
                    </span>
                  </div>
                </div>
              </td>
              <td className="p-6">
                <span className={`px-2 py-1 border border-current bg-current/5 font-bold tracking-[0.2em]
                  ${user.role === 'ADMIN' ? 'text-accent' : 'text-zinc-600'}`}>
                  [{user.role}]
                </span>
              </td>
              <td className="p-6">
                <span className="text-zinc-700">0x{user.id.toUpperCase()}</span>
              </td>
              <td className="p-6 text-right">
                <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <select
                    disabled={updatingId === user.id}
                    value={user.role}
                    onChange={(e) => handleRoleUpdate(user.id, e.target.value)}
                    className="bg-[#111] border border-white/10 text-[9px] p-2 hover:border-accent transition-colors focus:outline-none uppercase"
                  >
                    <option value="CUSTOMER">CUSTOMER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                  
                  {updatingId === user.id && <Loader2 size={14} className="animate-spin text-accent" />}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
