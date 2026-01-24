"use client"
import { useState } from "react";
type Props = {
    logicielId: number;
    hasMultipleFormations?: boolean;
    formation?: string[];
}
export const FormulaireLg = function({logicielId, hasMultipleFormations, formation = []}: Props){
    const showSelect = hasMultipleFormations === true;
    const [form, setForm] = useState({
        name:"",
        email:"",
        phone:"",
        besoin:"",
        formation:"",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("")
    const handleChange = function(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>){
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}))
    }
    const handleSubmit = async function(e:React.FormEvent<HTMLFormElement>){
        //envoi vers le backend
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        const formationFinale = showSelect ? form.formation : "Nom de formation"

        try{
            const reponse = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/requests`,
                {
                    method: "POST",
                    headers:{"content-type": "application/json"},
                    body: JSON.stringify({
                        type: "logiciel",
                        referenceId: logicielId,
                        ...form,
                        formationName: formationFinale,
                    })
                }
            );
              const data = await reponse.json();
             console.log(data)

            if(!reponse.ok) throw new Error("Une message d'erreur est survenue. Réssaayez");
            setSuccess(true);
            setForm({name: "", email: "", phone: "", formation: "", besoin: ""});
            }catch(err){
                setError("Une messgae est survenue. Réssayez");
            }finally {
                setLoading(false);
            }
        };
     return(
        <section className="w-full flex justify-center px-4 py-10">
          <form action="" onSubmit={handleSubmit}
            className="
            w-full max-w-xl
           bg-white
           rounded-2xl
           shadow-lg
           p-6 md:p-8
           flex flex-col gap-5"
          >
            {showSelect &&(
              <select name="formation" 
              value={form.formation} onChange={handleChange} required
              className="py-3 border-2 px-1 rounded-xl border-gray-300 text-2xl md:text-3xl lg:text-2xl font-semibold"
              >
                <option value="formation"
                className="text-2xl md:text-3xl lg:text-2xl font-semibold"
                >Choisir Une formation</option>
                {/**mapping tout les formation qui se trouve dans logicielformation.ts */}
                {formation.map((f)=> (
                    <option key={f} value={f}>
                        {f}
                    </option>
                ))}
              </select>
            )}
          <input name="name" placeholder="Nom" value={form.name} onChange={handleChange} required
          className="
          w-full
          px-4 py-3
          rounded-xl
          border border-gray-300
          focus:outline-none
          focus:ring-2 focus:ring-orange-500
          transition
          "/>
           <input name="email" placeholder="Email"  value={form.email} onChange={handleChange} required
           className="
           w-full
           px-4 py-3
           rounded-xl
           border border-gray-300
           focus:outline-none
           focus:ring-2 focus:ring-orange-500
           transition"
           />
           <input name="phone" placeholder="Téléphone" value={form.phone}  onChange={handleChange} required
           className="
           w-full
           px-4 py-3
           rounded-xl
           border border-gray-300
           focus:outline-none
           focus:ring-2 focus:ring-orange-500
           transition"
           />
            <textarea name="besoin" placeholder="Besoin" value={form.besoin} onChange={handleChange} required
              className="
             w-full
             px-4 py-3
             rounded-xl
             border border-gray-300
             resize-none
             focus:outline-none
             focus:ring-2 focus:ring-orange-500
             transition "
            />
             <button
              type="submit"
              disabled={loading}
             className="
             mt-2
             w-full
            bg-orange-500
            hover:bg-orange-600
            text-white
            font-semibold
            py-3
            rounded-xl
            transition"
             >Envoyer</button>
             {success && <p className="text-green-600">✅ Demande envoyée</p>}
             {error && <p className="text-red-600">❌ {error}</p>}
         </form>
        </section>
     )}