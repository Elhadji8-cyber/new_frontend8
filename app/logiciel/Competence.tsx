import Link from "next/link"
export const CompetenceSection = function(){
    return(
        <section className="flex justify-center items-center h-[40vh]
        bg-orange-500
        ">
            <div className="flex flex-col items-center">
                <h2 className="text-xl md:text-4xl lg:text-5xl p-1 font-bold text-white">Prêt à Développer Vos Compétences ?</h2>
                <p className="text-sm md:text-lg lg:text-xl text-center p-1">Accédez à toutes nos formations et devenez expert sur les logiciels de votre choix</p>
                <Link href="#"
                className="px-6 py-3 mt-2 text-sm md:text-lg lg:text-xl bg-white text-orange-500
                rounded-xl"
                >Commencer Maintenant</Link>
            </div>
        </section>
    )
}