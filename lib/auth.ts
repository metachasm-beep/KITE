import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const email = token.email || user?.email;
      
      if (email) {
        const adminEmail = process.env.ADMIN_EMAIL || "metachasm@gmail.com";
        const dbUser = await prisma.user.findUnique({
          where: { email }
        });

        // Ensure metachasm@gmail.com is ALWAYS an admin regardless of DB state
        if (email === adminEmail || (dbUser?.role as string) === "ADMIN") {
          token.role = "admin";
        } else {
          token.role = "user";
        }
      }
      
      return token;
    },
    async session({ session, token }) {
      // Pass the role from the token to the session object
      if (session?.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET || "voidlab-secret-dev",
};
