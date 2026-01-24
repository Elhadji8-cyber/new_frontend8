import Link from "next/link"
import { IoHomeOutline } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
export const MobileNavbar = function(){
    return(
        <section>
          <Link href="#"><IoHomeOutline /> Acceuile</Link>
          <Link href="#"><FaBookReader />Courses</Link>
          <Link href="#"><FaSearch /> Search</Link>
          <Link href="#"><MdAccountCircle />Compte</Link>
        </section>
    )
}