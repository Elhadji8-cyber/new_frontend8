"use client"
import logo from "../image/logo.jpg"
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect } from "react";
import {motion, AnimatePresence} from "framer-motion"
import { SiAltiumdesigner } from "react-icons/si";
import { SiBlackmagicdesign } from "react-icons/si";
import { SiMaterialdesign } from "react-icons/si";
type ModalPopUp = {
    popUp : ()=> void;
}
export const CatalogueModal = function({popUp}:ModalPopUp){
    const [isactive, setIsactive] = useState("lescour")
    useEffect(()=> {
        const handlE = (i: KeyboardEvent)=> {
            if (i.key === "Escape") popUp();
        };
        window.addEventListener("keydown", handlE);
        return ()=> window.removeEventListener("keydown", handlE)
    }, [popUp])
    return(
        <section onClick={popUp} className="flex fixed inset-0  rounded-xl flex-col top-5  h-[70vh] left-2 p-5 w-355 bg-neutral-300 ">
          <article onClick={(e) => e.stopPropagation()} className=" justify-center items-center 
           flex flex-col">
          <div className="flex justify-between w-full items-center">
            <main>
                <Image src={logo} alt="logo"
                className="w-15 h-15 object-cover rounded-full"
                />
            </main>
            <main className="w-230">
                <input type="text" placeholder="Recherche les courses"
                autoFocus 
                className="w-full py-3 px-2 rounded-xl bg-white/20 text-black"
                />
            </main>
            <main className="flex gap-2 items-center">
             <Link href="#"className="font-bold text-black hover:underline underline-offset-4">S&apos;inscrire</Link>
             <Link href="#" className="font-bold text-black hover:underline underline-offset-4">connexion</Link>
             <Link href="#"className="px-8 py-2 border-2 border-black rounded-lg text-black">communautés Discord</Link>
            </main>
          </div>
          {/**----------------transition card navbar search component------------------ */}
          <div className="flex justify-center gap-10  w-330">
            <main className="w-150 flex p-2 mt-5 gap-5 flex-col relative left-5">
              <button onClick={()=> setIsactive("lescour")}
                className={`flex items-center text-black text-lg p-2 w-40 gap-2 ${isactive === "lescour" ? "bg-white font-bold rounded-lg text-black": "hover:bg-white/20"}`}
                ><SiAltiumdesigner className="text-xl text-black"/>Les Courses</button>
              <button onClick={()=> setIsactive("logiciel")}
                className={`flex items-center text-black text-lg p-2 w-40 gap-2 ${isactive === "logiciel" ? "bg-white font-bold rounded-lg text-black": "hover:bg-white/20"}`}
                ><SiBlackmagicdesign className="text-xl text-black" />Les Logiciel</button>
              <button onClick={()=> setIsactive("parcour")}
                className={`flex items-center text-black text-lg p-2 w-40 gap-2 ${isactive === "parcour" ? "bg-white font-bold rounded-lg text-black": "hover:bg-white/20"}`}
                ><SiMaterialdesign className="text-xl text-black"/>Parcours</button>
            </main>
            <div className="">
            <AnimatePresence>
                {isactive === "lescour" && <LesCourses key={"lescour"}/>}
                {isactive === "logiciel" && <LogiDonne key={"logiciel"} />}
                {isactive === "parcour" && <ParcourDOnne key={"parcour"} />}
            </AnimatePresence>
            </div>
          </div>
          </article>
        </section>
    )
}












export const LesCourses = function(){
    return(
        <section className="flex flex-col gap-2 w-300 mr-10">
        <div className="flex justify-between w-full hover:bg-white p-2 rounded-lg transition-all duration-300">
          <Link href="#"className="text-black text-lg">Génie CIvil</Link>
          <p className="text-black text-lg">22k</p>
            </div>
            <div className="flex justify-between w-full hover:bg-white p-2 rounded-lg transition-all duration-300 ">
            <Link href="#"className="text-black text-lg">Architecture</Link>
            <p className="text-black text-lg">18k</p>
          </div>
          <div className="flex justify-between w-full hover:bg-white p-2 rounded-lg transition-all duration-300">
             <Link href="#" className="text-black text-lg">Génie Mécanique</Link>
             <p className="text-black text-lg">15k</p>
          </div>
          <div className="flex justify-between w-full hover:bg-white p-2 rounded-lg transition-all duration-300">
            <Link href="#" className="text-black text-lg">Génie Plomberie</Link>
            <p className="text-black text-lg">10k</p>
          </div>
        </section>
    )
}



export const LogiDonne = function(){
    return(
        <section className="flex flex-col gap-2 w-300 mr-10">
            <div className="flex justify-between w-full hover:bg-white p-2 rounded-lg transition-all duration-300">
              <Link href="#"className="text-black text-lg">AUtoCad</Link>
                <p className="text-black text-lg">18</p>  
            </div>
            <div className="flex justify-between w-full hover:bg-white p-2 rounded-lg transition-all duration-300">
              <Link href="#"className="text-black text-lg">Graitect</Link>
               <p className="text-black text-lg">20</p>
            </div>
            <div className="flex justify-between w-full hover:bg-white p-2 rounded-lg transition-all duration-300">
               <Link href="#"className="text-black text-lg">ACAPULCO</Link>
               <p className="text-black text-lg">30</p>
            </div>
            <div className="flex justify-between w-full hover:bg-white p-2 rounded-lg transition-all duration-300">
               <Link href="#"className="text-black text-lg">Robot Structural</Link>
               <p className="text-black text-lg">30</p>
            </div>
        </section>
    )
}






export const ParcourDOnne = function(){
    return(
        <section className="flex flex-col gap-2 w-300 mr-10">
            <div className="flex justify-between w-full hover:bg-white p-2 rounded-lg transition-all duration-300">
                <Link href="#"className="text-black text-lg">Architecte BIM</Link>
                <p className="text-black text-lg">5LG</p>
            </div>
            <div className="flex justify-between w-full hover:bg-white p-2 rounded-lg transition-all duration-300">
                <Link href="#"className="text-black text-lg">Ingénieur Structure</Link>
                <p className="text-black text-lg">5LG</p>
            </div>
            <div className="flex justify-between w-full hover:bg-white p-2 rounded-lg transition-all duration-300">
                <Link href="#" className="text-black text-lg">Dessinateur CAO</Link>
                <p className="text-black text-lg">5LG</p>
            </div>
            <div className="flex justify-between w-full hover:bg-white p-2 rounded-lg transition-all duration-300">
                <Link href="#" className="text-black text-lg">Chef de Projet Construction</Link>
                <p className="text-black text-lg">5LG</p>
            </div>
        </section>
    )
}




