import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className="mt-4 flex flex-col gap-4 text-white">
      <Link href="/Acceuile">Acceuil</Link>
      <Link href="/courses">Catalogue</Link>
      <Link href="/logiciel">Logiciels</Link>
      <Link href="/parcour">Parcours</Link>
      <Link href="/entreprise">Entreprise</Link>
      <Link href="/apropos">À propos</Link>
    </div>
  );
}
