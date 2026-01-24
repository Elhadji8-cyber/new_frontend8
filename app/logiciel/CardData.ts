import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";
import { RiHammerLine } from "react-icons/ri";
import { LiaBullseyeSolid } from "react-icons/lia";
import { SlCalculator } from "react-icons/sl";
import { IoConstructOutline } from "react-icons/io5";
import { GiWaterSplash } from "react-icons/gi";
import { LuPaintBucket } from "react-icons/lu";
import { PiArrowsOutCardinal } from "react-icons/pi";
import { GoProjectTemplate } from "react-icons/go";
import { AiOutlineProject } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { SiProtools } from "react-icons/si";
import { TbTools } from "react-icons/tb";
import { SiStudyverse } from "react-icons/si";
import { SiMaterialdesignicons } from "react-icons/si";
import { SiAltiumdesigner } from "react-icons/si";
import type { IconType } from "react-icons"
 type CardData ={
  id:number;
  icons:IconType;
  title: string;
  description:string;
  doneicon?: IconType;
  model:string;
  collab:string;
  docment:string;
  analyse:string;
  cours:string;
  link:string;
  arrowicon?:IconType;

  //optional 
  hasMultipleFormations?:boolean;
}
export const BimItems : CardData[] = [
   {
    id:1,
    icons:MdOutlineMapsHomeWork,
    title:"Autodesk Revit",
    description:"Logiciel BIM leader pour la conception architecture structurelle et MEP",
    doneicon:MdOutlineDone,
    model:"Modélisation 3D",
    collab:"Collaboration BIM",
    docment:"Documentation automatique",
    analyse:"Analyse énergétique",
    cours:"6 formation disponibles",
    link:"#",
    arrowicon:FaArrowRight,
   },
   {
    id:2,
    icons: TiHomeOutline,
    title:"ArchiCAD",
    description:"Plateforme BIM intuitive pour architectes et designers",
    doneicon:MdOutlineDone,
    model:"Modélisation BIM",
    collab:"Teamwork",
    docment:"Visualisation 3D",
    analyse:"Documentation",
    cours:"1 formation disponibles",
    link:"#",
    arrowicon:FaArrowRight,

    hasMultipleFormations:true,
   },
   {
    id:3,
    icons:RiHammerLine,
    title:"Tekla Structures",
    description:"Logiciel Bim spécialisé pour les structures en acier et béton.",
    doneicon:MdOutlineDone,
    model: "Modélisation structurelle",
    collab:"Détails constructifs",
    docment:"Gestion des armatures",
    analyse:"Export IFC",
    cours:"1 formation disponibles",
    link:"#",
    arrowicon:FaArrowRight,
   },
   {
    id:4,
    icons:LiaBullseyeSolid,
    title:"Navisworks",
    description:"Revenue de projet et coordination BIM pour grands projets",
    doneicon:MdOutlineDone,
    model: "Revenue de modéles",
    collab:"Détection de conflits",
    docment:"Simulation 4D",
    analyse:"Coordination BIM",
    cours:"1 formation disponibles",
    link:"#",
    arrowicon:FaArrowRight,
   },
   {
    id:5,
    icons:SlCalculator,
    title:"Robot Structural",
    description:"Logiciel de calcul de structures pour ingénieurs",
    doneicon:MdOutlineDone,
    model: "Calcul de structures",
    collab:"Analyse sismique",
    docment:"Notes de calcul",
    analyse:"Dimensionnement",
    cours:"9 formation disponibles",
    link:"#",
    arrowicon:FaArrowRight,

    hasMultipleFormations:true,
   },
   {
    id:6,
     icons:BsTools,
     title:"ArchiCAD",
     description:"Plateforme BIM intuitive pour architectes et designers",
     doneicon:MdOutlineDone,
     model:"Modélisation BIM avancée",
     collab:"Travail collaboratif (Teamwork)",
     docment:"Visualisation 3D réaliste",
     analyse:"Documentation automatique des projets",
     cours:"1 formation disponible",
     link:"#",
     arrowicon:FaArrowRight,
   },
   {
    id:7,
     icons:SiProtools,
     title:"GRAITEC Advance Design",
     description:"Logiciel complet d’analyse et de calcul structurel",
     doneicon:MdOutlineDone,
     model:"Calcul béton, acier et mixte",
     collab:"Analyse sismique et dynamique",
     docment:"Dimensionnement automatique",
     analyse:"Conformité aux normes internationales",
     cours:"2 formation disponible",
     link:"#",
    arrowicon:FaArrowRight,
    hasMultipleFormations:true,
   },
   {
    id:8,
     icons:TbTools,
     title:"ETABS",
     description:"Référence mondiale pour l’analyse des bâtiments",
     doneicon:MdOutlineDone,
     model:"Analyse et conception de structures complexes",
     collab:"Calcul sismique et charges verticales",
     docment:"Modélisation rapide des immeubles",
     analyse:"Résultats précis et fiables",
     cours:"1 formation disponible",
     link:"#",
    arrowicon:FaArrowRight,
   },
   {
    id:9,
     icons:SiStudyverse,
     title:"ACAPULCO",
     description:"Outil spécialisé pour la conception hydraulique",
     doneicon:MdOutlineDone,
     model:"Calcul des réseaux d’assainissement",
     collab:"Modélisation des écoulements",
     docment:"Analyse des débits et pressions",
     analyse:"Adapté aux projets urbains",
     cours:"1 formation disponible",
     link:"#",
    arrowicon:FaArrowRight,
   },
   {
    id:10,
    icons:SiMaterialdesignicons,
    title:"MARINA",
    description:"Logiciel dédié aux ouvrages portuaires et maritimes",
    doneicon:MdOutlineDone,
    model:"Études des structures maritimes",
    collab:"Analyse des charges hydrauliques",
    docment:"Conception de quais et ports",
    analyse:"Outil adapté aux projets côtiers",
    cours:"1 formation disponible",
     link:"#",
    arrowicon:FaArrowRight,
   },
   {
    id:11,
     icons:SiAltiumdesigner,
     title:"BAHIA",
     description:"Solution de calcul pour ouvrages hydrauliques",
     doneicon:MdOutlineDone,
    model:"Modélisation des réseaux d’eau",
    collab:"Analyse hydraulique avancée",
    docment:"Optimisation des infrastructures",
    analyse:"Idéal pour les projets de grande envergure",
    cours:"1 formation disponible",
    link:"#",
    arrowicon:FaArrowRight,
   }

];
 export const CaoItems : CardData[] = [
    {
        id:12,
    icons:IoConstructOutline,
    title:"AutoCAD",
    description:"Solution de CAO 2D et 3D pour le dessin technique de précision",
    doneicon:MdOutlineDone,
    model:"Dessin 2D/3D",
    collab:"Annotations",
    docment:"Blocs dynamiques",
    analyse:"Layouts multiples",
    cours:"1 formation disponibles",
    link:"#",
    arrowicon:FaArrowRight,
    },
    {
    id:13,
    icons:LuPaintBucket,
    title:"SketchUp Pro",
    description:"Logiciel de modélisation 3D intuitif pour concepteurs",
    doneicon:MdOutlineDone,
    model:"Modélisation rapide",
    collab:"Bibliothéque 3D",
    docment:"Extensions",
    analyse:"Layouts 2D",
    cours:"1 formation disponibles",
    link:"#",
    arrowicon:FaArrowRight,
    },
    {
    id:14,
    icons:GiWaterSplash,
    title:"Civil 3D",
    description:"Solution de conception pour l'ingénierie civile et les infrastructures",
    doneicon:MdOutlineDone,
    model:"Conception routière",
    collab:"Terrassement",
    docment:"Réseaux",
    analyse:"Profils en long",
    cours:"1 formation disponibles",
    link:"#",
    arrowicon:FaArrowRight,
    },
    {
    id:15,
    icons:PiArrowsOutCardinal,
    title:"Rhino 3D ",
    description:"Modélisation NURBS pour les formes complexes",
    doneicon:MdOutlineDone,
    model:"Modélisation NURBS",
    collab:"Gasshopper",
    docment:"Formes organiques",
    analyse:"Fabrication",
    cours:"1 formation disponibles",
    link:"#",
    arrowicon:FaArrowRight,
    }
];

 export const GestionItems : CardData[] =[
    {
    id:16,
    icons:GoProjectTemplate,
    title:"MS Project",
    description:"Outil de planification et gestion de projets de construction",
    doneicon:MdOutlineDone,
    model:"Planification Gantt",
    collab:"Gestion des ressources",
    docment:"Suivi budgétaire",
    analyse:"Rapports personnalisés",
    cours:"1 formation disponible",
    link:"#",
    arrowicon:FaArrowRight,
},
{
    id:17,
    icons:AiOutlineProject,
    title:"Primavera P6",
    description:"Solution professionnelle pour le gestion de grands projets",
    doneicon:MdOutlineDone,
    model:"Planification avancée",
    collab:"Gestion multi-projets",
    docment:"Analyse des risques",
    analyse:"Contrôle des coûts",
    cours:"1 formation disponible",
    link:"#",
    arrowicon:FaArrowRight,
}
];
//stoker les 3 component exporter dans LogicielData
export const allLogiciels : CardData[] = [
        ...BimItems,
        ...CaoItems,
        ...GestionItems,
    ];