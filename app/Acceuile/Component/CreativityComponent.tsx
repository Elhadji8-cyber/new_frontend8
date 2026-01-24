import Image from "next/image"
import image1 from "./image/grand.image.jpg"
import message from './image/message-removebg-preview.png'
import sun from './image/soleil.png'
import react from './image/react1.png'
import nextjs from './image/github.png'
import Link from "next/link"
import family from './image/Family_Values_-_Chat_Heart-removebg-preview.png'
export const CreativityComponent = function(){
    return(
        <section className="h-fitt relative">
            <div className="flex justify-center items-center gap-10  mt-5 p-5">
           {/*----------------text section------------*/}
           <div className="flex flex-col p-5 gap-5 w-[50%] mt-40">
               
               <main className="flex justify-between bg-orange-500 h-[90px] p-3 rounded-full items-center">
                  <h2 className="bg-white px-6 p-5 rounded-full text-4xl font-bold w-full">Créativité viser la qualité</h2>
                  <div className="flex justify-center ml-2 gap-10 text-4xl">
                     <p className="p-3 border-2 rounded-full border-white">🤩​</p>
                     <p className="p-3 border-2 rounded-full border-white">🤓​</p>
                  </div>
               </main>
               <main className="flex justify-between ml-10 bg-orange-500 h-[90px] p-3 rounded-full items-center">
                <h2 className="bg-white px-6 p-5 rounded-full text-4xl font-bold w-full">Apprendre les nouvelles technologies</h2>
                <div>
                    <Image src={message} alt="message" className="w-[200px] h-[80px] object-cover mt-10"/>
                    <h2 className="relative bottom-15 left-10 text-4xl font-bold">Avec Ai</h2>
                </div>
               </main>
               <main className="flex justify-between bg-orange-500 h-[90px] p-3 ml-20 rounded-full items-center">
                 <Image src={sun} alt="soleil" className="w-[90px] p-3 rounded-full border-2 border-white"/>
                 <h2 className="bg-white px-6   rounded-full text-5xl font-bold w-full h-[80px] py-3">offrir des opportunités à tous
                 </h2>
               </main>
               <main className="flex  text-center bg-orange-500 h-[90px]  ml-40 p-3 rounded-full items-center">
                  <Image src={react} alt='react' className="w-[80px] h-[80px] rounded-full object-cover"/>
                  <Image src={nextjs} alt='nextjs' className="w-[80px]"/>
                  <div className="w-full bg-orange-500 rounded-full p-3 h-[80px] flex justify-center items-center">
                    <main className="w-full text-3xl lg:text-3xl text-bold text-white  p-3 border-2 border-white rounded-full ">
                        HTML, CSS, JavaScript, React, Next.js
                    </main></div>
               </main>
               {/*----------------button section------------*/}
               <main className="flex gap-5 items-center mt-5 ml-30">
                <Link href="#"
                className="px-8 py-3 border-2 border-orange-500 lg:text-xl 
                text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
                >Certificat</Link>
                <Link href="#"
                className="px-8 py-3 bg-orange-500 lg:text-xl rounded-full text-white"
                >Formation</Link>
               </main>
          </div>
              {/*----------------image section------------*/}
          <div className="flex flex-1 flex-col relative">
             <main className="mt-20 h-[400px] rounded-[20px]">
                <Image src={image1} alt='image1' className="w-full h-[500px] rounded-[20px] object-cover"/>
             </main>
             <main>
                <article className="relative bg-orange-500 text-white font-bold rounded-full p-1 w-[200px] bottom-90">
                    <p>le travail de mes reve🤓</p>
                </article>
                <article className="absolute bg-black text-orange-500 font-bold rounded-full p-1 w-[200px] bottom-100 left-80">
                    <p>le gout du freelancing❤️</p>
                </article>
                <article className="absolute bg-white text-orange-500 font-bold rounded-full p-1 w-[200px] bottom-30 ">
                    <p>le travail a distance🧑‍💻</p>
                </article>
                <article className="relative border-2 border-orange-500 text-white font-bold rounded-full p-1 w-[210px] bottom-40 left-60">
                    <p>Certifycat international👨🏼‍🎓</p>
                </article>
             </main>
           </div>
        </div> 
          <Image src={family} alt='family' className="absolute bottom-10 w-[100] h-[100] left-200"/>
        </section>
    )
}