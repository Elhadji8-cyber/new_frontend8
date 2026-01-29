"use client"
import {motion} from "framer-motion"
import Link from "next/link"
const fadeUp ={
    hidden: {opacity: 0, y: 30},
    visible: {opacity: 1, y:0}
}
export const AcademySection = function(){
    return(
        <section className="flex justify-center overflow-x-hidden items-center p-5 h-[30vh]">
            <div className="flex-1 flex flex-col justify-center  items-center gap-5">
                <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                transition={{duration:0.8, ease:"easeOut"}}
                className="flex flex-col justify-center relative left-0 lg:left-30   items-center gap-5">
                <p className="text-lg lg:text-xl md:text-lg text-black">Apprenez auprès des meilleurs</p>
                <h2 className="text-4xl lg:text-7xl font-semibold text-black">ADAM&apos;S ACADEMY</h2>
                <p className="flex flex-col items-center text-sm lg:text-xl md:text-lg"> 
                    <span className="flex flex-col lg:flex-row items-center text-black"> Façonnez votre avenir dans le domaine du design 
                     <span className="pl-2 text-black"> Architécture et</span>
                    </span>
                    <span className="text-black"> La créativité du Génie Civil</span>
                </p>
                </motion.div>
            </div>
            <div className="w-67.5 p-3 bg-white/20 rounded-md hidden lg:flex flex-col">
                <p>Libérez votre potentiel créatif.
                 Plus de 2000 cours en Architecture & Génie Civil</p>
                 <Link href="../../courses" className="flex flex-col w-full hover:underline underline-offset-4 underline-2">voir Plus
                 
                 </Link>
            </div>
        </section>
    )
}