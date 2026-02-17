import {allcourses} from "../../courses/allcourses"
import { notFound } from "next/navigation";
import { CourseCard } from "@/app/courses/CourseCard";
type Props = {
    params: Promise<{slug: string}>
}
export default async function  PageApp({params}: Props){

    const {slug} = await params;
//-----je vais filtré les donné selon les catégorie de slug
    const filtreCourse = allcourses.filter(
        (course) => course.slug === slug
    );
    //-----donné des condition si jles gens ne trouve pas la formation
    if(filtreCourse.length === 0){
        return notFound();
    }
    return(
        <section className="flex flex-col gap-3">
            <h1 className="text-xl md:text-4xl lg:text-6xl font-bold p-2">Formations {slug}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {/**------Mappé tout mes Formation avec le pops de component de CourseCard.tsx--------- */}
            {filtreCourse.map((course) => (
                <CourseCard key={course.id} course={course}/>
            ))}
            

            </div>
        </section>
    )
}