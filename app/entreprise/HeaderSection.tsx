"use client"
import {motion} from "framer-motion"
export const HeaderSection = function(){
    return(
        <section className="bg-blue-500 w-full h-[50vh] p-5 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center p-5">
                <motion.h1 
                initial={{opacity:0, y:25}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="text-2xl md:text-4xl lg:text-6xl font-bold text-white p-1"> Formation pour Entreprises</motion.h1>
                <motion.p 
                 initial={{opacity:0, y:30}}
                 whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="text-sm md:text-lg lg:text-xl p-1 flex flex-col lg:flex-row text-white items-center">Développez les compétences de vos équipes 
                    <span className="pl-1">avec des programmes sur mesure</span>
                </motion.p>
                <motion.span 
                initial={{opacity:0, y:35}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="text-center text-white text-lg">adaptés aux besoins de votre entreprise</motion.span>
            </div>
        </section>
    )
}