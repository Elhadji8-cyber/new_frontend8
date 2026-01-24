"use client"
import { useState } from "react"

export const FormulaireSection =  function({parcoursId} : {parcoursId:number}){
    const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    niveau: "",
    motivation: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
   function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>){
          const {name, value} = e.target;
          setForm(prev => ({...prev, [name]: value}));
    }
    const handleSubmit = async function(e: React.FormEvent){
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);
        try{
            const resp = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/requests`,
                {
                    method: "POST",
                    headers: {"content-type": "application/json"},
                    body: JSON.stringify({
                        type: "parcours",
                        formationName: parcoursId,
                        ...form,
                    }),
                }
            );
            const data = await resp.json();
            console.log(data)
            if(!resp.ok) throw new Error("Erreur lors de l'envoi de la demande");
            setSuccess(true);
            setForm({name: "", email:"", phone:"", niveau:"", motivation:""})
        }catch(err){
            setError("Une erreur est survenue. Réssayez");
        }finally{
            setLoading(false);
        }
    }
    return(
        <section className="w-full flex justify-center px-4 py-10">
           <form onSubmit={handleSubmit}
              className="
             w-full max-w-xl
             bg-white
              rounded-2xl
             shadow-lg
              p-6 md:p-8
             flex flex-col gap-5"
           >
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Inscription au parcours formation</h1>
            <input placeholder="Nom" name={"name"} onChange={handleChange} value={form.name} required
            className="
            w-full
            px-4 py-3
            rounded-xl
            border border-gray-300
            focus:outline-none
            focus:ring-2 focus:ring-orange-500
            transition"
            />
             <input placeholder="Email" name={"email"} onChange={handleChange} value={form.email} required
             className="
             w-full
             px-4 py-3
             rounded-xl
             border border-gray-300
             focus:outline-none
             focus:ring-2 focus:ring-orange-500
             transition"/>
             <input placeholder="Numéro de téléphone" type="phone" name={"phone"} onChange={handleChange} value={form.phone} required
             className="
             w-full
             px-4 py-3
             rounded-xl
             border border-gray-300
             focus:outline-none
             focus:ring-2 focus:ring-orange-500
             transition"/>
            <select 
            name="niveau"
            value={form.niveau}
            onChange={handleChange}
            required
            className="
            w-full
            px-4 py-3
            rounded-xl
            border border-gray-300
            bg-white
            focus:outline-none
            focus:ring-2 focus:ring-orange-500
            transition">
              <option>Débutant</option>
              <option>Intermédiaire</option>
               <option>Avancé</option>
               </select>
                <textarea placeholder="Pourquoi souhaitez-vous rejoindre ce parcours ?" 
                name="motivation"
                value={form.motivation}
                onChange={handleChange}
                required
                className="
                 w-full
                 px-4 py-3
                 rounded-xl
                 border border-gray-300
                 resize-none
                 focus:outline-none
                 focus:ring-2 focus:ring-orange-500
                 transition"/>
              <button type={"submit"} disabled={loading}
              className="
               mt-2
              w-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-semibold
              py-3
              rounded-xl
             transition "
             >S’inscrire</button>
             {success && <p className="text-green-600">✅ Demande envoyée</p>}
             {error && <p className="text-red-600">❌ {error}</p>} 
               </form>
        </section>
    )
}
