"use client"
import {motion, AnimatePresence} from "framer-motion";
import { FiRefreshCcw } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { useState } from "react";
export const CategoryFilter = function(){
    const router = useRouter()
    const [openCategory, setOpenCategory] = useState<"category" | "logiciel" | null>(null);
    const toggleMenu = (menu:"category" | "logiciel") => {
        setOpenCategory(openCategory === menu ? null : menu);
    }
    return(
        <section className="flex items-center justify-between w-full h-20 bg-white/50 p-1">
          {/*-------------category toggle menu----------------*/}
          <div className="relative w-64 space-y-1 flex gap-3 ml-6">
          <div className="relative">
            <button onClick={()=> toggleMenu("category")}
            className="w-full px-4 py-2 bg-neutral-300 text-black  rounded-md"
            >
                Catégories
            </button>

            {/*----animation toggle-------*/}
            <AnimatePresence>
                {openCategory === "category" &&(
                    <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-50 z-20 bg-white shadow-lg rounded-md overflow-hidden"
                    >
                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"><Link href="../../courses">Génie CIvile</Link></li>
                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"><Link href="../../courses">Architécture</Link></li>
                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"><Link href="../../courses">Génie Plomberie</Link></li>
                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"><Link href="../../courses">Génie Electrique</Link></li>
                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"><Link href="../../courses">Génie Mécanique</Link></li>
                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"><Link href="../../parcour">Parcours</Link></li>
                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"><Link href="../../entreprise">Entreprise</Link></li>
                    </motion.ul>
                )}
            </AnimatePresence>
          </div>

          {/**---------------------Logiciel toggle menu-------------------- */}
          <div className="relative">
            <button onClick={()=> toggleMenu("logiciel")}
            className="w-full px-4 py-2 bg-neutral-300 text-black rounded-md"
            >
                Logiciel
            </button>
            <AnimatePresence>
              {openCategory === "logiciel" &&(
                <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-50 z-20 bg-white shadow-lg rounded-md overflow-hidden"
                >
                   <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"><Link href="../../logiciel">Autodesk Revit </Link></li>
                   <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"><Link href="../../logiciel">ArchiCAD</Link></li>
                   <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"><Link href="../../logiciel">Robot Structural</Link></li>
                   <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"><Link href="../../logiciel">ETABS</Link></li>
                   <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"><Link href="../../logiciel">GRAITEC Advance</Link></li>
                   <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"><Link href="../../logiciel">ACAPULCO</Link></li>
                   <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"><Link href="../../logiciel">Voir Plus</Link></li>
                </motion.ul>
              )}  
            </AnimatePresence>
          </div>
          </div>

          {/**---------------------refresh page menu----------------------- */}
          <main className="mr-6">
            <button onClick={()=> router.refresh()}
            className="px-4 py-2 bg-neutral-900 text-white rounded-md
            flex items-center gap-1"
            >
                Refresh <FiRefreshCcw />
            </button>
          </main>
        </section>
    )
}