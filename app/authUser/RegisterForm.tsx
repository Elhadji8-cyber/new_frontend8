import { PiSmileySticker } from "react-icons/pi";
import Link from "next/link"
export const RegisterForm = function(){
    return(
        <section>
            <div>
                <p className="text-2xl font-semibold">S'incrire</p>
                <div>
                    <form className="w-full max-w-sm space-y-8 flex flex-col text-white">

                   <p className="text-2xl font-semibold">Sign in</p>

                    {/* Nom */}
                      <div className="relative">
                        <input
                         type="text"
                         id="fNom"
                         placeholder="Nom complet"
                        className="peer text-black w-full border-b border-gray-500 bg-transparent py-3
                         focus:border-white focus:outline-none transition"
                         />
                         <label htmlFor="fNom" className="label-float">
                         Nom complet
                         </label>
                          </div>
 
                        {/* Email */}
                        <div className="relative">
                          <input
                        type="email"
                        id="femail"
                      placeholder="email "
                     className="peer text-black w-full border-b border-gray-500 bg-transparent py-3
                   focus:border-white focus:outline-none transition"
                    />
                 <label htmlFor="femail" className="label-float">
                   Email
                 </label>
                  </div>

                   {/* Téléphone */}
                 <div className="relative">
                 <input
                 type="tel"
                 id="fPhone"
                placeholder="Téléphone "
                 className="peer text-black w-full border-b border-gray-500 bg-transparent py-3
                 focus:border-white focus:outline-none transition"
                />
               <label htmlFor="fPhone" className="label-float">
               Numéro de téléphone
               </label>
               </div>
 
              {/* Password */}
              <div className="relative">
              <input
               type="password"
                  id="fpassword"
               placeholder="mot de pass "
                className="peer text-black w-full border-b border-gray-500 bg-transparent py-3
                 focus:border-white focus:outline-none transition"
                />
                  <label htmlFor="fpassword" className="label-float">
                 Mot de passe
                  </label>
                </div>

              <button className="mt-6 bg-black text-white py-3 font-medium hover:bg-gray-500 transition rounded-md">
                Connecter
                </button>

               <Link href="#" className="text-sm  text-black hover:text-gray-400 hover:underline transition">
               Mot de passe oublié ?
                  </Link>
               </form>

                </div>
            </div>
        </section>
    )
}