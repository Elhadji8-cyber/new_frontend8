"use client"
import type { IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { GoGraph } from "react-icons/go";
import { MdSecurity } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";
import { RiCustomerService2Line } from "react-icons/ri";
import {motion} from "framer-motion"
type DataCard = {
    icon : IconType;
    title:string;
    desc: string;
}
const CardItem: DataCard[] = [
     {
        icon: CgProfile,
        title:"Formation Sur Mesure",
        desc:"Programmes personnalisés selon vos besoins spécifiques et objectifs métier"
     },
     {
        icon:GoGraph,
        title:"Suivi des Progrès",
        desc:"Tableaux de bord détaillés pour suivre l'évolution de vos collaborateurs"
     },
     {
        icon: MdSecurity,
        title:"Certifications Reconnues",
        desc:"Diplômes et certifications officiels valorisant les compétences acquises"
     },
     {
        icon:CiCalendar,
        title:"Flexibilité Totale",
        desc:"Formation en ligne accessible 24/7 pour s'adapter aux emplois du temps"
     },
     {
        icon:SlPeople,
        title:"Formateurs Experts",
        desc:"Professionnels expérimentés issus de l'industrie de la construction"
     },
     {
        icon:RiCustomerService2Line,
        title:"Support Dédié",
        desc:"Accompagnement personnalisé et assistance technique prioritaire"
     }
]
export const CardSecion = function(){
    return(
        <section className="flex flex-col mb-5 p-5 md:p-6 lg:p-20 justify-center items-center mt-20 gap-3 bg-neutral-200 text-black">
         <h1 className="text-xl md:text-4xl lg:text-5xl font-bold p-1 text-black">Pourquoi Choisir GénieFormation ?</h1>
         <div className="grid grid-cols-1 justify-items-center gap-3 md:grid-cols-2 lg:grid-cols-3 mt-3 text-black">
            {CardItem.map((d, indx) => (
                <motion.div key={indx}
                initial={{opacity:0, y:35}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="w-full lg:w-105 md:w-75 rounded-xl
                flex flex-col gap-2 p-5
                hover:shadow-xl transition-shadow duration-300 bg-neutral-300 text-black"
                >
                  {(()=> {
                    const Icon = d.icon;
                    return <Icon className="text-5xl text-white p-2 rounded-full bg-blue-300"/>
                  })()}
                  <h3 className="text-xl md:text-2xl lg:text-2xl font-bold text-black">{d.title}</h3>
                  <p className="text-sm md:text-lg text-black  ">{d.desc}</p>
                </motion.div>
            ))}
         </div>
        </section>
    )
}