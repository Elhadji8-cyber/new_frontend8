import type {IconType} from "react-icons"
import { PiBuildingApartmentThin } from "react-icons/pi";
import { WiTime9 } from "react-icons/wi";
import { FiBook } from "react-icons/fi";
import { RiHammerLine } from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { MdOutlineWaterDrop } from "react-icons/md";
import { RiPaintLine } from "react-icons/ri";
type CardData = {
     id:number;
    icon:IconType;
    niveau:string;
    title:string;
    description:string;
    detaille: Array<{
        
        iconsTime?:IconType;
        time?:string;
        course?:string;
        courseIcon?:IconType,
        disponible?:string,

        competence?:string;
       revite?:string;
       AutoCAD ?:string;
       Normes ?:string;
       Plans ?:string;
        techniques?:string;
        Layouts?:string
  }>,
    lesprix:Array<{
    prix:string;
    type:string;
    link:string;
  }>
}
const CardItems: CardData[] = [
    {
        id:1,
        icon:PiBuildingApartmentThin,
        niveau:"Intermédiaire",
        title:"Architecte BIM",
        description:"Devenez expert en modélisation BIM et conception architecturale avec Revit et ArchiCAD",
        detaille:[
        {
        iconsTime:WiTime9,
        time:"6 mois",
        courseIcon:FiBook,
        course:"40",
        disponible:"Disponible"
        },
        {
        competence:"Compétence",
        revite:"Revit Architecture" ,
        AutoCAD:"ArchiCAD",
        Normes:"Navisworks",
        Plans  :"BIM 360",
        techniques:"Rendu 3D",
        Layouts:"Documentation"
        }
    ],
    
    lesprix:[
    {
    prix:"à parler",
    type:"Paiement en 3x possible",
    link:"sinscrire"
  }]
    
  },
  {
    id:2,
    icon:RiHammerLine,
    niveau:"Intermédiaire",
    title:"Ingénieur Structure",
    description:"Maîtrisez le calcul et la modélisation des structures en béton et acier",
    detaille:[
        {
        iconsTime:WiTime9,
        time:"9 mois",
        courseIcon:FiBook,
        course:"20",
         disponible:"Disponible"
        },
        {
        competence:"Compétence",
        revite:"Tekla Structures" ,
        AutoCAD:"Robot Structural",
        Normes:"Revit Structure",
        Plans  :"Calcul béton",
        techniques:" acier",
        Layouts:" Eurocodes"
        }
    ],
    lesprix:[
    {
    prix:"à parler",
    type:"Paiement en 3x possible",
    link:"sinscrire"
  }]
  },
  {
    id:3,
    icon:FaRegBuilding,
    niveau:"Intermédiaire",
    title:"Dessinateur CAO",
    description:"Apprenez le dessin technique 2D/3D avec AutoCAD et les standards professionnels",
    detaille: [
        {
        iconsTime:WiTime9,
        time:"15 mois",
        courseIcon:FiBook,
        course:"20",
         disponible:"Disponible"
        },
        {
           competence:"Compétence",
        revite:"AutoCAD 2D" ,
        AutoCAD:"AutoCAD 3D",
         Normes:"Normes de dessin",
        Plans  :"Plans d'exécution",
        techniques:"Détails techniques",
        Layouts:"Layouts",
        }
    ],
    lesprix:[
    {
    prix:"à parler",
    type:"Paiement en 3x possible",
    link:"sinscrire"
  }]
  },
  {
    id:4,
    icon:BiShoppingBag,
    niveau:"Intermédiaire",
    title:"Chef de Projet Construction",
    description:"Pilotez vos projets de construction avec les outils de planification professionnels",
    detaille:[
        {
        iconsTime:WiTime9,
        time:"15 mois",
        courseIcon:FiBook,
        course:"20",
         disponible:"Disponible"
        },
        {
           competence:"Compétence",
        revite:"MS Project" ,
        AutoCAD:"Primavera P6",
        Normes:"Gestion des coûts",
        Plans  :"Planning",
        techniques:"Gestion des risques",
        Layouts:"Coordination"
        }
    ],
    lesprix:[
    {
    prix:"à parler",
    type:"Paiement en 3x possible",
    link:"sinscrire"
  }]
  },
  {
    id:5,
    icon:MdOutlineWaterDrop,
    niveau:"Intermédiaire",
    title:"Ingénieur VRD",
    description:"Spécialisez-vous dans la conception des infrastructures et réseaux",
    detaille:[
        {
        iconsTime:WiTime9,
        time:"15 mois",
        courseIcon:FiBook,
        course:"20",
         disponible:"Disponible"
        },
        {
           competence:"Compétence",
        revite:"Civil 3D" ,
        AutoCAD:"Conception routière",
        Normes:"Réseaux EU/EP",
        Plans  :"Terrassement",
        techniques:"Profils en long",
        Layouts:"Cubatures"
        }
    ],
    lesprix:[{
    prix:"à parler",
    type:"Paiement en 3x possible",
    link:"sinscrire"
  }]
  },
  {
    id:6,
    icon:RiPaintLine,
    niveau:"Intermédiaire",
    title:"Designer 3D Architecture",
    description:"Créez des visualisations architecturales époustouflantes",
    detaille:[
    {
    iconsTime:WiTime9,
    time:"15 mois",
    courseIcon:FiBook,
    course:"20" ,
     disponible:"Disponible"
    },
    {
     competence:"Compétence",
    revite:"SketchUp Pro" ,
    AutoCAD:"Lumion",
    Normes:"V-Ray",
    Plans  :"Photoshop",
    techniques:"Composition",
    Layouts:"Post-production"
    }
    ],
    lesprix:[
    {
    prix:"à parler",
    type:"Paiement en 3x possible",
    link:"sinscrire"
  }]
  }
];
export default CardItems;