import Link from "next/link";
export default function NavLinks() {
  return (
    <ul className="hidden lg:flex gap-6 text-sm  text-white w-full">
      <li className="">
        <Link href="/Acceuile">Accueil </Link>
      </li>
      <li className="">
        <Link href="../courses">Catalogue</Link>
      </li>
      <li><Link href="/logiciel">Logiciels</Link></li>
      <li><Link href="/parcour">Parcours</Link></li>
      <li><Link href="/entreprise">Entreprise</Link></li>
      <li><Link href="/apropos">Àpropos</Link></li>
    </ul>
  );
}
