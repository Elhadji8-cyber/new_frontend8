import Link from "next/link"
import Image from "next/image"
import mosaic1 from "./image/mosaic1.png"
import image1 from "./image/security.jpeg"
import image2 from "./image/enligne.png"
import image3 from "./image/limage.jpg"
export const CommunauteSection = function(){
    return(
        <section className="flex flex-col lg:flex-row justify-center w-full items-center bg-indigo-700 p-5 mt-10 ga-3">
          <div className="flex flex-col justify-between items-center w-80 md:w-100 lg:w-[60%] p-5 h-full lg:h-[65vh]">
            <main>
                <p className="font-bold text-white">Communautés 2025 & 2026</p>
            </main>
            <main className="flex flex-col justify-center items-center w-full">
                <h2 className="text-2xl md:text-3xl text-white lg:text-5xl font-bold p-1">Notre Communauté</h2>
                <p className="flex flex-col text-white items-center p-1 text-sm lg:text-lg md:text-lg">Commencez votre parcours de formation
                 <span className="flex flex-col lg:flex-row justify-center items-center"> <span> dès aujourd'hui et développez les </span> compétences
                 quiferont la différence</span> </p>
                 <span className="flex gap-3 p-2">
                    <Link href="#" className=" px-3 py-2 md:px-4 md:py-2 lg:px-8 lg:py-2 bg-white  rounded-full">Formation</Link>
                    <Link href="#" className=" px-3 py-2 md:px-4 md:py-2 lg:px-8 lg:py-2 border-2 border-white text-white rounded-full">Contatct</Link>
                 </span>
            </main>
            <main className="flex flex-col ">
                <p className="text-white flex flex-col lg:flex-row justify-center items-center">profitez de one on one meeting et 
               <span className="flex flex-col lg:flex-row justify-center items-center">exercices 
                pour vous aider à <span> progresser dans vos études</span></span></p>
                <p className="justify-end text-white font-bold text-center">24h/7 En Ligne</p>
            </main>
          </div>
          {/*---------mosaic desgn section--------*/}
          <div className="flex flex-col w-full lg:w-[60%] p-5">
            <main className="flex ">
                <div className="lg:w-70 lg:h-38.5 md:w-50 md:h-37.5 w-40 h-38 bg-yellow-400 rounded-full"></div>
                <Image src={image1} alt="image" className="lg:w-60 lg:h-38.5 md:w-50 mg:h-37.5 w-30 h-38 object-cover rounded-full"/>
                <div className="lg:w-60 lg:h-37.5 md:w-50 mg:h-38.5 w-40 h-38 bg-yellow-400 rounded-full"></div>
            </main>
            <main className="w-full ">
                <Image src={mosaic1} alt="image" className="w-full h-37.5 lg:w-190 object-cover rounded-full"/>
            </main>
            <main className="flex ">
                <div className="lg:w-87.5 lg:h-37.5 md:w-87.5 md:h-37.5 w-50 h-38 bg-yellow-400 rounded-full"></div>
                <Image src={image2} alt="image" className="lg:w-50 lg:h-37.5 md:w-50 md:h-37.5 w-30 h-38 object-cover rounded-full"/>
                <div className="lg:w-50 ld:h-37.5 md:w-50 md:h-37.5 w-30 h-38 rounded-full bg-yellow-400 "></div>
            </main>
            <main className="flex">
                <div className="lg:w-50 lg:h-37.5 md:w-50 md:h-37.5 rounded-full bg-yellow-400"></div>
                <div className="lg:w-87.5 lg:h-37.5 md:w-87.5 md:h-37.5 bg-yellow-400 rounded-full"></div>
                <Image src={image3} alt="image" className="lg:w-50 md:w-50 object-cover lg:h-37.5 md:h-37.5 rounded-full"/>
            </main>
        </div>  
        </section>
    )
}