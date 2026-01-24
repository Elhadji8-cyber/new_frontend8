"use client"
import {CaoItems, BimItems, GestionItems} from "./CardData";
import {useState} from "react";
import  { motion, AnimatePresence } from 'framer-motion'
import Link from "next/link";


export const LogicielData = function(){
    const [isactive, setIsactive] = useState("mision");
    return(
        <section className="flex  flex-col justify-center items-center bg-neutral-300 px-4 lg:px-8 mt-20">
          <div className="flex w-full lg:w-200 flex-col lg:flex-row md:flex-row px-5 lg:px-6  justify-between items-center py-2 lg:py-5 rounded-xl lg:rounded-full mt-6 lg:mt-8 bg-white">
            <button onClick={()=>setIsactive("mision")}
               className={`px-4 lg:px-8 md:px-6 py-2.5 lg:py-3 rounded-[15px]
                 lg:rounded-[20px] md:rounded-[17px] text-sm lg:text-xl md:text-lg ${isactive === "mision" ? "bg-orange-500 text-white" : "hover:bg-orange-200"}`} 
                >BIM & Modélisation</button>
            <button onClick={()=>setIsactive("Cao")}
                className={`px-4 lg:px-8 md:px-6 py-2.5 lg:py-3 rounded-[15px]
                 lg:rounded-[20px] md:rounded-[17px] text-sm lg:text-xl md:text-lg ${isactive === "Cao" ? "bg-orange-500 text-white" : "hover:bg-orange-200"}`}
            > CAO & Dessin</button>
            <button onClick={()=>setIsactive("gestion") }
            className={`px-4 lg:px-8 md:px-6 py-2.5 lg:py-3 rounded-[15px]
                 lg:rounded-[20px] md:rounded-[17px] text-sm lg:text-xl md:text-lg ${isactive === "gestion" ? "bg-orange-500 text-white" : "hover:bg-orange-200"}`}
            >Gestion de Projet</button>
          </div>
      {/*-----------------transition zone pour les 3 component ------------ */}
          <div>
            <AnimatePresence mode="wait">
                {isactive === "mision" && <BimModelisation key={"mision"}/>}
                {isactive === "Cao" && <CaoDesin key={"Cao"}/>}
                {isactive === "gestion" && <GestionProject key={"gestion"}/> }
            </AnimatePresence>
          </div>
        </section>
    )
};

//-------------------aniamtion setUp-----------------------------



{/**----------------------Bim modelisation component items----------------------- */}
export const BimModelisation = function(){
    return(
        <motion.section 
        
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-5">
        {BimItems.map((data, index) => (
            <motion.div key={index}
            initial={{opacity:0, y:35}}
            whileInView={{opacity:1, transition:{duration:1}, y:0}}
             viewport={{once:false, amount:0.5}}
            className="w-full lg:w-115 bg-white p-3 rounded-xl hover:shadow-xl
            flex flex-col gap-2
            ">   
            {(() => {
             const Icons = data.icons;
             return <Icons className="text-4xl lg:text-5xl p-1 bg-orange-200 rounded-full hover:bg-orange-500 transion-all duration-300"/>   
            })()}
            <h3 className="text-xl lg:text-3xl font-bold p-1 hover:text-orange-500 transition-text duration-300">
            {data.title}</h3>
            <p className="text-sm lg:text-xl md:text-lg p-1">{data.description}</p>
             {(()=> {
                const DoneI = data.doneicon;
                const ArrowI = data.arrowicon;
                return(
                    <div className="flex flex-col gap-3 p-1">
                        <main className="flex items-center gap-1">
                            {DoneI ? <DoneI className="text-orange-500 text-2xl"/> : null}
                            <p className="text-neutral-500">{data.model}</p>
                        </main>
                        <main className="flex items-center gap-1">
                            {DoneI ? <DoneI className="text-orange-500 text-2xl"/> : null}
                            <p className="text-neutral-500">{data.collab} </p>
                        </main>
                        <main className="flex items-center gap-1">
                            {DoneI ? <DoneI className="text-orange-500 text-2xl"/> : null}
                            <p className="text-neutral-500">{data.docment} </p>
                        </main>
                        <main className="flex items-center gap-1">
                            {DoneI ? <DoneI className="text-orange-500 text-2xl"/> : null}
                            <p className="text-neutral-500">{data.analyse} </p>
                        </main>
                        <div className="flex justify-between items-center">
                            <p className="text-neutral-500">{data.cours}</p>
                            <Link href={`/logiciel/commende/${data.id}`}
                            className="flex items-center gap-1 bg-orange-500 text-white px-6 py-2 rounded-xl
                             hover:bg-amber-600 transition-all duration-300
                            "
                            >
                            voir plus
                            {ArrowI ? <ArrowI className="text-white text-2xl"/> : null}
                            </Link>
                        </div>
                    </div>
                )
             })()}
            </motion.div>
        ))}
        </motion.section>
    )
};

