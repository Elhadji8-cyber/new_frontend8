"use client"
import type {Variants} from "framer-motion"
import type { StaticImageData } from "next/image"
import Image from "next/image";
import {motion, AnimatePresence } from "framer-motion";
import {useState} from "react"
import image1 from "./image/image-1.jpeg"
import image2 from "./image/image-2.jpeg"
import image3 from "./image/image-3.jpeg"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
type TransCard = {
    id:number;
    image:StaticImageData;
    desc:string;
    nom:string;
    domain:string;
}
const TransItems:TransCard[] =[
    {
      id:1,
      image: image1,
      desc:"Grâce à la formation Revit avancée, j'ai pu modéliser un projet de 15 étages en BIM complet. Les techniques apprises m'ont fait gagner 40% de temps sur la phase de conception.",
      nom:"Fatima Bah",
      domain:"Architecte BIM Chez Bouygues Construction"
    },
    {
        id:2,
        image:image2,
        desc:"La formation MS Project m'a permis de gérer efficacement des projets complexes. J'ai maintenant une vision claire de la planification et du suivi des chantiers.",
        nom:"Abdoulaye Dion",
        domain:"Chef de Projet chez Vinci COnstruction",
    },
    {
      id:3,
      image:  image3,
      desc:"AutoCAD n'a plus de secrets pour moi ! Les exercices pratiques et les projets réels m'ont permis de devenir autonome rapidement. Formation exceptionnelle.",
      nom:"Frida Ayela",
      domain:"Ingénieure Civile chez AV-Btp",
    }
]

//animation code for a temoignage code
const sliderVariant:Variants = {
    hidden:{
        opacity:0, 
        x:100, //arrive de la droite
    },
    visible:{
        opacity:1,
        x:0,
        transition: {
            duration:0.6,
            ease: "easeOut",
        },
    },
    exit: {
        opacity:0,
        x: -100, //sort à gauche
        transition:{
            duration:0.4,
            ease:"easeOut",
        },
    },
}


export const TemoignageSection = function(){
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const next = function(){
        setDirection(1);
        setIndex((prev)=> (prev + 1) % TransItems.length );
    };
    const prev = function(){
        setDirection(-1);
        setIndex((prev) => (prev - 1 + TransItems.length) % TransItems.length)
    }
    const card = TransItems[index]
    return(
        <section className="flex justify-center items-center mt-30 p-5 bg-neutral-300">
          <div className="relative overflow-hidden">   
           <AnimatePresence mode="wait">
              <motion.div 
              variants={sliderVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={card.id} className="flex flex-col lg:flex-row justify-center p-5 md:p-6 lg:p-20  items-center gap-3 md:gap-5 lg:gap-10">
                <Image src={card.image} alt="image"
                className="w-full h-[60vh] lg:h-[70vh] object-cover lg:w-150 md:w-100 rounded-xl "
                />
                   <main className="flex flex-col justify-evenly p-3 w-full md:w-100 lg:w-150 h-full ">
                     <p className="p-1 text-black text-sm md:text-lg lg:text-lg">(Témoignage Certifié)</p>
                     <h2 className="text-xl md:text-4xl lg:text-5xl font-bold flex flex-col text-black p-2">Des Professionnels Formés,
                     <span> Des Projets <span className="text-blue-500">Réussis</span> </span>
                       </h2>
                       <div>
                        <p className="text-sm md:text-lg lg:text-xl p-1 text-black">{card.desc}</p>
                        <h4 className="text-sm md:text-lg lg:text-lg font-bold p-1 text-black">{card.nom}</h4>
                        <p className="p-1  text-black">{card.domain}</p>
                       </div>
                       <main className="flex gap-10">
                        <button onClick={prev} 
                        className="px-3 py-2 bg-blue-500 rounded-full "
                        ><IoIosArrowBack className="text-4xl text-white"/></button>
                        <button onClick={next}
                        className="px-3 py-2 bg-blue-500 rounded-full "
                        ><IoIosArrowForward className="text-4xl text-white"/></button>
                       </main>
                   </main>
              </motion.div>
           </AnimatePresence>
           </div>
        </section>
    )
}