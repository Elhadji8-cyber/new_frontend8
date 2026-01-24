"use client"
import {motion} from "framer-motion"
const fadeUp = {
    hidden: {opacity: 0, y:40},
    visible: {opacity: 1, y: 0},
}
const fadeUpD = {
    hidden: {opacity:0, y:45},
    visible:{opacity:1, y:0}
}
export const HeaderSection = function(){
    return(
        <section className="flex justify-center items-center p-5
        w-full lg:h-[50vh] h-[40vh] bg-orange-500
        ">
            <div className="flex flex-col justify-center items-center">
                <motion.h1 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                transition={{duration:0.8, ease:"easeOut"}}
                className="text-xl lg:text-6xl font-bold md:text-5xl p-1 text-white"
                >Maîtrisez les Logiciels Leaders</motion.h1>
                <motion.p 
                variants={fadeUpD}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount:0.5}}
                transition={{duration:0.8, ease:"easeOut"}}
                className="flex flex-col lg:flex-row justify-center text-white items-center p-1 text-sm lg:text-xl md:text-lg">
                    Formez-vous sur les outils professionnels les plus 
                    <span>demandés dans l'industrie de la</span>
                </motion.p>
                <motion.span 
                variants={fadeUpD}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount:0.5}}
                transition={{duration:0.9, ease:"easeOut"}}
                className="text-sm md:text-lg lg:text-xl text-white">
                construction et de l'ingénierie</motion.span>
            </div>
        </section>
    )
}