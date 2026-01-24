"use client"
import type { Variants } from "framer-motion"
import {motion} from "framer-motion"
import Image from "next/image"
import image1 from "./image/apropo.jpg"
import { Amaranth } from "next/font/google";

const amaranth = Amaranth({
  subsets: ["latin"],
  weight: ["400", "700"],
});

//text animation-------
const paragraph:Variants = {
    hidden:{opacity:0, y:30},
    visible:{opacity:1, y:0, transition:{duration:0.8, ease:"easeOut"}}
}
//image section animation------
const imageVariants: Variants = {
    hidden:{opacity:0, y:30},
    visible:{opacity:1, y:0, transition:{duration:0.8, ease:"easeOut"}}
}
export const HistoricSection = function(){
    return(
        <section className="flex flex-col justify-center bg-neutral-200  items-center ">
            <article className="flex flex-col lg:flex-row justify-center w-full items-center gap-5 mt-5 md:mt-15 lg:mt-20 p-3">
            {/**----------------text section div-------------------------- */}
            <div className="w-full flex justify-center  flex-col gap-4 lg:w-[50%] lg:ml-5 p-3">
                <motion.h2 
                variants={paragraph}
                initial="hidden"
                whileInView="visible"
                className={`text-4xl md:text-3xl ${amaranth.className} lg:text-5xl font-bold p-1`}>Notre Histoire</motion.h2>
                <motion.p 
                variants={paragraph}
                initial="hidden"
                whileInView="visible"
                className="text-sm md:text-lg lg:text-xl p-1">Adam&apos;s-Online est née de la passion de professionnels du BTP qui ont
                constaté un manque criant de formations de qualité sur les logiciels
                 techniques essentiels à l'industrie.</motion.p>
                <motion.p  
                variants={paragraph}
                initial="hidden"
                whileInView="visible"
                className="text-sm md:text-lg lg:text-xl p-1">En 2015, notre fondateur Adam&apos;s, ingénieur BIM avec plus de 15 ans
                 d'expérience, a décidé de créer une plateforme qui démocratiserait l'accès
                 aux formations professionnelles de haut niveau.</motion.p>
                <motion.p  
                variants={paragraph}
                initial="hidden"
                whileInView="visible"
                className="text-sm md:text-lg lg:text-xl p-1">Aujourd'hui, nous sommes fiers d'avoir formé plus de 15,000 professionnels
                 et de collaborer avec les plus grandes entreprises du secteur. Notre équipe 
                 de formateurs experts continue d'innover pour offrir les meilleures formations
                 du marché.</motion.p>
                <motion.p 
                variants={paragraph}
                initial="hidden"
                whileInView="visible"
                className="text-sm md:text-lg lg:text-xl p-1">Notre objectif reste le même :<span className="font-bold text-indigo-500"> permettre à chaque professionnel d'atteindre 
                l'excellence </span>dans son domaine grâce à des formations pratiques, concrètes et 
                immédiatement applicables.</motion.p>
            </div>
            {/**----------------image section div------------------------- */}
            <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            className="w-full relative lg:w-[50%] ">
             <main className="relative w-full lg:w-[80%] h-full lg:h-[60vh]">
               <Image src={image1} alt="image"
               className="w-full h-full  rounded-xl object-cover"
               />
               <div className="absolute w-full rounded-xl bottom-2 inset-0 bg-black/40 h-full"></div>
            </main>
             <main className="absolute p-3 h-20 w-28 lg:w-38 lg:h-30 md:w-38 md:h-30 md:top-[90%] md:left-[75%]
             flex flex-col justify-center items-center inset-2 top-[85%] left-[60%] lg:top-[85%] lg:left-[68%]
             bg-indigo-600 rounded-xl">
                 <h2 className="text-xl md:text-2xl text-white lg:text-4xl font-bold p-1">15 ans</h2>
                 <p className="text-white">d&apos;expertise</p>
            </main>
            </motion.div>
        </article>
        </section>
    )
}