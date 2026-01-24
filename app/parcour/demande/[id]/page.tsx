import CardItems from "../../Donnee"
import {FormulaireSection} from "../FormulaireSection"

export default async function App({params}: {params: Promise<{id: string}>}){
    const {id} = await params;
    const parcoursId = Number(id);
    const items = CardItems.find(i => i.id === parcoursId);

    if(!items) return <p>Parcours non trouvée</p>
      return(
        <section className="w-full flex flex-col  justify-center items-center px-4 py-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{items.title}</h1>
          <FormulaireSection parcoursId={parcoursId}/>
        </section>
      )
}