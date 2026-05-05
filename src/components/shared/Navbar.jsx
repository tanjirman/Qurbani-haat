"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import NavLink from "./NavLink";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  if (isPending) {
    return (
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center mt-6">
        <div className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl shadow-lg border border-slate-100">
          <span className="loading loading-spinner loading-md text-green-600"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <nav className="w-full max-w-8xl my-6 mx-4 flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 transition-all duration-300">
        
        {/* Left: Brand */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 hover:opacity-80 transition-opacity">
            Qurbani<span className="text-green-600">Haat</span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-8 text-sm font-black uppercase tracking-widest text-slate-500">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/animals">All-Animals</NavLink>
            {user && <NavLink href="/myProfile">My Profile</NavLink>}
          </div>
        </div>

        {/* Right: Auth Actions */}
        <div className="flex-1 flex justify-end items-center gap-3">
          {user ? (
            <div className="flex items-center gap-4 bg-slate-900/5 p-1 rounded-full pl-4 border border-slate-950/5">
              {/* User Info Capsule */}
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-slate-400 leading-none">User</span>
                <span className="text-xs font-bold text-slate-900">{user.name}</span>
              </div>

              {/* User Avatar */}
              {user.image ? (
                <Image
                  src={user.image}
                  alt="user"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              )}

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-slate-900 hover:bg-red-600 text-white px-5 py-2.5 rounded-full text-xs font-black transition-all active:scale-95 shadow-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link 
                href="/login" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all active:scale-95"
              >
                Login
              </Link>

              <Link 
                href="/register" 
                className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all active:scale-95"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}