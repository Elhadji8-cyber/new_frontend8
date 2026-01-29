import Image from "next/image"
import Link from "next/link" 
import adams from "./image/exper.jpeg"
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
export const ExperienceSection = function(){
    return(
        <section className="flex flex-col jsutify-center items-center p-5 mt-5 md:mt-15 lg:mt-20 bg-neutral-300">
            <h2 className="text-4xl md:text-3xl lg:text-5xl font-bold p-1 text-black"> Instructeur</h2>
            <article className="flex flex-col lg:flex-row justify-evenly w-full items-center gap-5  p-3 mt-15 lg:w-355">
                <div className="w-full lg:w-[60%] lg:ml-5 relative overflow-y-hidden group">
                    <Image src={adams} alt="image"
                    className="w-full h-[50vh]  lg:h-[60vh] object-cover rounded-xl"
                    />
                    <main className=" absolute w-full h-full inset-0 rounded-xl lg:translate-y-full
                     group-hover:translate-y-[0%] opacity-100 lg:opacity-0 hover:opacity-100 flex-col
                       lg:flex hover:flex bg-indigo-400/50 transition-transform duration-300">
                    <article className=" bg-transiparent absolute
                     flex flex-col justify-center items-center p-2
                    inset-0 h-[25vh] lg:top-[63%] top-[50%] w-full">
                        <div className="flex flex-col justify-center items-center">
                            <h4 className="text-3xl md:text-4xl lg:text-3xl font-bold text-white">Adam&apos;s Academy</h4>
                            <p className="text-white">Fondateur & CEO: AV-BTP</p>
                        </div>
                        <div className="flex gap-3">
                          <Link href="https://www.facebook.com/profile.php?id=61563615630999" className="p-1 bg-indigo-600 rounded-xl hover:bg-yellow-400 transition-all duration-300"><CiFacebook className="text-3xl text-white"/></Link>
                          <Link href="https://www.linkedin.com/in/adams-btp-1067a3205/" className="p-1 bg-indigo-600 rounded-xl hover:bg-yellow-400 transition-all duration-300"><CiInstagram className="text-3xl text-white"/></Link>
                          <Link href="https://www.tiktok.com/@av.btp" className="p-1 bg-indigo-600 rounded-xl hover:bg-yellow-400 transition-all duration-300"><PiTiktokLogoThin className="text-3xl text-white"/></Link>
                        </div>
                        </article>
                    </main>
                    
                </div>
                <div className="w-full lg:w-[65%] h-full lg:h-[60vh] flex flex-col justify-between gap-3 p-3">
                    <main>
                     <Link href="https://discord.gg/SgpkcRK4ze"
                     className="flex items-center gap-1 underline font-medium hover:text-yellow-400 transition-all duration-300 text-black"
                     >Acceder au Communauté Discord 2025<FaArrowRightLong /></Link>
                    </main>
                    <main className="text-black">
                    <p className="flex flex-col text-sm w-full lg:text-xl md:text-lg p-1"> <span className="font-bold text-2xl text-indigo-600"> Hey, je m’appelle Adams.</span>
                      Je suis ingénieur en génie civil, architecture, génie plomberie
                     et génie mécanique, avec plusieurs années d’expérience dans le domaine 
                     du BTP.</p>
                    <p className="text-sm md:text-lg w-full lg:text-xl">Au fil des années, j’ai travaillé sur différents projets de construction,
                     allant de la conception à la réalisation, en passant par les études techniques,
                     les plans d’exécution et le suivi de chantier. Mon objectif a toujours été de 
                     proposer des solutions solides, fonctionnelles et durables, tout en respectant les
                     normes et les réalités du terrain.</p>
                     </main>
                     <main className="flex items-center gap-2">
                      <p className="text-2xl font-bold text-black">Mes réseaux</p>
                      <article className="flex gap-3">
                        <Link href="https://www.facebook.com/profile.php?id=61563615630999" className="p-1 bg-indigo-600 rounded-full hover:bg-yellow-400 transition-all duration-300"><CiFacebook className="text-2xl text-white"/></Link>
                          <Link href="https://www.linkedin.com/in/adams-btp-1067a3205/" className="p-1 bg-indigo-600 rounded-full hover:bg-yellow-400 transition-all duration-300"><CiInstagram className="text-2xl text-white"/></Link>
                          <Link href="https://www.tiktok.com/@av.btp" className="p-1 bg-indigo-600 rounded-full hover:bg-yellow-400 transition-all duration-300"><PiTiktokLogoThin className="text-2xl text-white"/></Link>
                      </article>
                     </main>
                </div>
            </article>
        </section>
    )
}