import { CiSearch } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
export const MarchSection = function(){
    return(
        <section className="flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl lg:text-5xl md:text-4xl font-bold mt-5 p-1">Comment ça Marche?</h2>
            <div className="flex flex-col lg:flex-row mt-20 gap-5 justify-center items-center">
            <main className="flex flex-col justify-center
             items-center gap-3 w-full lg:w-87.5 hover:bg-neutral-100
              hover:shadow-lg transition-all duration-300 rounded-lg p-3">
                <CiSearch className="text-5xl p-1 bg-red-300 rounded-full text-white"/>
                <h4 className="text-sm lg:text-xl font-bold">Choisissez Votre Parcours</h4>
                <p className="flex flex-col items-center text-sm ">
                    Sélectionnez le programme adapté à vos
                     <span>objectifs</span>
                </p>
            </main>
            <main className="flex flex-col justify-center
             items-center gap-3 w-full lg:w-87.5 hover:bg-neutral-100
              hover:shadow-lg transition-all duration-300 rounded-lg p-3">
                <IoVideocamOutline className="text-5xl p-1 bg-red-300 rounded-full text-white" />
                <h4  className="text-sm lg:text-xl font-bold">Suivez les Formations</h4>
                <p className="flex flex-col items-center text-sm ">Apprenez à votre rythme avec nos cours
                    <span>vidéo</span>
                </p>
            </main>
            <main className="flex flex-col justify-center
             items-center gap-3 w-full lg:w-87.5 hover:bg-neutral-100
              hover:shadow-lg transition-all duration-300 rounded-lg p-3">
                <MdOutlineSettings className="text-5xl p-1 bg-red-300 rounded-full text-white"/>
                <h4  className="text-sm lg:text-xl font-bold">Réalisez des Projets</h4>
                <p  className="flex flex-col items-center text-sm ">Mettez en pratique sur des cas réels
                    <span>sur tous les logiciels.</span>
                </p>
            </main>
            <main className="flex flex-col justify-center
             items-center gap-3 w-full lg:w-87.5 hover:bg-neutral-100
              hover:shadow-lg transition-all duration-300 rounded-lg p-3">
                <GrCertificate className="text-5xl p-1 bg-red-300 rounded-full text-white"/>
                <h4  className="text-sm lg:text-xl font-bold">Obtenez Votre Certificat</h4>
                <p className="flex flex-col items-center text-sm ">Validez vos compétences officiellement
                   <span> avec une certificat.</span>
                </p>
            </main>
         </div>
        </section>
    )
}