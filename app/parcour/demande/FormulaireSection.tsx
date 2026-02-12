"use client";
import { useState } from "react";
import CardItems from "../Donnee";

type Props = {
  formationId: number;
  hasMultipleFormations?: boolean;
  formationName?: string[];
};

export const FormulairDeCommande = ({ formationId, hasMultipleFormations, formationName = [] }: Props) => {
  
  // ------- je vais trouveles donné qui vas etre ne mode select
  const card = CardItems.find((c) => c.id === Number(formationId));

  // 2.-------je determine si je vais montré le select avec un dropdow
  // ---------je verifie le props dabord aprés je fait le fallback par les donnée
  const isMultiple = hasMultipleFormations ?? card?.hasMulplesFormations ?? false;


  let options: string[] = Array.isArray(formationName) && formationName.length > 0 ? formationName : [];

  if (options.length === 0 && card && isMultiple) {
    const details = card.detaille.find((d) => d.competence);
    if (details) {
      if (details.revite) options.push(details.revite);
      if (details.AutoCAD) options.push(details.AutoCAD);
      if (details.Normes) options.push(details.Normes);
      if (details.Plans) options.push(details.Plans);
      if (details.techniques) options.push(details.techniques);
      if (details.Layouts) options.push(details.Layouts);
    }
  }

  const showSelect = isMultiple && options.length > 0;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    besoin: "",
    formationName: "", // Stores the selected competence
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const WHATSAPP_NUMBER = "221770862226"; // 🔁 remplace si besoin

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Use the selected formation from the dropdown, or the card title if no dropdown
    const selectedFormation = showSelect ? form.formationName : (card?.title || "Formation Parcours");

    //-------configuration api de" commande whatsaap
    const message = `
     📩 *Nouvelle commande formation*
     ━━━━━━━━━━━━━━━━━━
    👤 Nom: ${form.name}
    📧 Email: ${form.email}
    📞 Téléphone: ${form.phone}
   🎓 Formation: ${selectedFormation}
   📝 Message: ${form.besoin || "—"}
    ━━━━━━━━━━━━━━━━━━
    `;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setLoading(false);
    setSuccess(true);
    setForm({ name: "", email: "", phone: "", besoin: "", formationName: "" });
  };

  return (
    <section className="w-full flex justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-5 text-black"
      >
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Formulaire de commande
        </h2>

        {/* Select Input for Competences */}
        {showSelect && (
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Choisir une compétence / Logiciel</label>
            <select
              name="formationName"
              value={form.formationName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 bg-white"
            >
              <option value="">-- Sélectionnez une option --</option>
              {options.map((opt, index) => (
                <option key={index} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        )}

        <input
          type="text"
          name="name"
          placeholder="Nom complet"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="text"
          name="phone"
          placeholder="Téléphone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500"
        />

        <textarea
          name="besoin"
          placeholder="Message / Besoin"
          value={form.besoin}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl"
        >
          {loading ? "Ouverture WhatsApp..." : "Commander via WhatsApp"}
        </button>

        {success && (
          <p className="text-green-600 text-center">
            ✅ WhatsApp ouvert avec succès
          </p>
        )}
      </form>
    </section>
  );
};
