import Link from "next/link";
import {useState} from "react"
import {CatalogueSection} from "./CatalogueSection"
import { CatalogueModal } from "./CatalogueModal"
export default function NavLinks() {
  const [ouvreLe, setouvreLe] = useState(false)
  return (
    <ul className="hidden lg:flex gap-6 text-sm md:text-lg lg:text-lg text-white w-full">
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
