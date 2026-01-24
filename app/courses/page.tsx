
import image1 from "../image/image-1.png";
import Link from "next/link";
import Image from "next/image"
import {FooterSection} from "../component/FooterSection"
import {AcademySection} from "../component/Component/AcademySection"
import NavbarWrapper from "../component/NavbarWrapper"
import {allcourses} from "./allcourses";
import { CourseCard } from "./CourseCard"
import {CategoryFilter} from "../component/Component/CategoryFilter"
export default function Home(){
    return(
        <section className="flex bg-neutral-300 flex-col justify-center  ">
            {/*-----------Navbar component import from app component folder--------------------- */}
            <div>
               <NavbarWrapper/>
            </div>
               {/*-----------Header Catalogue Section--------*/}
            <div className="relative">
               <Image src={image1}
                alt="image"
                className="w-full object-cover lg:w-full h-[60vh] md:h-[70vh] lg:h-[80vh] "
                />
               <main className="absolute flex flex-col justify-center items-center inset-0  bottom-[30%]  lg:bottom-[50%] bg-black/40 w-full lg:w-full h-full ">
                <h2 className="absolute top-[40%] text-white text-3xl lg:text-7xl font-bold">Catalogue Complet de Formations</h2>
                <p className="absolute top-[45%] text-white flex flex-col text-sm lg:text-xl mt-15">Explorez notre bibliothèque de plus de 247 formations professionnelles en génie civil,
                    <span className="text-center">architecture et disciplines techniques</span>
                </p>
                <div className="flex gap-3 absolute top-[70%] mt-5 lg:mt-5 lg:top-[65%]">
                  <Link href="#" className="px-6 py-2 bg-yellow-500 rounded-full"
                  >Devener Expert</Link>
                  <Link href="#" className="px-6 py-2 border-2 border-yellow-500 rounded-full text-white"
                  >Formation Gratuite</Link>
                </div>
               </main>
            </div>
            {/*---------------- Category Bar componenet pimport from the app component folder------------ */}
            <div className="mt-10 hidden lg:flex w-full ">
               <CategoryFilter/>
            </div>
            <div>
                <AcademySection/>
            </div>
            {/*---------Data card Formation-------*/}
            <div className="flex gap-5 h-screen mt-20">
          <main className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 w-full gap-5 overflow-y-scroll overflow-hidden h-screen bg-slate-700">
          {allcourses.map((course) => (
           <CourseCard key={course.id} course={course} />
          ))}
          </main>
        </div>
        {/*---------Footer Section import from the app Component------------ */}
        <div>
            <FooterSection/>
        </div>
        </section>
    )
}