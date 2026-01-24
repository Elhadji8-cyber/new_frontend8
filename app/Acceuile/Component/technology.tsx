import message from './image/message-removebg-preview.png'
import { FaBookOpenReader } from "react-icons/fa6";
import Link from "next/link"
import line from "../../../public/line.png"
import Image from "next/image"
import type { StaticImageData } from "next/image";
import webdev from "../../../public/web-dev.jpg"
import app from "../../../public/app-dev.jpg"
import data from "../../../public/m-data.jpg"
import uiux from "../../../public/ui-2.jpg"
import marketing from "../../../public/s-marketing.jpg"
import comptable from "../../../public/comptable.jpg"
import cyber from "../../../public/cyber-course.jpg"
import devops from "../../../public/Devops.jpg" 
type courseCard = {
    image: StaticImageData | string;
    title: string;
    description: string;
    link: string;
}
const dataCourse : courseCard[] =[
      {
        image: webdev,
        title: "Développement Web",
        description: "Apprend le frontend et le backend pour créer des sites web dynamiques.",
        link: "acceder au cours"
      },
      {
        image: app,
        title: "Développement Mobile",
        description: "Maîtrise la création d'applications mobiles pour Android et iOS.",
        link: "acceder au cours"
      },
      {
        image: data,
        title: "Data Analyst",
        description: "Analysez des données pour prendre des décisions éclairées.",
        link: "acceder au cours"
      },
      {
          image: uiux,
          title: "UI/UX Design",
          description: "Créez des interfaces utilisateur intuitives et attrayantes.",
          link: "acceder au cours"
      },
      {
         image: marketing,
          title: "Marketing Digital",
          description: "Apprenez à promouvoir des produits et services en ligne.",
          link: "acceder au cours"
      },
      {
         image: comptable,
          title: "Comptabilité",
          description: "Maîtrisez les principes de la comptabilité pour gérer les finances.",
          link: "acceder au cours"
      },
      {
        image: cyber,
        title: "Cybersécurité",
        description: "Protégez les systèmes et les données contre les cyberattaques.",
        link: "acceder au cours"
      },
      {
        image: devops,
        title: "DevOps",
        description: "Automatisez les processus de développement et d'exploitation.",
        link: "acceder au cours"
      }
]
export const TechnologySection = function(){
         return(
            <section className=' mt-10 w-full lg:mt-20 p-10 flex flex-col gap-5 bg-orange-500'>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-3 ">
                <article className='flex flex-col flex-1 gap-2 w-full relative'>
                <main className="flex flex-col lg:flex-row justify-between  lg:ml-10 relative right-8  w-[350px] lg:w-[90%] bg-black h-[60px] lg:h-[96px] p-3 rounded-full items-center">
                   <h2 className="bg-white lg:px-6 lg:p-5 p-2 rounded-full text-sm lg:text-5xl md:text-3xl font-bold w-full">Apprendre les nouvelles technologies </h2>
                   <div className="hidden lg:flex md:flex">
                    <Image src={message} alt="message" className="  w-[270px] h-[80px] object-cover "/>
                    <h2 className="relative top-5  right-35 w-full text-4xl font-bold">Avec Ai</h2>
                  </div>
                </main>

                <main className="flex justify-between mr-10 w-[300px] lg:mt-10 mt-0 relative right-7 lg:mt-0 lg:ml-20 bg-black h-[60px] lg:h-[96px]  lg:w-[80%] p-2 rounded-full items-center">
                   <h2 className="bg-white lg:px-6 px-3 lg:p-5  p-2 rounded-full text-sm lg:text-5xl font-bold w-full">Catégorie d'apprentissage ci-dessous </h2>
                </main>
                </article>
                {/*-------------main svg----------------------*/}
                <main className='flex flex-col justify-between itmes-center gap-2'>
                     <div className="flex justify-center items-center ga-2">
                        <Image src={line} alt="image" width={300} className='h-[100px]'/>
                        <FaBookOpenReader  className='text-2xl lg:text-4xl text-white'/>
                        <Image src={line} alt="image"  width={300} className='h-[100px]'/>
                     </div>
                     <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
                        <p className=' flex flex-col text-white'>
                          Découvrez les programmes ODS conçus par des experts
                          <span>du numérique et adaptés aux besoins du marché.</span>
                          <span>chaque idée et chaque projet contribuent à bâtir un futur meilleur</span>
                        </p>
                        <Link href="#"
                        className='px-6 py-3 bg-black rounded-xl text-white'
                        >voire tout</Link>
                     </div>
                </main>
            </div>
            {/*----------card online course section----------*/}
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-2 mt-10 justify-items-center '>
                {dataCourse.map((item, index)=> (
                    <div key={index} className='flex flex-col lg:flex-row justify-center items-center gap-5 lg:w-[460px] md:w-[230px] w-full  bg-black p-3 rounded-xl'>
                        <main className='flex flex-col gap-2'>
                       <Image src={item.image} alt="image" className='w-[330px] h-[200px] object-cover rounded-xl'/>
                       <Link 
                       href={item.link}
                       className='px-4 py-2 bg-orange-500 text-sm lg:text-xl md:text-lg rounded-xl text-center text-white'
                       >
                       {item.link}</Link>
                       </main>
                         <main>
                        <h2 className='text-xl lg:text-3xl md:text-2xl font-bold lg:p-2 p-1 text-orange-500'>{item.title}</h2>
                        <p className='text-orange-500 text-sm lg:text-xl md:text-lg'>{item.description}</p>
                         </main>
                    </div>
                ))}
            </div>
            </section>
         )
}