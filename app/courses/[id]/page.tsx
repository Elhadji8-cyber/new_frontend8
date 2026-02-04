"use client"
import image1 from "../image/orange-money-logo-png_seeklogo-440383.png"
import image2 from "../image/wavemm_logo.jpg"
import image3 from "../image/WU-1a8f4ddc.png"
import {CounterTimer} from "../../component/Component/CounterTimer";
import { FaShoppingCart } from "react-icons/fa";
import {allcourses} from "../allcourses";
import {FooterSection} from "../../component/FooterSection"
import { MdDone } from "react-icons/md";
import Link from "next/link"
import { LuGraduationCap } from "react-icons/lu";
import { SiAudiobookshelf } from "react-icons/si";
import { MdOutline18UpRating } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import NavbarWrapper from "../../component/NavbarWrapper"
import Image from "next/image";
const Registration = new Date("2027-6-01T23:59:59")
export default async function Home({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const courseId = Number(id)
const course = allcourses.find((item) => item.id === courseId);
if(!course) return <div>Formation  Non trouver</div>;
    return(
        <section className="flex flex-col jusify-center items-center bg-neutral-300 text-black ">
          <NavbarWrapper/>
          <div className=" flex flex-col lg:flex-row justify-center items-center gap-5 md:gap-10 lg:gap-20 p-2 mt-10">
            <main className="flex-1 w-full">
                 <Image src={course.image}
                 alt="image" width={700} height={300}
                className="hidden lg:flex md:flex rounded-xl"/>
                <div>
                  <Image src={course.image} width={360} height={350} alt="image" className="flex lg:hidden md:hidden"/>
                </div>
                 <article className="flex gap-3 p-1 lg:p-3 bg-white rounded-md mt-2 items-center justify-between w-full">
                  <p className="flex gap-1 items-center text-sm md:text-lg lg:text-lg"><LuGraduationCap className="text-2xl lg:text-3xl"/>Certificat d'achèvement</p>
                  <p className="flex gap-1 items-center text-sm md:text-lg lg:text-lg"><SiAudiobookshelf className="text-2xl lg:text-3xl"/> AUDIO: Français</p>
                  <p className="flex gap-1 items-center text-sm md:text-lg lg:text-lg"><MdOutline18UpRating className="text-2xl lg:text-3xl"/>Cours Pratique</p>
                 </article> 
            </main>

            {/**Card titre et prix */}
            <main className="flex flex-col jsutify-center items-center w-full lg:w-160 p-2">
              <article className="w-full">
                <p className="p-1 bg-green-500 text-sm rounded-full text-white size-fit">{course.best} </p>
                <h2 className="text-3xl font-bold md:text-5xl lg:text-6xl p-1 mt-2">{course.title2}</h2>
                <div className="flex gap-3 items-center">
                  <IoStar className="text-xl md:text-2xl lg:text-3xl text-yellow-300 "/>
                  <IoStar className="text-xl md:text-2xl lg:text-3xl text-yellow-300 "/>
                  <IoStar className="text-xl md:text-2xl lg:text-3xl text-yellow-300 "/>
                  <IoStar className="text-xl md:text-2xl lg:text-3xl text-yellow-300 "/>
                  <IoStar className="text-xl md:text-2xl lg:text-3xl text-yellow-300 "/>
                  <p className="text-lg md:text-2xl lg:text-2xl">Avis</p>
                </div>
                <div>
                  <p className="text-lg md:text-2xl lg:text-2xl">Un cours par <span className="font-bold">Adam&apos;s</span></p>
                  <p className="text-lg md:text-2xl lg:text-2xl">ingénieur <span className="font-bold"> Adam&apos;s</span></p>
                </div>
                <main className="flex gap-3 items-center p-1">
                  <h4 className="text-lg md:text-2xl lg:text-3xl font-bold p-1">Prix: {course.prix}CFA </h4>
                  <p className="text-lg md:text-xl  lg:text-2xl font-semibold line-through text-red-500">{course.sousprix}CFA </p>
                  <p className="text-lg md:text-xl  lg:text-2xl">{course.pourcentage} </p>
                </main>
                {/**button section */}
                <div className="flex flex-col p-1 items-center">
                <Link href={`/courses/commande/${courseId}`}
                className="text-center justify-center  py-6 px-8 w-full rounded-xl bg-yellow-500
                flex items-center gap-1 text-3xl  text-white
                ">
                 Achèter
                   <FaShoppingCart className="text-center"/>
                </Link>
                <div className="p-1 mt-1">
                <CounterTimer endDate={Registration}
                label="Clôture des promotion dans: "/>
                </div>

                </div>
              </article>
                 

              <article className="p-4 flex flex-col border-3 border-black rounded-md">
                <p className="text-xl md:text-xl lg:text-2xl p-2 border-2 border-black text-black rounded-md size-fit">Passe créatif complet</p>
                <p className="text-xl p-1 text-black">
                  Accédez à ce cours et à toutes nos formation Architecture, Genie civil 
                  et bien d&apos;autres , pas besoin de payer chaque mois , un seul paiement 
                  et vous avez votre formation à vie
                </p>
                <Link href="https://wa.me/+221770862226"className="py-2 md:py-3 lg:py-6 px-3 md:px-4 lg:px-8 border-3 border-black text-xl md:text-2xl lg:text-3xl text-center text-black rounded-lg">Contacter-Nous</Link>
                {/**paiement logo main section */}
                <main className="flex gap-4 mt-2 items-center">
                   <div><Image src={image1} alt="image"className="w-25 h-25 object-cover rounded-md"/></div>
                   <div><Image src={image2} alt="image" className="w-25 h-25 object-cover rounded-md"/></div>
                   <div><Image src={image3} alt="image" className="w-25 h-25 object-cover rounded-md"/></div>  
                </main>
              </article>
            </main>
          </div>

          {/**----------------Description div section -------------------*/}
          <div className="flex flex-col lg:flex-row justify-center gap-15  p-2 w-full ">
                  <main className="w-full lg:w-190">
                   <h3 className="text-2xl p-1 font-bold text-black">{course.minititre} </h3>
                   <p className="text-black">{course.description2} </p>
                   <div className="w-full overflow-x-auto">
                  <table className="min-w-175 w-full lg:w-200  border-collapse border border-gray-300 text-black ">
                   <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4 text-left text-sm md:text-xl lg:text-2xl">
                   Catégories
                   </th>
                   <th className="border border-gray-300 px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4 text-left text-sm md:text-xl lg:text-2xl">
                   Format du cours
                   </th>
                   <th className="border border-gray-300 px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4 text-left text-sm md:text-xl lg:text-2xl">
                     Langages
                    </th>
                    <th className="border border-gray-300 px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4 text-left text-sm md:text-xl lg:text-2xl">
                    Élèves
                    </th>
                    <th className="border border-gray-300 px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4 text-left text-sm md:text-xl lg:text-2xl">
                    Level
                    </th>
                    </tr>
                   </thead>

                   <tbody>
                   <tr className="text-gray-700">
                   <td className="border border-gray-300 px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4">
                   {course.titre}
                   </td>
                   <td className="border border-gray-300 px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4">
                   En ligne
                   </td>
                   <td className="border border-gray-300 px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4">
                  Français
                  </td>
                     <td className="border border-gray-300 px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4">
                  {course.header.card.student}
                  </td>
                   <td className="border border-gray-300 px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4">
                 Tous
                </td>
                </tr>
               </tbody>
               </table>
               </div>
                 <div>
                  <p className="text-black">L'apprentissage reste le meilleur investissement de tous les temps</p>
                 </div>
              </main>
              <main className="w-full lg:w-190 text-black">
                <p>{course.header.coursedetaille} </p>
                <p>{course.header.asavoir} </p>
                {course.header.detaille.map((item, index) => (
                  <div key={index} >
                   <p>{item.mintit} </p>
                    <p>{item.desc} </p>
                  </div>
                ))}
              </main>
          </div>
        </section>
          
    )
}