import {HeaderSection} from "../component/Header"
import {FormationSection} from "../component/FormationSection"
import {CategoryFilter} from "../component/Component/CategoryFilter"
import {AcademySection} from "../component/Component/AcademySection"
import { allcourses } from "../courses/allcourses";
import {CourseCard}from "../courses/CourseCard";
import {FooterSection} from "../component/FooterSection";
import NavbarWrapper from "../component/NavbarWrapper"
export default function App() {
  return (
   <section className="bg-neutral-300 overflow-x-hidden">
            <NavbarWrapper/>
             <HeaderSection/>
             <div className="mt-15">
             <CategoryFilter/>
             </div>
             <div className="mt-10">
             <AcademySection/>
             </div>
             <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 w-full md:w-185 lg:w-full gap-3 overflow-y-scroll overflow-hidden h-screen bg-slate-700 mt-10">
            {allcourses.map((course)=>(
             <CourseCard key={course.id} course={course}/>
            ))}
             </div>
             <FooterSection/>
          </section>
  )
}
