"use client";
import { useState } from "react";

type Props = {
  formationId: number;
  formationName: string;
};

export const FormulairDeCommande = ({ formationId, formationName }: Props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    besoin: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const WHATSAPP_NUMBER = "221770862226"; // 🔁 remplace si besoin

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
//-------configuration api de" commande whatsaap
    const message = `
     📩 *Nouvelle commande formation*
     ━━━━━━━━━━━━━━━━━━
    👤 Nom: ${form.name}
    📧 Email: ${form.email}
    📞 Téléphone: ${form.phone}
   🎓 Formation: ${formationName}
   📝 Message: ${form.besoin || "—"}
    ━━━━━━━━━━━━━━━━━━
    `;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setLoading(false);
    setSuccess(true);
    setForm({ name: "", email: "", phone: "", besoin: "" });
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

