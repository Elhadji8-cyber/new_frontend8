import { LiaCertificateSolid } from "react-icons/lia";
import { VscAccount } from "react-icons/vsc";
import { GoProjectSymlink } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
export const MiniSection = function(){
    return(
        <section className="flex flex-col justify-center items-center p-3 mt-5">
             <div className="flex flex-col lg:flex-row md:flex-row lg:justify-evenly gap-5 items-center  p-2 mt-5 w-full">
            <main className="flex flex-col items-center py-4 lg:w-75 w-full bg-neutral-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <LiaCertificateSolid className="text-3xl lg:text-5xl p-1 bg-red-300 text-white  rounded-full"/>
                    <h4 className="lg:text-2xltext-lg font-bold">Certification Officielle</h4>
                    <p>Diplôme reconnu par l'industrie</p>
            </main>
            <main className="flex flex-col items-center py-4 lg:w-75 w-full bg-neutral-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <VscAccount className="text-3xl lg:text-5xl p-1 bg-red-300 text-white  rounded-full"/>
                <h4 className="lg:text-2xltext-lg font-bold">Accompagnement</h4>
                <p>Mentor dédié tout au long</p>
            </main>
            <main className="flex flex-col items-center py-4 lg:w-75 w-full bg-neutral-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <GoProjectSymlink className="text-3xl lg:text-5xl p-1 bg-red-300 text-white  rounded-full"/>
                <h4 className="lg:text-2xltext-lg font-bold">Projets Réels</h4>
                <p>Portfolio professionnel</p>
            </main>
            <main className="flex flex-col items-center py-4 lg:w-75 w-full bg-neutral-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <IoIosPeople className="text-3xl lg:text-5xl p-1 bg-red-300 text-white  rounded-full"/>
                <h4 className="lg:text-2xltext-lg font-bold">Réseau Professionnel</h4>
                <p>Communauté d'experts Discord</p>
            </main>
        </div>
        </section>
    )
}