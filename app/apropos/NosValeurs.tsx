"use client"
import { GoLightBulb } from "react-icons/go";
import { PiStarThin } from "react-icons/pi";
import { LuHandshake } from "react-icons/lu";
import { TfiWorld } from "react-icons/tfi";
import { Amaranth } from "next/font/google";
import {motion} from "framer-motion"

const amaranth = Amaranth({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const NosValeurs = function(){
    return(
        <section className="flex flex-col bg-neutral-200 justify-center items-center gap-3 p-5 mt-5 md:mt-15 lg:mt-20">
            <h2 className={`text-4xl md:text-3xl text-black lg:text-6xl p-1 ${amaranth.className} mt-3 font-bold`}>Nos Valeurs</h2>
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 p-3">
                <motion.div
                initial={{opacity:0, y:34}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="bg-white rounded-xl p-2 w-full lg:w-85.5 hover:shadow-xl transition-shadow duration-300">
                  <GoLightBulb  className="text-5xl p-1 bg-black/30 rounded-full text-white"/>
                  <h4 className="text-xl font-bold p-1 text-black">Innovation</h4>
                  <p className="text-black">Nous adoptons les dernières 
                technologies et méthodes pédagogiques pour
                  offrir une expérience d'apprentissage moderne
                  et efficace</p>
                </motion.div>
                <motion.div
                initial={{opacity:0, y:35}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="bg-white rounded-xl p-2 w-full lg:w-85.5 hover:shadow-xl transition-shadow duration-300">
                 <PiStarThin className="text-5xl p-1 bg-black/30 rounded-full text-white"/>
                 <h4 className="text-xl font-bold p-1 text-black">Excellence</h4>
                 <p className="text-black">Nos formateurs sont des experts reconnus
                 qui partagent leur savoir-faire et leur passion
                  pour former les meilleurs professionnels</p>
                </motion.div>
                <motion.div 
                initial={{opacity:0, y:36}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="bg-white rounded-xl p-2 w-full lg:w-85.5 hover:shadow-xl transition-shadow duration-300">
                  <LuHandshake className="text-5xl p-1 bg-black/30 rounded-full text-white"/>
                  <h4 className="text-xl font-bold p-1 text-black">Accompagnement</h4>
                  <p className="text-black">Chaque apprenant bénéficie d'un suivi 
                  personnalisé pour garantir sa réussite et
                  l'atteinte de ses objectifs professionnels</p>
                </motion.div>
                <motion.div 
                initial={{opacity:0, y:37}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="bg-white rounded-xl p-2 w-full lg:w-85.5 hover:shadow-xl transition-shadow duration-300"> 
                 <TfiWorld className="text-5xl p-1 bg-black/30 rounded-full text-white"/>
                 <h4 className="text-xl font-bold p-1 text-black">Accessibilité</h4>
                 <p className="text-black">Nos formations en ligne sont accessibles
                 partout et à tout moment, pour s'adapter aux 
                 contraintes de chacun</p>
                </motion.div>
            </article>
        </section>
    )
}