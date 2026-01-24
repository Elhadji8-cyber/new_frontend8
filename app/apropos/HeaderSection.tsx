import { Amaranth } from "next/font/google";

const amaranth = Amaranth({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const HeaderSection = function(){
    return(
        <section className="flex  flex-col justify-cenetr items-center bg-indigo-600 h-[50vh] p-5">
            <div className="flex flex-col justify-center items-center mt-5 h-full w-full p-3">
                <h1 className={`text-4xl tracking-wide ${amaranth.className} md:text-3xl lg:text-6xl font-semibold leading-none text-white`}>Notre Mission : Former les Experts de Demain</h1>
                <p className="flex flex-col items-center p-1 text-white mt-1 text-sm lg:text-lg md:text-lg">Depuis 2015, nous accompagnons les professionnels du BTP dans leur montée en
                    <span>compétences sur les outils et méthodes les plus avancés</span>
                </p>
            </div>
        </section>
    )
}