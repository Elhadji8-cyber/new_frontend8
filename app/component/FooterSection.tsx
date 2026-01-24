import React from 'react';
import Image from "next/image"
import logo from "../image/logo.jpg"
import Link from "next/link"
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import { TfiYoutube } from "react-icons/tfi";
import { AiOutlineTikTok } from "react-icons/ai";
export const FooterSection = function(){
    return(
        <section className='bg-indigo-500'>
            <div className='flex flex-col lg:flex-row justify-center  gap-3 p-4'>
                <main className='flex flex-col  w-full lg:w-100 gap-3'>
                    <div className='flex items-center gap-2'>
                    <Image src={logo}
                     alt="logo" className='
                     w-15 h-15 object-cover lg:w-20 lg:h-20 md:h-20  rounded-full
                     '/>
                     <div>
                     <h4 className='text-sm lg:text-xl font-bold text-white'>Adam&apos;s Online</h4>
                     <p className='text-white'>Votre Platforme de formation</p>
                     </div>
                     </div>
                    <p className='flex flex-col items-center text-white text-xl'>
                        La plateforme de référence pour les
                        formations en génie civil, architecture et
                        ingénierie.
                    </p>
                </main>
                <main className='flex flex-col p-3 items-center w-full lg:w-100 gap-5'>
                    <h4 className='text-xl font-bold text-white'>Formation</h4>
                    <Link href="/courses" className='hover:text-black/50 transition-all duration-300 text-white'>Catalogue</Link>
                     <Link href="/logiciel" className='hover:text-black/50 transition-all duration-300 text-white'>Logiciels</Link>
                      <Link href="/parcour" className='hover:text-black/50 transition-all duration-300 text-white'>Parcours</Link>
                       <Link href="/entreprise" className='hover:text-black/50 transition-all duration-300 text-white'>Entreprise</Link>
                </main>
                <main className='flex flex-col justify-center p-3 items-center w-full lg:w-100 gap-5'>
                   <h4 className='text-xl font-bold text-white'> A Propos</h4>
                   <Link href="/apropos" className='hover:text-black/50 transition-all duration-300 text-white'>Notre Histoire</Link>
                   <Link href="/apropos" className='hover:text-black/50 transition-all duration-300 text-white'>Notre Equipe</Link>
                   <Link href="/apropos" className='hover:text-black/50 transition-all duration-300 text-white'>Témoignage</Link>
                   <Link href="/apropos" className='hover:text-black/50 transition-all duration-300 text-white'>Blog</Link>
                </main>
                <main className='flex flex-col justify-center items-center gap-5'>
                    <h4 className='text-xl font-bold text-white'>Contact</h4>
                    <article className='flex gap-2 items-center'>
                       <MdOutlineEmail className='text-2xl text-white' />
                       <Link href="#" className='text-white'>adamaonline11@gmail.com</Link>
                    </article>
                    <article className='flex gap-2 items-center'>
                        <MdOutlinePhone className='text-2xl text-white'/>
                        <p className='text-white'>+221 77 086 22 26</p>
                    </article>
                    <article className='flex gap-2 items-center'>
                      <IoLocationOutline className='text-2xl text-white'/>
                      <p className='text-white'>Sénégal, Dakar, Dieupeul</p>
                    </article>
                    {/*--------Social media link----------- */}
                    <article className='flex gap-2 items-center mt-2'>
                        <Link href="https://www.facebook.com/profile.php?id=61563615630999"><RiFacebookFill className='text-2xl text-white'/></Link>
                        <Link href="https://www.linkedin.com/in/adams-btp-1067a3205/"><RiLinkedinLine className='text-2xl text-white'/></Link>
                        <Link href="https://www.youtube.com/@adamsbtp"><TfiYoutube className='text-2xl text-white'/></Link>
                        <Link href="https://www.tiktok.com/@av.btp"><AiOutlineTikTok className='text-2xl text-white'/></Link>
                    </article>
                </main>
            </div>
            <hr/>
            <div className='mt-5 p-5'>
                <div className='flex justify-between justify-items-center items-center'>
                    <p className='p-2'>2025 Adam&apos;s Online</p>
                    <Link href="#" className='hover:underline transition-all duration-300 p-2'>Design & Build By Elhadji.Dev</Link>
                </div>
            </div>
        </section>
    )
}