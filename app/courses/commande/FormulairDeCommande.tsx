"use client"
import {useState} from "react";
type Props = {
    formationId: number;
    formationName: string;
};
export const FormulairDeCommande = function({formationId, formationName}: Props){
    const [form, setForm] = useState({
      "name": "",
      "email": "",
      "phone": "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    //handle change
    const handleChange = function(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = e.target
              setForm(prev => ({...prev, [name]: value}));
    };
    //handle submit
    const handleSubmit = async function(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);
        console.log("Données envoyées :", {
        type: "commande",
        formationId,
        ...form,
        });
       try {
        //teste de voire affiche des donnée
        const  res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/requests`,
            {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({
                    type: "courses",
                    formationId,
                    formationName: formationName,
                    ...form,
                })
            }
        );
           const data = await res.json();
        if(!res.ok || !data.success) throw new Error(data.message ||"Une erreur est survenue");
         setSuccess(true);
         setForm({name:"", email:"", phone:""});
        }catch(err){
            setError("Une message d'erreur est survenue. Réssayez",);
        }finally{
           setLoading(false);
        }
        console.log({
            ...form,
            formationId,
        });
    }

    
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
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Formulaire de commande</h2>
                {/**nom */}
                <input type="text" name="name" placeholder="Nom complete" value={form.name} onChange={handleChange} required
                     className="
                     w-full
                     px-4 py-3
                     rounded-xl
                     border border-gray-300
                     focus:outline-none
                      focus:ring-2 focus:ring-orange-500
                      transition"
                 />
                {/**email */}
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required
                    className="
                     w-full
                     px-4 py-3
                     rounded-xl
                     border border-gray-300
                     focus:outline-none
                      focus:ring-2 focus:ring-orange-500
                      transition"
                />
                {/**phone */}
                <input type="text" name="phone" placeholder="Téléphone" value={form.phone} onChange={handleChange} required
                     className="
                     w-full
                     px-4 py-3
                     rounded-xl
                     border border-gray-300
                     focus:outline-none
                     focus:ring-2 focus:ring-orange-500
                     transition"
                />
                {/*------------button commande et envoi------------*/}
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
                   transition"
                >
                    {loading ? "Envoi..." : "Commander"}
                </button>
                {/*message*/}
                {success && <p className="text-green-600">✅ Demande envoyée</p>}
            </form>
        </section>
    )
}
export default FormulairDeCommande