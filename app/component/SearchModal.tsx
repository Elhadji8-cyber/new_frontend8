"use client"
import { useEffect } from "react"
type ModalProps = {
    onClose: ()=> void;
}
export const SeachModlSection = function({onClose}:ModalProps){
          useEffect(()=> {
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === "Escape") onClose();
            };
            window.addEventListener("keydown", handleEsc);
            return ()=> window.removeEventListener("keydown", handleEsc)
          }, [onClose])
          return(
            <div onClick={onClose} className="w-80 h-50 lg:w-300 lg:h-100 px-3 absolute overlay animate-fadeIn py-7.5 rounded-xl  top-5 left-17  lg:left-36  inset-0  border-2 border-neutral-300 cursor-pointer bg-white "> 
                <div onClick={(e:React.MouseEvent<HTMLDivElement>)=>
                    e.stopPropagation
                }
                className="w-full absolute animate-zommIn inset-0 z-50 bottom-[65%] left-0 lg:left-10 flex justify-center items-center animate-zoomIn"
                >
                   <input
                    type="text"
                    placeholder="Rechercher..."
                    autoFocus
                    className="w-full p-14 text-lg outline-none"
                     /> 
                     <button onClick={onClose}></button>
                </div>
            </div>
          )
}