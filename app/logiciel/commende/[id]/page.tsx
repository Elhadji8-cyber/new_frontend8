import {FormulaireLg } from "../../commende/FormulaireLg"
import {allLogiciels} from "../../CardData"
import { logicielFormation } from "../../logicielFormation";
export default async function App({params,}: {params: Promise<{id: string}>}){
    const {id} = await params;
    const logicielId = Number(id);
    //------j'agrége plusieur tableaux avec le spread operator puis je fait une recherche par indentifiant avec finc------------
    const logiciel = allLogiciels.find(l => l.id === logicielId);
    if(!logiciel) return <p>Formation logiciel introuvable</p>
    const formation = logicielFormation[logicielId] ?? [];
    return(
        <section className="w-full flex flex-col  justify-center items-center px-4 py-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{logiciel.title}</h1>
        <FormulaireLg 
        logicielId={logicielId}
        hasMultipleFormations={formation.length > 0}
        formation={formation}
        />
        </section>
    )
}