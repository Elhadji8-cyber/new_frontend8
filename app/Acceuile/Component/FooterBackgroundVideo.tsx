"use client"
import Image from "next/image"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import logo from "./image/logo-2.png"
import Link from "next/link"
export const FooterBackgroundVideo = function(){
    return(
        <section className="relative">
            {/*-----------video background video footer--------*/}
            <div className="absolute inset-0 w-full h-full">
              <video
              autoPlay 
              loop 
              muted 
              playsInline
              className=" inset-0 w-full h-[400px]  object-cover"
              >
                <source src="/video/bg-video.mp4" />
              </video>
            </div>
            {/*-----------text footer section and link----------*/}
            <div className="relative flex justify-evenly items-center h-[400px]  w-full bg-black/40 ">
              <main>
                <div className="flex flex-col p-2 justify-evenly">
                    <main className="flex items-center gap-2">
                    <Image src={logo} alt="logo" className="w-[100px] h-[100px] object-cover rounded-full"/>
                    <h4 className="text-3xl font-bold p-1 text-orange-500">orange digital school</h4>
                    </main>
                    <p className="flex flex-col p-1 text-xl text-white">
                        ODS (Orange Digital School), la plateforme de formation
                        <span> numérique qui prépare la nouvelle génération de talents africains aux</span>
                        <span> compétences du 21ᵉ siècle.</span>
                    </p>
                    <div className="flex gap-2 p-3">
                        <Link href="#"className="p-3 bg-orange-500 rounded-full"><FaFacebookF className="text-3xl text-white"/></Link>
                        <Link href="#" className="p-3 bg-orange-500 rounded-full"><FaInstagram  className="text-3xl text-white"/></Link>
                        <Link href="#" className="p-3 bg-orange-500 rounded-full"><FaLinkedinIn  className="text-3xl text-white"/></Link>
                        <Link href="#" className="p-3 bg-orange-500 rounded-full"><CiYoutube  className="text-3xl text-white"/></Link>
                    </div>
                </div>
              </main>
              <main className="flex flex-col p-2 ">
                <h4 className="text-3xl font-bold p-1 text-orange-500">course</h4> 
                <Link href="#" className="text-white hover:text-orange-500 transition:text duration-300">Developpement web</Link>
                <Link href="#"  className="text-white hover:text-orange-500 transition:text duration-300">Developpement App</Link>
                <Link href="#"  className="text-white hover:text-orange-500 transition:text duration-300">Ui, Ux Design</Link>
                <Link href="#"  className="text-white hover:text-orange-500 transition:text duration-300">Data Science</Link>
                <Link href="#"  className="text-white hover:text-orange-500 transition:text duration-300">Cyber Securité</Link>
                 <Link href="#"  className="text-white hover:text-orange-500 transition:text duration-300">Social Media Marketing</Link>
              </main>
              <main className="flex flex-col p-2 ">
                <h4 className="text-3xl font-bold p-1 text-orange-500">A props</h4>
                <Link href="#" className="text-white hover:text-orange-500 transition:text duration-300">A propos</Link>
                <Link href="#" className="text-white hover:text-orange-500 transition:text duration-300">Contact</Link>
                <Link href="#" className="text-white hover:text-orange-500 transition:text duration-300">FAQ</Link>
                <Link href="#" className="text-white hover:text-orange-500 transition:text duration-300">Blog</Link>
                <Link href="#" className="text-white hover:text-orange-500 transition:text duration-300">Carrière</Link>
              </main>
            </div>
        </section>
    )
}