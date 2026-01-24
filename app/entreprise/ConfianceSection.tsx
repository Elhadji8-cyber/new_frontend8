import { FaRegBuilding } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BiBuildingHouse } from "react-icons/bi";
import { TbBuildingBurjAlArab } from "react-icons/tb";
import { RiBuilding2Line } from "react-icons/ri";
import { TbBuildingCommunity } from "react-icons/tb";
export const ConfianceSection = function(){
    return(
        <section className="flex flex-col justify-center items-center mt-10 p-5 md:p-10 lg:p-15">
            <div className=" flex flex-col justify-center items-center p-5">
                <h2 className="text-xl lg:text-5xl md:text-3xl font-bold p-1">Ils Nous Font Confiance</h2>
                <p className="p-2">Plus de 150 entreprises du BTP nous font confiance pour former leurs équipes</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex justify-between gap-5 w-full p-5">
            <main className="flex flex-col w-full lg:w-80 items-center bg-neutral-100 shadow-lg
            hover:shadow-xl transition-shadow duration-300
            gap-3 p-5 rounded-xl">
                <FaRegBuilding className="text-6xl p-2 bg-blue-300 rounded-xl text-white"/>
                <h4 className="text-sm   p-1">Bouygues Construction</h4>
            </main>
            <main className="flex flex-col w-full lg:w-80 items-center bg-neutral-100 shadow-lg
            hover:shadow-xl transition-shadow duration-300
            gap-3 p-5 rounded-xl">
              <HiOutlineOfficeBuilding className="text-6xl p-2 bg-blue-300 rounded-xl text-white"/>
              <h4 className="text-sm   p-1">Vinci Construction</h4>  
            </main>
            <main className="flex flex-col w-full lg:w-80 items-center bg-neutral-100 shadow-lg
            hover:shadow-xl transition-shadow duration-300
            gap-3 p-5 rounded-xl">
              <BiBuildingHouse className="text-6xl p-2 bg-blue-300 rounded-xl text-white"/>
              <h4 className="text-sm   p-1">Eiffage</h4>
            </main>
            <main className="flex flex-col w-full lg:w-80 items-center bg-neutral-100 shadow-lg
            hover:shadow-xl transition-shadow duration-300
            gap-3 p-5 rounded-xl">
              <TbBuildingBurjAlArab className="text-6xl p-2 bg-blue-300 rounded-xl text-white"/>
              <h4 className="text-sm   p-1">Spie Batignolles</h4>
            </main>
            <main className="flex flex-col w-full lg:w-80 items-center bg-neutral-100 shadow-lg
            hover:shadow-xl transition-shadow duration-300
            gap-3 p-5 rounded-xl">
                <RiBuilding2Line className="text-6xl p-2 bg-blue-300 rounded-xl text-white"/>
                <h4 className="text-sm   p-1">NGE</h4>
            </main>
            <main className="flex flex-col w-full lg:w-80 items-center bg-neutral-100 shadow-lg
            hover:shadow-xl transition-shadow duration-300
            gap-3 p-5 rounded-xl">
                <TbBuildingCommunity className="text-6xl p-2 bg-blue-300 rounded-xl text-white"/>
                <h4 className="text-sm   p-1">Rabot Dutilleul</h4>
            </main>
            </div>
        </section>
    )
}