import { VscAccount } from "react-icons/vsc";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsEmojiGrin } from "react-icons/bs";
import { LuBuilding2 } from "react-icons/lu";
export const AdamsChiffre = function(){
    return(
        <section className="flex flex-col justify-center items-center gap-3 p-5 mt-5 md:mt-15 lg:mt-20">
            <h2 className="text-3xl md:text-3xl lg:text-5xl p-1 mt-3 font-bold">Formation en Chiffres</h2>
            <article className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-4  mt-5 p-3 justify-items-center">
                <div className=" flex flex-col justify-center items-center  rounded-lg p-2 w-full lg:w-90 mt-5 hover:shadow-xl transition-shadow duration-300">
                 <VscAccount className="text-5xl p-1 bg-black/40 rounded-full text-white"/>
                 <h3 className=" text-xl md:text-2xl lg:text-4xl font-bold p-1">15, 0000</h3>
                 <p>Ingénieurs Formés</p>
                </div>
                <div className=" flex flex-col justify-center items-center  rounded-lg p-2 w-full lg:w-90 mt-5 hover:shadow-xl transition-shadow duration-300">
                 <FaRegCirclePlay className="text-5xl p-1 bg-black/40 rounded-full text-white"/>
                 <h3 className=" text-xl md:text-2xl lg:text-4xl font-bold p-1">250+</h3>
                 <p>Heures de Contenu</p>
                </div>
                <div className=" flex flex-col justify-center items-center  rounded-lg p-2 w-full lg:w-90 mt-5 hover:shadow-xl transition-shadow duration-300">
                    <BsEmojiGrin className="text-5xl p-1 bg-black/40 rounded-full text-white"/>
                    <h3 className=" text-xl md:text-2xl lg:text-4xl font-bold p-1">98%</h3>
                    <p>Taux de Satisfaction</p>
                </div>
                <div className=" flex flex-col justify-center items-center  rounded-lg p-2 w-full lg:w-90 mt-5 hover:shadow-xl transition-shadow duration-300">
                    <LuBuilding2 className="text-5xl p-1 bg-black/40 rounded-full text-white"/>
                    <h3 className=" text-xl md:text-2xl lg:text-4xl font-bold p-1">150+</h3>
                    <p>Entreprises Partenaires</p>
                </div>
            </article>
        </section>
    )
}