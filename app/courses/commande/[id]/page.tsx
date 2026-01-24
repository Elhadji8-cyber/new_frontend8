import FormulairDeCommande from "../FormulairDeCommande"
import {allcourses} from "../../allcourses"
//-----component-------
export default async function Page({params}: {params: Promise<{id: string}>}){
    const { id } = await params;
    const courseId = Number(id);
    const course = allcourses.find((c) => c.id === courseId);

    //condition 
    if(!course) return <p>Formation non trouvée</p>
    return(
        <section className="w-full flex flex-col  justify-center items-center px-4 py-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{course.title}</h1>
        {/*-------formulaire existant-------*/}
        <FormulairDeCommande formationId={course.id} formationName={course.title}/>
        </section>
    )
}