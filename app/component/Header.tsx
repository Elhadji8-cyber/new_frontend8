
"use client"
import Link from "next/link"
import Image from "next/image"
import {Jost} from "next/font/google"
import type {StaticImageData} from "next/image";
import image1 from "../image/image-1.png"
import image2 from "../image/image-2.jpg"
import image3 from "../image/image-3.jpg"
import image4 from "../image/image-4.png"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import {motion} from "framer-motion"
const fadeUp = {
    hidden: {opacity:0, y:30},
    visible: {opacity: 1, y:0}
}
type headerCard = {
   image: StaticImageData | string;
    title: string;
    description: string;
    link: string;
    lien: string;
}
const headerCards: headerCard[] = [
    {
        image: image1,
        title: "Bienvenue Chez Adams BTP, Votre École de Formation en Ligne",
        description: "Votre platforme de formation en ligne pour les métiers du BTP et de l'ingénierie et de l'architecture, avec des cours certifiants et des parcours adaptés à vos besoins",
        link: "acceder au cours",
        lien: "../courses"
    },
    {
        image: image2,
        title: "Maîtrisez les Outils du Génie Moderne, AutoCAD, Revit, ArchiCAD",
        description: "Formations certifiantes en Revit, AutoCAD, ArchiCAD et gestion de projets BIM. Apprenez à votre rythme avec des experts du secteur.",
        link: "acceder au cours",
        lien: "../courses"
    },
    {
        image: image3,
        title: "Obtenez un Certificat de votre Parcours Chez Adams Btp",
        description: "Des programmes complets pour développer votre expertise et accélérer votre carrière dans l'ingénierie et l'architecture, avec des certifications reconnues",
        link: "acceder au cours",
         lien: "../courses"
    },
    {
        image:image4,
        title: "Maîtrisez les Logiciels Leaders, AutoCAD, Revit, ArchiCAD",
        description: "Formez-vous sur les outils professionnels les plus demandés dans l'industrie de la construction et de l'ingénierie, avec des cours pratiques et des projets concrets",
        link: "acceder au cours",
        lien: "../courses"
    }
]
export const HeaderSection = function(){
       return(
        <section className=" relative right-5 bottom-10 w-100 md:w-195 lg:w-600  lg:h-180 h-full lg:right-4">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                className="w-full"
            >
               {headerCards.map((card, index) => (
                <SwiperSlide key={index} className="h-100 w-full">
                    <div className="flex flex-col  justify-center items-center w-full  h-150 md:h-[60vh] rounded-lg m-5 lg:h-180 relative ">
                        <Image src={card.image} alt={card.title} className="w-full  h-full object-cover rounded-xl "/>
                        <div className="w-full h-full bg-black/40 absolute">
                        <div className="absolute top-0 left-0  lg:left-10 flex flex-col gap-5  w-full lg:w-full rounded-xl h-full ">
                        <motion.h2 
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{duration:0.6}}
                        className={` text-2xl w-80 md:w-150 lg:w-[65%] mt-50 lg:mt-50 md:text-4xl ml-5 lg:text-6xl text-white font-bold`}>{card.title}</motion.h2>
                        <motion.h3 
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{duration:0.8}}
                        className={`  text-sm md:text-lg w-80 md:w-150 lg:w-175 ml-5 lg:text-xl text-white`}>{card.description}</motion.h3>
                         <main className="flex gap-2 items-center ml-3 lg:ml-6 w-60 lg:w-full">
                               <Link href={card.link} className={` 
                                 text-black w-25 md:w-35 px-3 py-1 lg:px-6 lg:py-2 bg-white rounded-full lg:w-40 size-fit  text-sm md:text-lg lg:text-xl `}>
                                    Nos Cours </Link>
                                <Link href={card.lien}
                                className=" border-2 w-25 md:w-35 lg:w-40 px-2 py-1 lg:px-6 lg:py-2  border-white rounded-full text-white text-sm md:text-lg lg:text-xl"
                                > Catalogue</Link>
                         </main> 
                         <div className="flex justify-evenly ml-0 md:ml-4 lg:ml-5 mt-10 lg:mt-20 p-2 w-80 md:w-full lg:w-ful text-white">
                            <main>
                                <h4 className="text-sm md:text-lg lg:text-3xl font-bold">15,000+</h4>
                                <p className="text-sm md:text-lg  lg:text-xl">Ingénieurs Formés</p>
                            </main>
                            <main>
                                <h4 className="text-sm md:text-lg  lg:text-3xl font-bold">250+</h4>
                                <p className="text-sm md:text-lg  lg:text-xl">Heures de Contenu</p>
                            </main>
                            <main>
                                <h4 className=" text-sm md:text-lg  lg:text-3xl font-bold">98%</h4>
                                <p className="text-sm md:text-lg  lg:text-xl">Taux de Satisfaction</p>
                            </main>
                        </div>       
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
               ))}
            </Swiper>
        </section>
       )
}