import Link from "next/link";

export default function NavActions() {
  return (
    <div className="hidden lg:flex gap-3">
      <Link href="https://discord.gg/SgpkcRK4ze" className="btn-outline px-6 py-2 bg-white rounded-md text-black">
        Communautés
      </Link>
      <Link href="https://www.youtube.com/@adamsbtp" className="btn-primary px-6 py-2 border-2 border-white text-white rounded-md
      hover:bg-white hover:text-black transition-all duration-300">
        Formation
      </Link>
    </div>
  );
}
