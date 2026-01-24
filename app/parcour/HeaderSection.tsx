"use client"
import {motion} from "framer-motion"
const fadeUp ={
    hidden: {opacity:0, y:40},
    visible: {opacity:1, y:0}
};
const fadeUpD ={
    hidden: {opacity:0, y:45},
    visible: {opacity:1, y:0}
}
export const HeaderSection = function(){
    return(
        <section className="flex justify-center items-center w-full bg-red-600 p-5 h-92.5">
           <div className="flex flex-col justify-center items-center w-full p-2">
            <motion.h1 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.5}}
            transition={{duration:0.7, ease: [0.22, 1, 0.36, 1]}}
            className="p-1 flex flex-col lg:flex-row gap-1 text-white items-center text-2xl lg:text-6xl md:text-4xl font-bold">
            Parcours de Formations <span>Certifiantes</span> </motion.h1>
            <motion.p
            variants={fadeUpD}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.6}}
            transition={{duration:0.9, ease: [0.22, 1, 0.36, 1]}}
            className="flex flex-col  items-center text-white text-sm lg:text-xl md:text-lg ">
                Des programmes complets pour développer votre 
                <span> expertise et accélérer votre carrière dans</span>
                <span> l'ingénierie et l'architecture</span>
            </motion.p>
            </div> 
        </section>
    )
}