
"use client"
import Link from "next/link"
import Image from "next/image"
import {Jost} from "next/font/google"
import type {StaticImageData} from "next/image";
import code from "./image/studen.code.jpg"
import data from "./image/student.data.jpg"
import uxui from "./image/student.uxui.jpg"
import marketing from "./image/marketing.jpg"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
const jost = Jost({
    subsets: ["latin"],
    weight: ["400", "700"]
})
type headerCard = {
   image: StaticImageData | string;
    title: string;
    description: string;
    link: string;
}
const headerCards: headerCard[] = [
    {
        image: code,
        title: "Développement Web",
        description: "Apprenez à créer des sites web modernes et réactifs.",
        link: "acceder au cours"
    },
    {
        image: data,
        title: "Data Science",
        description: "Maîtrisez les techniques de l'analyse de données.",
        link: "acceder au cours"
    },
    {
        image: uxui,
        title: "UX/UI Design",
        description: "Concevez des interfaces utilisateur intuitives et attrayantes.",
        link: "acceder au cours"
    },
    {
        image: marketing,
        title: "Marketing Digital",
        description: "Découvrez les stratégies pour booster votre présence en ligne.",
        link: "acceder au cours"
    }
]
export const HeadingPage = function(){
       return(
        <section className=" relative bottom-5 w-full h-[700px]">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                
            >
               {headerCards.map((card, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col justify-center items-center w-full p-10  rounded-lg m-5 h-[670px] ">
                        <Image src={card.image} alt={card.title} className="w-full h-[670px] object-cover rounded-xl "/>
                        <div className="absolute bottom-50 w-fitt left-20 flex flex-col gap-5">
                        <h2 className={`${jost.className} text-2xl lg:text-7xl text-orange-500 font-bold`}>{card.title}</h2>
                        <h3 className={`${jost.className} text-xl lg:text-4xl text-white`}>{card.description}</h3>
                        <Link href={card.link} className={`${jost.className} 
                            text-white px-6 py-2 bg-orange-500 rounded-full w-[200px] text-xl`}>Accéder au cours</Link>
                        </div>
                    </div>
                </SwiperSlide>
               ))}
            </Swiper>
        </section>
       )
}