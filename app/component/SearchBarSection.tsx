"use client"
import { useState } from "react"
import {allcourses} from "../courses/allcourses"
import Link from "next/link"
export const SearBarSection = function(){
    const [search, setSearch] = useState("")
    const result = search.length > 0
    ? allcourses.filter((course => course.title.toLowerCase().includes(search.toLowerCase()))):[];
    return(
       <div className="relative w-96 max-w-lg">
        <input type="text" placeholder="Rechercher..."autoFocus value={search} onChange={(e) => setSearch(e.target.value)}
         className="w-full py-2 rounded-xl px-3 border-2
         border-neutral-300 text-white " />
         {search && (
            <div className="absolute top-full mt-2 bg-white text-black rounded-xl shadow-lg overflow-y-scroll overflow-hidden">
                {result.length > 0 ? (
                 result.map(course => (
                    <Link key={course.id} href={`/courses/${course.id}`}
                    className="block px-4 py-2 hover:bg-r-gray-200 "
                    onChange={()=> setSearch("")}
                    >
                        {course.title}
                    </Link>
                 ))
                ): (
                    <p  className="px-4 py-2 text-gray-400">Aucun résultat</p>
                )}
            </div>
         )}
       </div>
    )
}