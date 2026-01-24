"use client"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
type OuverProps = {
    ouVert: ()=> void;
}
export const CatalogueSection = function({ouVert}:OuverProps){
    return(
        <section onClick={ouVert}>
          <p className="flex items-center gap-1">Catalogue<MdOutlineKeyboardArrowDown /></p>
        </section>
    )
}