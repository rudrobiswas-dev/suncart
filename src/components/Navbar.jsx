"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <div className="navbar sticky top-0 z-50 border-b border-orange-100 bg-base-100/90 px-4 shadow-sm backdrop-blur">
      <div className="container-page flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-orange-500">☀️ SunCart</Link>
        <div className="hidden gap-2 md:flex">
          <Link className="btn btn-ghost btn-sm" href="/">Home</Link>
          <Link className="btn btn-ghost btn-sm" href="/products">Products</Link>
          {session && <Link className="btn btn-ghost btn-sm" href="/my-profile">My Profile</Link>}
        </div>
        <div className="flex items-center gap-2">
          {isPending ? <span className="loading loading-spinner loading-sm" /> : session ? (
            <>
              <span className="hidden text-sm font-medium md:inline">Hi, {session.user.name || session.user.email}</span>
              <button onClick={handleLogout} className="btn btn-outline btn-sm">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost btn-sm">Login</Link>
              <Link href="/register" className="btn btn-primary btn-sm text-white">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
