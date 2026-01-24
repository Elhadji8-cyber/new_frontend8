"use client"
import {useState} from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { PiSmileySticker } from "react-icons/pi";
export const AuthDesktop = function(){
    const [mode, setMode] = useState<"Login" | "Register">("Login");
    return(
        <div className="h-screen flex">
            {/**-----left side---- */}
           <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center p-20">
               <h1 className="text-5xl font-bold mb-1 ">
                Apprendre. Construire. Dominer.
               </h1>
               <h2 className="text-4xl mb-1 font-bold flex items-center">Chez Adam&apos;s Academy
                <PiSmileySticker className="text-8xl p-1 bg-amber-500 rounded-full "/>! </h2>
               <p>
                  Pas encore membre?.
               </p>
                 <button onClick={()=> 
                    setMode(mode === "Login" ? "Register": "Login")
                 } className="px-7 py-2 bg-amber-500 text-xl rounded-lg">
                {mode === "Login" ? "Inscription" : "Connexion"}</button>
           </div>
            <div className="w-1/2 flex items-center justify-center">
                {mode === "Login" ? <LoginForm/> : <RegisterForm/>}
            </div>
        </div>
    )
}
