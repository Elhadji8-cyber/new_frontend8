import NavLogo from "./NavLogo";
import NavLinks from "./NavbarLink";
import {SearBarSection} from "./SearchBarSection";
import NavActions from "./NavbarAction";
export default function NavbarDesktop() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50
                    w-full max-w-7xl px-6
                    flex items-center justify-between gap-5">
      <NavLogo />
      <NavLinks />
      <div className="w-full">
        <SearBarSection />
      </div>
      <NavActions />
    </nav>
  );
}
