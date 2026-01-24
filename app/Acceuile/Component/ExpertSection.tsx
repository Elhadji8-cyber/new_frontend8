import Image from "next/image";
import image1 from "../../../public/modou.jpg"
import imageGro from "../../../public/image-gros.jpg"
import sofie from "../../../public/sofie.jpg"
import mamy from "../../../public/mamy.jpg"
export const ExpertSection = () => {
    return(
        <section className="bg-black flex justify-center items-center gap-10 p-5 mt-10">
            {/*-------image & div design section--------*/}
            <div className="flex flex-col  h-screen items-center">
                <main className="flex items-center justify-center gap-3">
                    <div className="w-[200px] h-[200px] p-3 bg-orange-500 rounded-full"></div>
                    <div>
                    <Image src={image1} alt="image" className="w-[200px] h-[200px] object-cover  rounded-full"/>
                    </div>
                    <div className="w-[400px] h-[200px] p-3 bg-orange-500 rounded-full flex flex-col items-center">
                        <h4 className="text-center mt-15 text-white text-2xl font-bold">Mamadou Ndour</h4>
                        <p className=" text-sm">Profféssuer En Data Analyst</p>
                    </div>
                </main>
                {/*--------gros image section-------*/}
                <main className="w-[800px] h-[200px] p-3  rounded-full">
                  <Image src={imageGro} alt="image" className="w-[800px] h-[250px] p-3 object-cover rounded-full"/>
                </main>
                <main className="flex items-center justify-center gap-3 mt-15">
                    <div>
                    <Image src={sofie} alt="image" className="w-[200px] h-[200px] object-cover  rounded-full"/>
                    </div>
                    <div className="w-[400px] h-[200px] p-3 bg-orange-500 rounded-full flex flex-col items-center">
                        <h4 className="text-center mt-15 text-white text-2xl font-bold">Mamy Ndiaye</h4>
                        <p className=" text-sm">Cyber Sécurité</p>
                    </div>
                    <div className="w-[200px] h-[200px] p-3 bg-orange-500 rounded-full"></div>
                </main>
                <main className="flex items-center justify-center gap-3">
                    <div className="w-[200px] h-[200px] p-3 bg-orange-500 rounded-full"></div>
                    <div>
                     <Image src={mamy} alt="image" className="w-[200px] h-[200px] object-cover  rounded-full"/>
                    </div>
                    <div className="w-[400px] h-[200px] p-3 bg-orange-500 rounded-full flex flex-col items-center">
                        <h4 className="text-center mt-15 text-white text-2xl font-bold">Fatou Diallo</h4>
                        <p className=" text-sm">Social Media Marketing</p>
                    </div>
                </main>
            </div>

            {/*-------------text section----------*/}
            <div className="flex flex-col justify-around  h-screen">
                <p className="text-orange-500 text-xl ">2025</p>
                <main>
                    <h4 className="text-orange-500 text-2xl font-bold">Team experts</h4>
                    <h3 className="flex flex-col p-3 text-8xl font-bold text-white">Rencontrez
                        <span>les cerveaux derrière</span>
                        <span>ODS (orange digital school)</span>
                    </h3>
                    <p className="text-orange-500 text-xl">
                        profitez de one on one meeting et exercices
                       <span> pour vous aider à progresser dans vos études</span>
                    </p>
                </main>
                <p className="text-orange-500 text-xl">24h/7 En ligne</p>
            </div>
        </section>
    )
}