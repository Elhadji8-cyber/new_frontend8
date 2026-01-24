"use client";
import { CiYoutube } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import NavLogo from "./NavLogo";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black px-4 py-3">
      <div className="flex justify-between items-center">
        <button onClick={() => setOpen(!open)}><IoMenuSharp  className="text-3xl text-white"/></button>
        <NavLogo />
        <Link href="https://www.youtube.com/@adamsbtp"><CiYoutube className="text-3xl text-white"/></Link>
      </div>

      {open && <MobileMenu />}
    </nav>
  );
}
