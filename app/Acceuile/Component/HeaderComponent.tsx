import {Jost} from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import dev from "../../../public/apprend.jpg"
import { FaArrowRight } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";
import heroimage from "../../../public/hero-image.jpg"
import heroimage2 from "../../../public/hero-image2.jpg"
import heroimage3 from "../../../public/hero-image3.jpg"
const jost = Jost({
    subsets: ["latin"],
    weight: ["400", "700"]
})
export const HeaderComponent = function(){
    return(
        <section className="flex md:flex-row flex-col gap-2 justify-center  mt-20">
            <div className="flex flex-col gap-5">
                {/*---------text secttion & button----------*/}
                <main className="flex flex-col gap-3">
                   <article className="flex relative justify-center items-center">
                    <h1 className="flex flex-col text-3xl lg:text-7xl md:text-5xl  font-bold text-orange-500 p-3">
                        Formez-vous aux métiers <span>du futur avec ODS</span> 
                        <span>(Orange Digital School)</span>
                    </h1>
                   </article>
                   <article className="flex flex-col lg:flex-row gap-3 lg:gap-10 ml-5 items-center ">
                    <Link href="#"
                    className="flex gap-5 items-center px-8 py-4 bg-orange-500 text-sm lg:text-xl justify-center text-center w-full lg:w-[20%]"
                    > <span>Commencer</span><FaArrowRight /> </Link>
                    <p className="flex flex-col w-full text-sm  md:text-lg lg:w-[70%]">
                     ODS (Orange Digital School), la plateforme de formation numérique 
                       <span>qui prépare la nouvelle génération de talents africains aux compétences </span>
                       <span> du 21ᵉ siècle le savoir numérique est une clé pour l’avenir </span>
                    </p>
                   </article>
                </main>
                {/*--------gif image upload from canva--------*/}
                <main>
                  <Image src={dev} alt="moving GIF"
                   unoptimized={true} 
                   className="relative w-full h-[250px] lg:w-[90%] md:h-[350px] lg:h-[440px] object-cover rounded-[20px]"
                   />
                </main>
            </div>
            {/*------------design mode section-------------*/}
            <div>
                <main className="flex justify-center items-center">
                    <div className="w-30 h-30 lg:w-[200px] md:w-36 lg:h-[200px] bg-orange-500 rounded-tr-[50px] lg:rounded-tr-[100px]"></div>
                    <div className="w-30 h-30 lg:w-[200px] md:w-36 lg:h-[200px] bg-slate-500 rounded-br-[50px] lg:rounded-br-[100px]"></div>
                    <div className=" w-30 h-30 lg:w-[200px] md:w-36 lg:h-[200px] bg-black rounded-tl-[50px] lg:rounded-tl-[100px]"></div>
                </main>
                <main className="flex justify-center items-center">
                    <Image src={heroimage} alt="image" className="w-60 h-30 md:h-[150px] lg:w-[400px] lg:h-[200px] object-cover rounded-tl-[50px] rounded-br-[50px] lg:rounded-tl-[100px] lg:rounded-br-[100px]"/>
                    <div className="w-30 h-30 lg:w-[200px] md:w-36 lg:h-[200px] bg-orange-500 rounded-bl-[50px] lg:rounded-bl-[100px]"></div>
                </main>
                <main className="flex justify-center items-center">
                    <div className=" w-30 h-30 lg:w-[200px]  lg:h-[200px]  md:w-36 bg-orange-500 rounded-tl-[50px] lg:rounded-tl-[100px]"></div>
                    <div className=" w-30 h-30 lg:w-[200px] lg:h-[200px] md:w-36 bg-black rounded-full"></div>
                    <Image src={heroimage2} alt="image" className="w-30 h-30 lg:w-[200px] lg:h-[200px] md:w-36 bg-orange-500 rounded-tl-[50px] lg:rounded-tl-[100px]"/>
                </main>
                <main className="flex justify-center items-center">
                    <Image src={heroimage3} alt="image" className="w-30 h-30 lg:w-[200px] lg:h-[200px] md:w-36 bg-orange-500 object-cover "/>
                    <div className="w-30 h-30 lg:w-[200px] lg:h-[200px] md:w-36 bg-orange-500 "></div>
                    <div className="w-30 h-30  lg:w-[200px] lg:h-[200px] md:w-36 bg-black rounded-tr-[50px] rounded-bl-[50px] lg:rounded-tr-[100px] lg:rounded-bl-[100px]"></div>
                </main>
            </div>
      </section>
    )
}