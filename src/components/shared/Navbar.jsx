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
      <div className="p-4 text-center"><span className="loading loading-spinner loading-md"></span></div>
    );
  }

  return (
    //<div className="navbar justify-between bg-base-100 shadow-md px-6">
      <nav className="container my-6 mx-auto flex items-center px-4">
  
  {/* Left */}
  <div className="flex-1">
    <Link href="/" className="text-2xl font-bold bg-linear-to-r from-green-700 via-green-600 to-purple-500 bg-clip-text text-transparent">
  Qurbani-Haat
</Link>
  </div>

  {/* Center */}
  <div className="flex-1 flex justify-center">
    <div className="hidden md:flex gap-6 text-xl font-medium">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/animals">Animals</NavLink>
      {user && <NavLink href="/myProfile">Profile</NavLink>}
    </div>
  </div>

  {/* Right */}
  <div className="flex-1 flex justify-end items-center gap-4">
    {user ? (
      <>
        {/* User Info */}
        <div className="flex items-center gap-2">
          {user.image ? (
            <Image
              src={user.image}
              alt="user"
              width={35}
              height={35}
              className="rounded-full"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-xl">
              {user.name?.charAt(0).toUpperCase()}
            </div>
          )}

          <span className="hidden md:block font-semibold">
            {user.name}
          </span>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="btn btn-sm text-xl btn-outline border-2 border-red-800 text-red-600 hover:text-white hover:bg-red-600  transition-colors duration-300 p-6"
        >
          Logout
        </button>
      </>
    ) : (
      <>
        <Link 
  href="/login" 
  className="btn btn-sm bg-green-800 text-white text-xl p-6 border-none hover:bg-green-700 transition-colors duration-300"
>
  Login
</Link>

<Link 
  href="/register" 
  className="btn btn-sm btn-outline border border-purple-800 text-xl text-purple-600 p-6 hover:bg-purple-800 hover:text-white hover:border-purple-800 transition-all duration-300"
>
  Register
</Link>
      </>
    )}
  </div>
</nav>//</div>
  );
}