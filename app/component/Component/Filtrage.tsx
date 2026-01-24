import { FaRegBuilding } from "react-icons/fa";
import { GiSpookyHouse } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoWaterOutline } from "react-icons/io5";
import { IoReload } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
export const  FiltrageSection = function(){
    return(
        <section className="hidden lg:flex flex-col justify-center  p-3 gap-3">
          <div className="flex justify-between mr-5  items-center w-full">
            <h4 className="font-bold text-lg">Filtrer par</h4>
            <p className="flex gap-1 items-center text-sm"><IoReload /> Reintialiser</p>
          </div>
          <main className="relative ">
          <h5 className="text-sm font-bold">Domain D&apos;expertise</h5>
          </main>
          <div className="flex flex-col p-2 gap-3">
            <main className="flex p-1 gap-2">
               <input type="checkbox"
                className="h-6 w-6  cursor-pointer 
                 border-yellow-500 rounded
                 transition-all"/>
               <button
               className="flex items-center gap-3"
               ><FaRegBuilding className="text-xl"/><span className="text-sm">Génie Civil</span><span>()</span> </button>
            </main>
            <main className="flex p-1 gap-2">
                <input type="checkbox" className="h-6 w-6  cursor-pointer 
                 border-yellow-500 rounded
                 transition-all"/>
                <button className="flex items-center gap-3">
                  <GiSpookyHouse className="text-2xl"/> <span className="text-sm">Architecture</span><span>()</span></button>
            </main>
            <main className="flex p-1 gap-2">
                <input type="checkbox" className="h-6 w-6  cursor-pointer 
                 border-yellow-500 rounded
                 transition-all"/>
                <button className="flex items-center gap-3">
                  <IoSettingsOutline className="text-2xl"/> <span className="text-sm">Génie Mécanique</span><span>()</span></button>
            </main>
            <main className="flex p-1 gap-2">
                <input type="checkbox" className="h-6 w-6  cursor-pointer 
                 border-yellow-500 rounded
                 transition-all"/>
                <button className="flex items-center gap-3">
                  <IoWaterOutline className="text-2xl"/> <span className="text-sm">Plomberie</span><span>()</span></button>
            </main>
            <main className="flex p-1 gap-2">
                <input type="checkbox" className="h-6 w-6  cursor-pointer 
                 border-yellow-500 rounded
                 transition-all"/>
                <button className="flex items-center gap-3">
                  <SlEnergy className="text-2xl"/> <span className="text-sm">Génie Eléctrique</span><span>()</span></button>
            </main>
          </div>
        </section>
    )
}



