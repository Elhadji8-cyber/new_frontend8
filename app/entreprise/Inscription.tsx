"use client"
import {useState} from "react"
export const InscriptionSection = function({coursId}: {coursId?:number}){
    const [form, setForm] = useState({
        name:"",
        email:"",
        phone:"",
        entreprise:"",
        employees:"",
        besoin:"",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
   const  handleChange = function(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>){
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    }
    const handleSubmit = async function(e: React.FormEvent){
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);
        try{
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/requests`,
                {
                    method: "POST",
                    headers: {"content-type": "application/json"},
                    body: JSON.stringify({
                        type: "entreprise",
                        formationName: coursId,
                        ...form,
                    }),
                
                }
            );
            const data = await res.json();
            console.log(data)
            if(!res.ok) throw new Error("Erreur lors de l'envoi de la demande");
            setSuccess(true);
            setForm({name:"", email:"", phone:"", entreprise:"", employees:"", besoin:""})
        }catch(err){
            setError("Une erreur est survenue. Réssayez");
        }finally{
            setLoading(false);
        }
    }
    return(
<section className="flex flex-col justify-center items-center p-5 gap-4 mt-10 bg-blue-500">
        <div>
            <h2 className="text-xl font-bold md:text-4xl lg:text-5xl p-2 text-white mt-5">Parlons de Votre Projet</h2>
            <p className="text-white">Nos experts vous accompagnent pour créer le programme de formation idéal</p>
        </div>
        <div className="flex flex-col items-center gap-2 bg-white h-full rounded-xl w-full lg:w-[70%] p-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full p-5"> {/* UNE SEULE BALISE <form> */}
                <div className="flex gap-5 flex-col lg:flex-row w-full">
                    <div className="flex flex-col gap-3 w-full">
                        <label htmlFor="entreprise" className="font-bold">Nom de l'entreprise:</label>
                        <input type="text" name="entreprise" onChange={handleChange} value={form.entreprise}
                            placeholder="Votre entreprise"
                            className="w-full py-3 px-8 rounded-xl border-2 border-blue-500"
                            required
                        />
                        <label htmlFor="email" className="font-bold">Email professionnel:</label>
                        <input type="email" name="email" onChange={handleChange} value={form.email}
                            placeholder="Email"
                            className="w-full py-3 px-8 rounded-xl border-2 border-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <label htmlFor="name" className="font-bold">Votre nom:</label>
                        <input type="text" name="name" onChange={handleChange} value={form.name}
                            placeholder="Nom"
                            className="w-full py-3 px-8 rounded-xl border-2 border-blue-500"
                            required
                        />
                        <label htmlFor="phone" className="font-bold">Téléphone:</label>
                        <input type="tel" name="phone" onChange={handleChange} value={form.phone}
                            placeholder="Téléphone"
                            className="w-full py-3 px-8 rounded-xl border-2 border-blue-500"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="employees" className="font-bold">Nombre d'employés à former:</label>
                    <select name="employees" onChange={handleChange} value={form.employees}
                        className="py-4 px-2 border-2 rounded-xl border-blue-400"
                        required
                    >
                        <option value="">Sélectionnez</option>
                        <option value="1">1-10 employés</option>
                        <option value="2">11-50 employés</option>
                        <option value="3">51-200 employés</option>
                        <option value="4">plus de 200 employés</option>
                    </select>
                    <label htmlFor="projet" className="font-bold">Décrivez votre projet:</label>
                    <textarea name="besoin" onChange={handleChange} value={form.besoin} required
                        placeholder="Parlez-nous de vos besoins en formation..."
                        className="h-50 lg:h-[20vh] border-2 border-blue-500 rounded-xl p-2 lg:p-5"
                    />
                </div>
                <button type="submit" disabled={loading}
                    className="bg-blue-500 mt-5 py-2 lg:py-4 md:py-3 rounded-full text-white w-full"
                >
                    Envoyer la Demande
                </button>
                {success && <p className="text-green-600">✅ Demande envoyée</p>}
                {error && <p className="text-red-600">❌ {error}</p>}
            </form>
        </div>
    </section>
    )
}