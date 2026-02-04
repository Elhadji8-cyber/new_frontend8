"use client";
import { useState } from "react";

type Props = {
  logicielId: number;
  hasMultipleFormations?: boolean;
  formation?: string[];
};

export const FormulaireLg = function ({
  logicielId,
  hasMultipleFormations,
  formation = [],
}: Props) {
  const showSelect = hasMultipleFormations === true;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    besoin: "",
    formation: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formationFinale = showSelect
      ? form.formation
      : "Demande logiciel";

    const message = `
    🟢 *Nouvelle demande logiciel*

   👤 Nom : ${form.name}
   📧 Email : ${form.email}
   📞 Téléphone : ${form.phone}
   💻 Formation : ${formationFinale}

   📝 Besoin :
    ${form.besoin}
    `;

    const WHATSAPP_NUMBER = "221770862226"; // ← ton numéro WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setLoading(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      besoin: "",
      formation: "",
    });
  };

  return (
    <section className="w-full flex justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-xl
          bg-white
          rounded-2xl
          shadow-lg
          p-6 md:p-8
          flex flex-col gap-5
        "
      >
        {showSelect && (
          <select
            name="formation"
            value={form.formation}
            onChange={handleChange}
            required
            className="py-3 border-2 px-2 rounded-xl border-gray-300 font-semibold"
          >
            <option value="">Choisir une formation</option>
            {formation.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        )}

        <input
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-xl border border-gray-300"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-xl border border-gray-300"
        />

        <input
          name="phone"
          placeholder="Téléphone"
          value={form.phone}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-xl border border-gray-300"
        />

        <textarea
          name="besoin"
          placeholder="Décrivez votre besoin"
          value={form.besoin}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-xl border border-gray-300 resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="
            mt-2
            w-full
            bg-green-600
            hover:bg-green-700
            text-white
            font-semibold
            py-3
            rounded-xl
            transition
          "
        >
          {loading ? "Ouverture WhatsApp..." : "Envoyer sur WhatsApp"}
        </button>
      </form>
    </section>
  );
};
