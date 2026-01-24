import Image from "next/image";
import logo from "../image/logo.jpg";

export default function NavLogo() {
  return (
    <Image
      src={logo}
      alt="Logo"
      className="w-10 h-10 rounded-full object-cover"
    />
  );
}
