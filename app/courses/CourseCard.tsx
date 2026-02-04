import Image from "next/image";
import Link from "next/link";
import {CardData} from "./CardData"
type props = {course: CardData}
export const CourseCard = function({course}: props){
    return(
        <Link href={`../courses/${course.id}`} className="block">
  {/* Suppression du h-[62dvh] pour laisser le contenu respirer */}
  <div className="relative w-full bg-neutral-200 rounded-xl p-1 flex flex-col h-full md:h-[48vh] lg:h-[63vh] gap-3"> 
    
    {/* Image : Utilisation de aspect-video pour garder un ratio propre */}
    <div className="relative w-full aspect-video overflow-hidden rounded-t-lg">
      <Image 
        src={course.image} 
        alt="image"
        fill // Utilise fill pour que l'image remplisse le conteneur aspect-video
        className="object-cover"
      />
      
      {/* Les badges par dessus l'image */}
      <div className="absolute top-2 left-2 right-2 flex justify-between items-center">
        <p className="bg-slate-500/80 backdrop-blur-sm p-1 px-2 text-[10px] md:text-sm text-white rounded-full">{course.best}</p>
        <h3 className="bg-slate-500/80 backdrop-blur-sm p-1 px-2 text-[10px] md:text-sm text-white rounded-full">{course.titre}</h3>
      </div>
    </div>

    {/* Contenu textuel */}
    <div className="p-2 flex flex-col grow">
      <h3 className="text-black text-lg font-bold leading-tight">{course.title}</h3>
      
      <hr className="my-2 border-neutral-300" />
      
      <div className="flex items-center gap-2">
        <Image 
          src={course.photo} 
          alt="photo" 
          width={40} 
          height={40}
          className="rounded-full object-cover"
        />
        <div className="flex justify-between w-full">
          <p className="text-black text-sm font-medium">{course.nom}</p>
          <p className="text-black text-sm font-bold">{course.prix}</p>
        </div>
      </div>

      <p className="text-black text-xs mt-2 line-clamp-2">{course.description}</p>
      
      <hr className="my-2 border-neutral-300" />

      {/* Le bas du bouton restera aligné si tu utilises flex-grow au dessus */}
      <div className="mt-auto">
        <p className="font-semibold text-[10px] px-3 py-1 w-fit text-white bg-slate-500 rounded-full mb-2">
          {course.minititre}
        </p>
        <button className="w-full text-center text-white py-2 bg-slate-500 hover:bg-slate-700 transition-all rounded-xl text-sm">
          ça m'intéresse
        </button>
      </div>
    </div>
  </div>
</Link>
    )
}