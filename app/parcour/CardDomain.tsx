"use client"
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import CardItems from "./Donnee"
import Link from "next/link";
import {motion} from "framer-motion"



export const CardDomain = function( ){
    return(
        <section className="flex flex-col justify-center  items-center mt-20 bg-neutral-300 p-5 lg:p-10">
           <motion.div 
           className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5 lg:gap-10">
            {CardItems.map((card, index) => (
              
                <motion.div key={index}
                initial={{opacity:0, y:35}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                viewport={{ once: false, amount: 0.2 }}
                className=" w-full lg:w-100 bg-white
                 rounded-xl hover:shadow-xl transition-shadow duration-300 mt-5"
                >
                <div className="bg-red-400 p-3 rounded-xl">
                {(() => {
                const Icon = card.icon;
                return <Icon className="text-5xl text-black p-2 bg-white  rounded-full"/>
               })()}
                 <main className="flex justify-between items-center">
                 <p className="text-sm font-bold text-black p-1 bg-white mt-1 rounded-full">{card.niveau}</p>
                 <IoCheckmarkDoneOutline className="text-white text-2xl"/>
                  </main>
                 <h3 className="text-xl lg:text-2xl text-black font-bold">{card.title}</h3>
                 <p className="text-black">{card.description}</p>
                 </div>
                 {card.detaille.map((detaill, idx) => {
                    const Icons = detaill.iconsTime;
                    const Iconsc = detaill.courseIcon;
                    return (
                    <div key={idx}>
                     <div className=" p-3">
                      <div className="flex items-center gap-3 p-2">
                       <div className="flex items-center gap-1">
                        {Icons ? <Icons className="text-xl lg:text-3xl text-black"/> : null}
                        <p className="text-sm font-semibold w-full text-black">{detaill.time}</p>
                       </div>
                       <div className="flex items-center gap-1">
                        {Iconsc ? <Iconsc  className="text-xl lg:text-2xl text-black"/> : null}
                        <p className="text-sm font-semibold text-black">{detaill.course}</p>
                       </div>
                       </div>
                     </div>
                    </div>
                    );
                })}
                <div>
                  {card.lesprix.map((mesprix, idx) =>(
                    <div key={idx}
                    className="flex items-center justify-between p-1"
                    >
                      <span className="p-1">
                        <p className="text-black font-bold">{mesprix.prix}</p>
                        <p className="text-sm text-black">{mesprix.type}</p>
                      </span>
                      <Link className="px-6 py-1 bg-red-400 text-white hover:underline transition-all duration-200 rounded-full"
                      href={`/parcour/${card.slug}`}>s&apos;inscrire</Link>
                    </div>
                  ))}
                </div>
                </motion.div>
            ))}
           </motion.div>
        </section>
    )
}