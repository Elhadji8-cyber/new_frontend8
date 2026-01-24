"use client"
import { useState } from "react"
import { RegisterForm } from "./RegisterForm"
import { LoginForm } from "./LoginForm"
export const AuthMobile = function(){
    const [mode, setMode] = useState<"login" | "register">("login");
    return(
         <section className="min-h-screen flex flex-col p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">
                {mode === "login" ? "Connexion": "Inscription"}
            </h1>
            {mode === "login" ? <LoginForm/> : <RegisterForm/>}
            <button onClick={()=> setMode(mode === "login" ? "register" : "login")}>
                {mode === "login" ? "Crée un compte" : "Se connecter"}
            </button>
         </section>
    )
}