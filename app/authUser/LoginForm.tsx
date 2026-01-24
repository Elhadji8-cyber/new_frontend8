import Link from "next/link"
import { PiSmileySticker } from "react-icons/pi";
export const LoginForm = function(){
    return(
            <section className="min-h-screen flex items-center justify-center">
               <div className="w-full max-w-sm">
    
    <p className="text-3xl font-semibold text-black mb-10">Se connecter</p>

    <form className="space-y-10">

      {/* EMAIL */}
      <div className="relative">
        <input
          type="email"
          id="femail"
          placeholder=" "
          className="peer w-full bg-transparent border-b border-gray-500 py-3
                     focus:border-white focus:outline-none transition"
        />
        <label
          htmlFor="femail"
          className="absolute left-0 top-3 text-gray-400 text-sm transition-all
                     peer-placeholder-shown:top-3
                     peer-placeholder-shown:text-sm
                     peer-focus:-top-2
                     peer-focus:text-xs
                     peer-focus:text-white"
        >
          Email
        </label>
      </div>

      {/* PASSWORD */}
      <div className="relative">
        <input
          type="password"
          id="fpassword"
          placeholder=" "
          className="peer w-full bg-transparent border-b border-gray-500 py-3
                     focus:border-white focus:outline-none transition"
        />
        <label
          htmlFor="fpassword"
          className="absolute left-0 top-3 text-gray-400 text-sm transition-all
                     peer-placeholder-shown:top-3
                     peer-placeholder-shown:text-sm
                     peer-focus:-top-2
                     peer-focus:text-xs
                     peer-focus:text-white"
        >
          Mot de passe
        </label>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="w-full mt-6 bg-black text-white py-3 font-medium
                   hover:bg-gray-500 transition rounded-md"
      >
        Connecter
      </button>

      {/* FORGOT */}
      <p className="text-sm text-black text-center hover:text-gray-400 cursor-pointer hover:underline transition">
        Mot de passe oublié ?
      </p>

    </form>
  </div>
</section>

    )
}