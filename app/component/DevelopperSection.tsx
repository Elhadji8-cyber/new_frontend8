import {CounterTimer} from "./Component/CounterTimer"
import { LiaCertificateSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import Link from "next/link"
import { CiVideoOn } from "react-icons/ci";
import Image from "next/image";
import image1 from "./image/devimage.jpg"
const Registration = new Date("2026-01-01T23:59:59")
export const DevelopperSection = function(){
    return(
        <section className="flex flex-col justify-center p-5 itmes-center overflow-x-hidden">
          <div className="flex gap-5 justify-center bg-white p-3 rounded-xl shadow-2xl items-center mb-5 mt-10 flex-col lg:flex-row">
            {/*-------image main div-------------*/}
            <main className="w-full lg:w-260 relative">
                <Image src={image1} alt="image" className="w-full rounded-xl "/>
             <div className="absolute inset-0 bg-red-500/40 w-full h-full
             flex flex-col rounded-xl  text-white
             ">
               <p className="absolute ml-3 text-black bottom-25 lg:top-48">Commencez Ajourd&apos;hui</p>
               <h4 className="absolute w-60 lg:w-100 ml-3 bottom-4 lg:top-53 text-black text-xl md:text-3xl lg:text-4xl font-bold">Transformez Votre Carrière avec Adam&apos;s Academy</h4>
             </div>
            </main>
            {/**-------txt main div------------ */}
            <main className="w-full lg:w-200 flex flex-col justify-center items-center">
              <h4 className="flex flex-col justify-center items-center p-1 text-xl md:text-3xl lg:text-5xl font-bold">Prêt à Développer
                <span>Vos Compétences ?</span>
              </h4>
              <p
              className="text-sm md:text-lg lg:text-lg p-1 flex flex-col justify-center items-center"
              >Rejoignez des milliers d'ingénieurs et architectes qui ont boosté
                <span>leur carrière grâce à nos formations certifiantes. Accès illimité,</span>
                <span>support expert, certificats reconnus.</span>
                <span><CounterTimer
                endDate={Registration}
                label="Clôture des promotion dans: "
                /></span>
              </p>
              <Link 
              className="flex items-center justify-center gap-2 w-full
              text-white px-4 py-2 text-sm lg:text-lg md:text-lg lg:py-3 bg-slate-600 rounded-lg text-center"
              href="#">Formation Gratuit<FaArrowRight /></Link>
              <p className="p-1 mt-2">Formation Gratuite Sur toutes les logiciels </p>
              <article className="flex justify-evenly gap-5 items-center mt-4">
                <main className="flex flex-col justify-center items-center">
                  <CiVideoOn className="text-slate-600 text-4xl"/>
                  <p>250+ heures de vidéos</p>
                </main>
                <main className="flex flex-col justify-center items-center">
                  <LiaCertificateSolid className="text-slate-600 text-4xl"/>
                  <p>Certificats reconnus</p>
                </main>
                <main className="flex flex-col justify-center items-center">
                  <BiSupport className="text-slate-600 text-4xl"/>
                  <p>Support 24/7</p>
                </main>
              </article>
            </main>
          </div>
        </section>
    )
}