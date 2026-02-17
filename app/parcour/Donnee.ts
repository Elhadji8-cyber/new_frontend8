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
    slug: string;
    detaille: Array<{
        
        iconsTime?:IconType;
        time?:string;
        course?:string;
        courseIcon?:IconType,
        disponible?:string,
  }>,
    lesprix:Array<{
    prix:string;
    type:string;
    link:string;
  }>

  //optional
  hasMulplesFormations?:boolean;
}
const CardItems: CardData[] = [
    {
        id:1,
        icon:PiBuildingApartmentThin,
        niveau:"Tout les niveaux",
        title:"Architecte BIM",
        description:"Devenez expert en modélisation BIM et conception architecturale avec Revit et ArchiCAD",
        hasMulplesFormations: true,
        slug:"architecte-bim",
        detaille:[
        {
        iconsTime:WiTime9,
        time:"à votre rythme",
        courseIcon:FiBook,
        course:"En vidéo Pratique",
        disponible:"Disponible"
        },
    ],
    
    lesprix:[
    {
    prix:"S'inscrire pour voir les prix",
    type:"Formation en ligne",
    link:"sinscrire"
  }]
    
  },
  {
    id:2,
    icon:RiHammerLine,
    niveau:"Tout les niveaux",
    title:"Ingénieur Structure",
    description:"Maîtrisez le calcul et la modélisation des structures en béton et acier",
     hasMulplesFormations: true,
     slug:"ingenieur-structure",
    detaille:[
        {
        iconsTime:WiTime9,
        time:"à votre rythme",
        courseIcon:FiBook,
        course:"En vidéo Pratique",
         disponible:"Disponible"
        },
      
    ],
    lesprix:[
    {
    prix:"S'inscrire pour voir les prix",
    type:"Formation en ligne",
    link:"sinscrire"
  }]
  },
  {
    id:3,
    icon:FaRegBuilding,
    niveau:"Tout les niveaux",
    title:"Dessinateur CAO",
    description:"Apprenez le dessin technique 2D/3D avec AutoCAD et les standards professionnels",
    hasMulplesFormations: true,
    slug:"dessinateur-cao",
    detaille: [
        {
        iconsTime:WiTime9,
        time:"à votre rythme",
        courseIcon:FiBook,
        course:"En vidéo Pratique",
         disponible:"Disponible"
        },
    ],
    lesprix:[
    {
    prix:"S'inscrire pour voir les prix",
    type:"Formation en ligne",
    link:"sinscrire"
  }]
  },
  {
    id:4,
    icon:BiShoppingBag,
    niveau:"Tout les niveaux",
    title:"Gestion des Projets",
    description:"Pilotez vos projets de construction avec les outils de planification professionnels",
    hasMulplesFormations:true,
    slug: "gestion-des-projets",
    detaille:[
        {
        iconsTime:WiTime9,
        time:"à votre rythme",
        courseIcon:FiBook,
        course:"En vidéo Pratique",
         disponible:"Disponible"
        },
    ],
    lesprix:[
    {
    prix:"S'inscrire pour voir les prix",
    type:" Formation en ligne",
    link:"sinscrire"
  }]
  },
  {
    id:5,
    icon:MdOutlineWaterDrop,
    niveau:"Tout les niveaux",
    title:"Ingénieur VRD",
    description:"Spécialisez-vous dans la conception des infrastructures et réseaux",
    hasMulplesFormations:true,
    slug: "ingenieur-vrd",
    detaille:[
        {
        iconsTime:WiTime9,
        time:"à votre rythme",
        courseIcon:FiBook,
        course:"En vidéo Pratique",
         disponible:"Disponible"
        },
    ],
    lesprix:[{
    prix:"S'inscrire pour voir les prix",
    type:"Formation en ligne",
    link:"sinscrire"
  }]
  },
  {
    id:6,
    icon:RiPaintLine,
    niveau:"Tout les niveaux",
    title:"Edude des Prix",
    description:"Créez des visualisations architecturales époustouflantes",
    hasMulplesFormations:true,
    slug: "etude-des-prix",
    detaille:[
    {
    iconsTime:WiTime9,
    time:"à votre rythme",
    courseIcon:FiBook,
    course:"En vidéo Pratique" ,
     disponible:"Disponible"
    },
    ],
    lesprix:[
    {
    prix:"S'inscrire pour voir les prix",
    type:"Formation en ligne",
    link:"sinscrire"
  }]
  }
];
export default CardItems;