{/**------------------------Cao dessin component items--------------------------- */}
export const CaoDesin = function(){
    return(
        <motion.section 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5 mt-10">
                  {CaoItems.map((data, index)=> (
              <motion.div key={index} 
              initial={{opacity:0, y:35}}
              whileInView={{opacity:1, transition:{duration:1}, y:0}}
              viewport={{once:false, amount:0.5}}
                         className="w-full lg:w-115 bg-white p-3 rounded-xl hover:shadow-xl
                        flex flex-col gap-2
                        ">
                            {(() => {
                                const Icons = data.icons;
                                 return <Icons className="text-4xl lg:text-5xl p-1 bg-orange-200 rounded-full hover:bg-orange-500 transion-all duration-300"/>
                            })()} 
                            <h2 className="text-xl lg:text-3xl font-bold p-1 hover:text-orange-500 transition-text duration-300">
                                {data.title} </h2>
                            <p className="text-sm lg:text-xl md:text-lg p-1">
                            {data.description} </p>
                            {(()=> {
                                const DoneI = data.doneicon;
                                const ArrowI = data.arrowicon;
                                return(
                                        <div className="flex flex-col gap-3 p-1">
                                                <main className="flex items-center gap-1">
                                                        {DoneI ? <DoneI className="text-orange-500 text-2xl"/> : null}
                                                        <p className="text-neutral-500">{data.model}</p>
                                                </main>
                                                <main className="flex items-center gap-1">
                                                        {DoneI ? <DoneI className="text-orange-500 text-2xl"/> : null}
                                                        <p className="text-neutral-500">{data.collab} </p>
                                                </main>
                                                <main className="flex items-center gap-1">
                                                        {DoneI ? <DoneI className="text-orange-500 text-2xl"/> : null}
                                                        <p className="text-neutral-500">{data.docment} </p>
                                                </main>
                                                <main className="flex items-center gap-1">
                                                        {DoneI ? <DoneI className="text-orange-500 text-2xl"/> : null}
                                                        <p className="text-neutral-500">{data.analyse} </p>
                                                </main>
                                                <div className="flex justify-between items-center gap-1">
                                                        <p className="text-neutral-500">{data.cours}</p>
                                                        <Link href={`/logiciel/commende/${data.id}`}
                                                        className="flex items-center gap-1 bg-orange-500 text-white px-6 py-2 rounded-xl
                                                        hover:bg-amber-600 transition-all duration-300
                                                        "
                                                        >
                                                         S&apos;inscrire
                                                        {ArrowI ? <ArrowI/> : null}
                                                        </Link>
                                                </div>
                                        </div>
                                )
                            })()}
                        </motion.div>
                 ))}
        </motion.section>
    )
};

{/**-----------------------------gestion projets component items------------------------ */}
export const GestionProject = function(){
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-5 mt-10">
         {GestionItems.map((i, indx)=> (
            <div key={indx}
            className="w-full lg:w-115 bg-white p-3 rounded-xl hover:shadow-xl
            flex flex-col gap-2
            ">
              {(()=> {
                const Icons = i.icons;
                 return <Icons className="text-4xl lg:text-5xl p-1 bg-orange-200 rounded-full hover:bg-orange-500 transion-all duration-300"/>
              })()}
              <h2 className="text-xl lg:text-3xl font-bold p-1 hover:text-orange-500 transition-text duration-300">
              {i.title} </h2>
              <p className="text-sm lg:text-xl md:text-lg p-1">
              {i.description} </p>
              {(() => {
                const DoneI = i.doneicon;
                const ArrowI = i.arrowicon;
                return(
                    <div className="flex flex-col gap-3 p-1">
                        <main className="flex items-center gap-1">
                            {DoneI ? <DoneI /> : null}
                            <p>{i.model}</p>
                        </main>
                        <main className="flex items-center gap-1">
                            {DoneI ? <DoneI /> : null}
                            <p>{i.collab} </p>
                        </main>
                        <main className="flex items-center gap-1">
                            {DoneI ? <DoneI /> : null}
                            <p>{i.docment} </p>
                        </main>
                        <main className="flex items-center gap-1">
                            {DoneI ? <DoneI /> : null}
                            <p>{i.analyse} </p>
                        </main>
                        <div className="flex justify-between items-center gap-1">
                            <p>{i.cours}</p>
                            <Link href={`/logiciel/commende/${i.id}`}
                            className="flex items-center gap-1 bg-orange-500 text-white px-6 py-2 rounded-xl
                             hover:bg-amber-600 transition-all duration-300
                            "
                            >
                             S&apos;inscrire
                            {ArrowI ? <ArrowI/> : null}
                            </Link>
                        </div>
                    </div>
                )
              })()}
            </div>
         ))}
        </section>
    )
}