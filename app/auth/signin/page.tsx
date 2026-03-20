"use client";

import { signIn } from "next-auth/react";
import { Link } from "lucide-react";
import NextLink from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SignInForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/account";

  return (
    <div className="w-full max-w-md mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <NextLink href="/" className="inline-block group mx-auto mb-4">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-lg">
            <span className="font-semibold text-lg tracking-tighter">BL</span>
          </div>
        </NextLink>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Welcome to BaseLab
        </h1>
        <p className="text-sm text-zinc-500 font-medium px-4">
          Sign in or create an account to manage your orders and preferences.
        </p>
      </div>

      <div className="p-8 md:p-10 rounded-3xl bg-white border border-black/5 shadow-sm space-y-6">
        <button
          onClick={() => signIn("google", { callbackUrl })}
          className="w-full py-4 bg-foreground text-white rounded-full font-medium text-base hover:bg-black transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          <svg className="w-5 h-5 bg-white rounded-full pt-1 pb-1 pl-1 pr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
             <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
             <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
             <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-black/5"></div>
            <span className="flex-shrink-0 mx-4 text-xs font-medium text-zinc-400 uppercase tracking-widest">Secure Access</span>
            <div className="flex-grow border-t border-black/5"></div>
        </div>

        <p className="text-xs text-center text-zinc-500 font-medium leading-loose pt-2">
          By continuing, you agree to BaseLab's<br />
          <NextLink href="/terms" className="text-foreground hover:underline underline-offset-4">Terms of Service</NextLink> and <NextLink href="/privacy" className="text-foreground hover:underline underline-offset-4">Privacy Policy</NextLink>.
        </p>
      </div>
      
      <p className="text-center text-xs text-zinc-400 font-medium pt-8 flex items-center justify-center gap-2">
         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
         End-to-End Encrypted Session
      </p>
    </div>
  );
}

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-muted/30 flex flex-col items-center justify-center px-6 py-24 object-cover relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-white to-transparent pointer-events-none" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-3xl max-h-3xl bg-black/[0.02] rounded-full blur-3xl pointer-events-none" />
       
       <Suspense fallback={<div className="w-12 h-12 border-2 border-black/10 border-t-black rounded-full animate-spin" />}>
         <SignInForm />
       </Suspense>
    </main>
  );
}
