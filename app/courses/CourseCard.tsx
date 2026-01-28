import Image from "next/image";
import Link from "next/link";
import {CardData} from "./CardData"
type props = {course: CardData}
export const CourseCard = function({course}: props){
    return(
        <Link 
        href={`../courses/${course.id}`} 
        >
         <div className="relative w-full  bg-neutral-200 rounded-xl p-1  h-[70vh] md:h-[48vh] lg:h-[63vh] gap-5">   
         <Image src={course.image} alt="image"
         width={500} height={200}
         style={{width:"800px", height:"200px", objectFit:"cover"}}
         />
         <article className=" flex flex-col  absolute bottom-[94%] md:top-3 w-full ">
            <main className="flex justify-between gap-40 relative right-1 items-center">
            <p className="bg-slate-500 p-1 ml-2 text-xs md:text-sm lg:text-sm text-white rounded-full">{course.best} </p>
            <h3 className="bg-slate-500 p-1 ml-2 text-xs md:text-sm lg:text-sm text-white rounded-full">{course.titre}</h3>
            </main>
            <main className="hidden items-center relative top-35 gap-30 left-30 justify-around">
              <p className=" p-1 text-sm text-black font-bold mt-1">{course.time}</p>
            </main>
            
         </article>
         <h3 className="text-black text-xl lg:text-xl md:text-xl font-bold mt-2">{course.title} </h3>
         <hr />
         <main className="flex items-center gap-2 mt-2">
            <Image src={course.photo} alt="image" width={50} height={50}
            style={{borderRadius:"50px"}}
            />
            <div className="flex justify-between w-full px-2">
            <p className="text-black text-sm md:text-lg lg:text-xl p-1">{course.nom}</p>
            <p  className="text-black text-sm md:text-lg lg:text-xl p-1 font-semibold">{course.prix}</p>
            </div>
         </main>
         <p className="text-black text-sm md:text-lg lg:text-sm p-1">{course.description} </p>
         <hr />
         <p className="font-semibold text-sm px-2 py-1 size-fit text-center mt-1 text-white bg-slate-500 rounded-full">{course.minititre}</p>
         <button className="w-full text-center mt-2 text-white py-2 bg-slate-500 hover:bg-slate-700 transition-all duration-300 rounded-xl">ça m'intéresse</button>
        </div>
        </Link>
    )
}