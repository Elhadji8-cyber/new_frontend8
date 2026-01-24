import { RiAccountCircle2Line } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { LuAudioLines } from "react-icons/lu";
import {CardData} from "../CardData"
const DataGenicivil:CardData[] =[
    {
        id: 1,
        titre: "Génie civil",
        best: "Nouveaux",
        time: "12h30",
        image: "/image/FORMATION ACAPULCO.jpg",
        title: "Formation Acapulco : De zero à Expert Certifié ",
        title2:"Formation Acapulco  : De Zéro à Expert Certifié",
        photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Maitrisez Acapulco de A à Z avec des projets reels et vous apprendrez à utiliser...",
        description2:"Grâce à une approche 100 % pratique, des exemples concrets et des exercices guidés, vous apprendrez à utiliser Acapulco efficacement pour atteindre vos objectifs, gagner en autonomie et développer des compétences recherchées sur le marché.",
        minititre: "Acapulco",
        prix: "90.000",
        sousprix: "120.000",
        pourcentage: "25%",
        link: "voire le cours",
        header: {
            letitre:"Formation Acapulco : De zero à Expert" ,
            card: {
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"98% positise reviews (1.5k)",
               iconUser:RiAccountCircle2Line,
               student:"10,000 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc: "/image/FORMATION ACAPULCO.jpg",
            coursedetaille:"Cette formation Acapulco vous accompagne des fondamentaux jusqu'aux techniques avancées. Vous apprendrez à configurer l'environnement, créer et gérer des projets concrets, modéliser et simuler des scénarios réels, automatiser les tâches récurrentes et optimiser les workflows pour des rendus professionnels. Le cursus combine exposés théoriques, exercices guidés et études de cas pratiques afin de vous rendre immédiatement opérationnel en entreprise ou en tant que freelance.",
            asavoir: "Avoir des connaissances de base en mécanique des structures et en théorie du béton armé (idéalement basées sur les Eurocodes ou normes équivalentes). La connaissance préalable du logiciel n'est pas nécessaire.",
            detaille:[
                {
                mintit:"Introduction au logiciel Acapulco et interface utilisateur",
                desc:"Prise en main rapide, gestion des projets, paramétrage initial.",
                },
                {
                 mintit:"Modélisation des structures",
                 desc:"Création de la géométrie, définition des matériaux, maillage."
                },
                {
                mintit:"Application des charges et combinaisons",
                desc:"Définition des cas de charges, utilisation des générateurs automatiques (vent/séisme)."
                },
                {
                 mintit: "Analyse et calcul structurel",
                 desc:"Interprétation des résultats d'analyse, vérification des hypothèses."
                },
                {
                  mintit:"	Dimensionnement et optimisation du béton armé",
                  desc:"Calcul des ferraillages (poutres, poteaux, voiles), vérifications réglementaires.",
                },
                {
                 mintit:"	Production des livrables (Plans et Documents)"  ,
                 desc:"Génération des plans d'exécution, des nomenclatures, et rédaction de la note de calcul finale."
                }
            ],
                leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"12h37mn",
                    apprend:"Apprenants",
                    neleve:"10,000",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 75 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    {
        id: 2,
        titre: "Génie civil",
        best: "Nouveaux",
        time: "15h30",
        image: "/image/FORMATION ALIZE LCPC.jpg",
        title: "Formation Alize LCPC : De zero à Expert ",
        title2:"Maîtrisez Alizé LCPC de A à Z : De la Théorie aux Projets Réels",
        photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Maitrisez Alize LCPC de A à Z avec des projets reels et des études de cas pratiques....",
        description2:"Cette formation va bien au-delà de la théorie : vous apprendrez à utiliser Alizé LCPC à travers des projets réels, des études de cas pratiques et des exercices guidés, exactement comme dans le monde professionnel. Que vous soyez débutant ou ingénieur souhaitant renforcer ses compétences, cette formation vous permettra d’être autonome, précis et efficace dans vos calculs et analyses.",
        minititre: "Alize LCPC",
        prix: "80.000",
        sousprix: "120.000",
        pourcentage: "33%",
        link: "voire le cours",
        header:{
            letitre:"Formation Alize LCPC : De zero à Expert ",
            card: {
                vente: "best seller",
               likeicon:AiOutlineLike,
               review:"80% positise reviews (1.5k)",
               iconUser:RiAccountCircle2Line,
               student:"9,000 éléves",
                audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc:"/image/FORMATION ALIZE LCPC.jpg",
            coursedetaille:"Maîtrise du logiciel Alizé LCPC pour le dimensionnement et le renforcement des chaussées routières et aéronautiques.",
            asavoir:"La formation s'appuie sur des exercices pratiques, des études de cas réels et la manipulation directe du logiciel sous la conduite d'experts. Le support technique et la documentation sont souvent inclus.",
            detaille:[
                {
                    mintit:"	Introduction et Interface du Logiciel Alizé LCPC",
                    desc:"Prise en main de l'interface, configuration des projets, gestion des données d'entrée."
                },
                {
                    mintit:"	Méthode Française de Dimensionnement",
                    desc:"Rappels théoriques sur la méthode LCPC/SETRA, paramètres de calcul et critères de dimensionnement."
                },
                {
                    mintit:"Dimensionnement des Chaussées Neuves",
                    desc:"Modélisation des structures neuves, définition des matériaux et application des charges de référence."
                },
                {
                    mintit:"Vérification au Gel/Dégel",
                    desc:"Application des modules spécifiques pour les zones climatiques à risque de gel."
                },
                {
                  mintit:"Renforcement et Rénovation",
                  desc:  "Méthodologie de diagnostic des chaussées existantes et calcul des renforcements nécessaires."
                },
                {
                    mintit:"	Cas Spéciaux et Aéronautique",
                    desc:"Dimensionnement des plateformes logistiques, chaussées industrielles ou aéronautiques (charges spéciales)."
                }
            ],
                leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"15h37mn",
                    apprend:"Apprenants",
                    neleve:"9,000",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 80 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    
    {
        id: 3,
        titre: "Génie civil",
        best: "Nouveaux",
        time: "10:30",
        image: "/image/CYPE  PROMO.jpg",
        title: "Formation CYPE : De zero à Expert et en Calcul et... ",
        title2:"Formation CYPE  : De Zéro à Expert en Calcul et Conception de Structures",
        photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Devenir un expert en CYPE pour la conception et des exercices concrets afin de vous... ",
        description2:"Cette formation vous guide pas à pas à travers des projets réels, des exemples pratiques et des exercices concrets afin de vous permettre de maîtriser le calcul, la modélisation et la conception de structures en toute autonomie. Que vous soyez débutant ou professionnel souhaitant renforcer ses compétences, cette formation vous donnera une expertise solide et immédiatement applicable.",
        minititre: "CYPE",
        prix: "100.000",
        sousprix: "125.000",
        pourcentage: "25%",
        link: "voire le cours",
        header:{
            letitre:"Formation CYPE : De zero à Expert ",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"60% positise reviews (850)",
               iconUser:RiAccountCircle2Line,
               student:"1000 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc:"/image/CYPE  PROMO.jpg",
            coursedetaille:"Devenir expert en calcul de structures béton armé et métallique avec CYPECAD.",
            asavoir:"La formation est essentiellement pratique. Elle s'appuie sur la réalisation d'un ou plusieurs projets de bâtiments complets, de la saisie initiale jusqu'à la production des plans finaux. Des études de cas réels et des supports de cours détaillés sont fournis.",
           detaille:[
                {
                    mintit:"Prise en main et Interface de CYPECAD",
                    desc:"Découverte de l'environnement, paramétrage initial, gestion des normes et des matériaux.",
                },
                {
                    mintit:"Saisie Géométrique et Modélisation",
                    desc:"Création des niveaux, placement des poteaux, poutres, dalles (pleines, allégées, réticulées)."
                },
                {
                    mintit:"Analyse et Calcul Structurel",
                    desc:"Lancement des calculs, interprétation des résultats graphiques (contraintes, déplacements, sollicitations)."
                },
                {
                    mintit:"	Dimensionnement du Béton Armé",
                    desc:"Optimisation et vérification des ferraillages (poutres, poteaux, voiles), fondations (semelles, radiers)."
                },
                 {
                    mintit:"	Structures Métalliques et Mixte",
                    desc:"Introduction aux éléments métalliques, assemblages et vérifications (si inclus dans le module)."
                 },
                 {
                    mintit:"	Structures Métalliques et Mixte",
                    desc:"Introduction aux éléments métalliques, assemblages et vérifications (si inclus dans le module)."
                 }
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"21h37mn",
                    apprend:"Apprenants",
                    neleve:"1116",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
   
    {
       id: 4,
       titre: "Génie civil",
       best: "Nouveaux",
       time: "20h30",
       image:"/image/FORMATION CANIVEAUX.jpg" ,
       title: "Formation Caniveaux : De zero à Expert ",
       title2:"Formation Caniveaux  : De Zéro à Expert en Conception et Dimensionnement",
       photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Devenez un expert en Caniveaux pour la conception et la réalisation de projets réels... ",
        description2:"Cette formation vous accompagne pas à pas, depuis les bases théoriques jusqu’à la réalisation de projets réels, afin de vous permettre de concevoir des caniveaux efficaces, durables et conformes aux normes techniques. Grâce à une approche pratique et orientée terrain, vous apprendrez à dimensionner correctement les caniveaux, à choisir les sections adaptées et à éviter les erreurs courantes rencontrées sur les chantiers.",
        minititre: "Caniveaux",
        prix: "50.000",
        sousprix: "95.000",
        pourcentage: "37%",
        link: "voire le cours",
        header:{
            letitre:"Formation Caniveaux : De zero à Expert ",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"70% positise reviews (1k)",
               iconUser:RiAccountCircle2Line,
               student:"7,200 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc:"/image/FORMATION CANIVEAUX.jpg" ,
            coursedetaille:"Maîtrise des techniques de conception et de construction des ouvrages d'assainissement et caniveaux.",
            asavoir:"La formation combine des apports théoriques (rappels hydrauliques, normes) et de nombreux exercices pratiques, études de cas et, si possible, des visites de chantier ou des démonstrations de matériel.",
            detaille:[
                {
                mintit:" Introduction et Typologie des Caniveaux",
                desc:"Rôle et fonction des caniveaux, présentation des différents matériaux (béton, PVC, fonte) et modèles.",
                },
                {
                 mintit:"	Conception et Dessin de Projets",
                 desc:"Intégration des caniveaux dans les projets VRD/CAO, gestion des points bas et des réseaux associés."
                },
                {
                mintit:"	Normes et Réglementations",
                desc:"Cadre légal de l'assainissement pluvial, sécurité sur voirie (charges admissibles des grilles/tampons), normes environnementales."
                },
                {
                 mintit: "	Méthodologie de Pose et Chantier",
                 desc:"Préparation du support, techniques de pose, raccordements, contrôle qualité et maintenance."
                },
                {
                  mintit:"	Étude de Cas et Exercices Pratiques",
                  desc:"Application des connaissances sur des exemples concrets (parking, rue urbaine, route nationale, etc.).",
                },
                {
                 mintit:"	Bases d'Hydraulique Appliquée"  ,
                 desc:"Calcul des débits de pointe (méthode rationnelle), dimensionnement des sections d'écoulement, calcul des pentes."
                }
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"20h37mn",
                    apprend:"Apprenants",
                    neleve:"7,000",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    {
        id: 5,
        titre: "Génie civil",
        best: "Nouveaux",
        time: "20h30",
        image: "/image/FORMATION CIVIL 3D.jpg",
        title: "Formation Civil 3D : De zero à Expert en Conception VRD et... ",
        title2:"Formation Civil 3D  : De Zéro à Expert en Conception VRD et Infrastructures",
        photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Devenez un expert en Civil 3D pour la conception et la gest... ",
        description2:"Cette formation vous accompagne pas à pas, depuis la prise en main du logiciel jusqu’à la réalisation de projets réels, en vous apprenant les bonnes pratiques utilisées dans les bureaux d’études et sur le terrain. Grâce à une approche 100 % pratique, vous apprendrez à modéliser des terrains, concevoir des routes, gérer les réseaux (assainissement, eau), produire des profils et des plans conformes aux normes professionnelles.",
        minititre: "Civil 3D",
        prix: "150.000",
        sousprix: "175.000",
        pourcentage: "25%",
        link: "voire le cours",
        header:{
            letitre:"Formation Civil 3D : De zero à Expert ",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"60% positise reviews (650)",
               iconUser:RiAccountCircle2Line,
               student:"6,580 éléves",
               audioIcon:LuAudioLines,
               audio:"Français" 
            },
            imagedesc:"/image/FORMATION CIVIL 3D.jpg",
            coursedetaille:"Devenir expert sur Civil 3D : Conception de projets VRD, routiers et d'aménagement du territoire en méthode BIM.",
            asavoir:"La formation est hautement pratique, s'appuyant sur des ateliers dirigés et la réalisation d'un projet d'infrastructure complet. La pédagogie favorise l'apprentissage par l'exemple et la résolution de cas concrets issus du terrain.",
            detaille:[
                {
                mintit:"	Introduction et Environnement Civil 3D",
                desc:"Prise en main de l'interface, gestion des styles d'objets, importation de données topographiques (points, levés).",
                },
                {
                 mintit:"Gestion des Surfaces et MNT",
                 desc:"Création, édition, analyse (courbes de niveau, pentes, volumes) des modèles numériques de terrain"
                },
                {
                mintit:"	Conception Routière (Projets Linéaires)",
                desc:"	Création d'axes (alignements), profils en long, profils types (assemblages), et projets 3D (corridors)."
                },
                {
                 mintit: "	Cubatures et Terrassements",
                 desc:" Calculs de mouvements de terre précis, surfaces de comparaison, bilans volumétriques."
                },
                {
                  mintit:"Réseaux Divers et Canalisations",
                  desc:"Modélisation des réseaux gravitaires et pressurisés (eaux usées, pluviales, AEP), création de vues en plan et profils.",
                },
                {
                 mintit:"	Documentation et Production des Livrables"  ,
                 desc:"Habillage automatique des plans, étiquetage, mise en page pour impression, exportation des données (IFC, LandXML)."
                } 
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"20h37mn",
                    apprend:"Apprenants",
                    neleve:"6500",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    {
        id: 6,
        titre: "Génie civil",
        best: "Nouveaux",
        time: "20h30",
        image: "/image/FORMATION COVADIS.jpg",
        title: "Formation Covadis : De zero à Expert en Topographie, VRD et... ",
        title2:"Formation Covadis  : De Zéro à Expert en Topographie, VRD et Projets Routiers",
        photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Devenez un expert en Covadis pour la conception et la gest... ",
        description2:"La Formation Covadis  est un programme complet conçu pour vous permettre de maîtriser Covadis de manière professionnelle, depuis les bases jusqu’aux fonctionnalités avancées utilisées en topographie, VRD et projets routiers. Cette formation vous guide pas à pas à travers des projets réels, des cas pratiques et des exercices concrets, afin de vous rendre autonome dans la conception, le calcul et la production de plans comme en bureau d’études.",
        minititre: "Covadis",
        prix: "150.000",
        sousprix: "175.000",
        pourcentage: "25%",
        link: "voire le cours",
        header:{
            letitre:"Formation Covadis : De zero à Expert ",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"99% positise reviews (3.2k)",
               iconUser:RiAccountCircle2Line,
               student:"15,000 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"   
            },
            imagedesc:"/image/FORMATION COVADIS.jpg",
            coursedetaille:"Devenir expert sur Covadis : Traitement topographique, conception VRD et production de plans d'exécution.",
            asavoir:"La formation est intensivement pratique, se basant sur des projets réels et des cas d'études concrets. Le formateur, expert du logiciel et du métier, guide les participants pas à pas dans la réalisation complète d'un projet d'infrastructure, de la topographie initiale aux plans finaux.",
            detaille:[
               {
                mintit:"	Introduction et Environnement Covadis",
                desc:" Prise en main de l'interface métier, paramétrage du projet, gestion des données topographiques brutes.",
                },
                {
                 mintit:"Topographie et MNT",
                 desc:"	Traitement des semis de points, création et analyse de surfaces (MNT), calculs de talus."
                },
                {
                mintit:"	Projets Linéaires (VRD/Routier)",
                desc:"Saisie d'axes en plan, création de profils en long terrain, dessin et calcul du profil en long projet. "
                },
                {
                 mintit: "	Profils en Travers et Projet 3D",
                 desc:"Définition de profils types, calcul des profils en travers projet, création du projet 3D et cubatures."
                },
                {
                  mintit:"	Réseaux d'Assainissement et AEP",
                  desc:" Conception de réseaux gravitaires (eaux usées, pluviales), création de profils en long des réseaux.",
                },
                {
                 mintit:"	Métrés et Édition de Plans" ,
                 desc:"	Extraction des cubatures, édition des bordereaux de métrés, mise en page et impression des plans d'exécution"
                } 
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"20h37mn",
                    apprend:"Apprenants",
                    neleve:"15,000",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    {
        id: 7,
        titre: "Génie civil",
        best: "Nouveaux",
        time: "20h30",
        image: "/image/FORMATION EDILUS.jpg",
        title: "Formation Edilus : De zero à Expert en Modélisation et...",
        title2:"Formation Edilus  : De Zéro à Expert en Modélisation et Calcul des Structures",
        photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Créez et gérez des projets de construction avec Edilus, un...",
        description2:"La Formation Edilus  est un programme complet conçu pour vous apprendre à maîtriser Edilus de manière professionnelle, depuis les bases jusqu’aux fonctionnalités avancées utilisées dans le calcul et la modélisation des structures. Cette formation vous accompagne pas à pas à travers des projets réels, des études de cas pratiques et des exercices guidés, afin de vous permettre de concevoir et dimensionner des structures fiables, conformes aux normes et adaptées aux réalités du terrain.",
        minititre: "Edilus",
        prix: "70.000",
        sousprix: "95.000",
        pourcentage: "25%",
        link: "voire le cours",
        header:{
            letitre:"Formation Edilus : De zero à Expert ",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"65% positise reviews (500)",
               iconUser:RiAccountCircle2Line,
               student:"2,000 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc:"/image/FORMATION EDILUS.jpg",
            coursedetaille:" Devenir expert sur Edilus : Modélisation, analyse et dimensionnement d'ouvrages en béton armé en approche BIM.",
            asavoir:"La formation est orientée projet. Elle s'appuie sur la réalisation d'un ou plusieurs cas pratiques de bâtiments réels, de la saisie initiale jusqu'à la production de tous les documents d'exécution. Les participants manipulent le logiciel de manière intensive sous la supervision d'un expert.",
            detaille:[
                {
                mintit:"Introduction et Interface Utilisateur Edilus",
                desc:"Découverte de l'environnement de travail, paramétrage initial, gestion des normes et des matériaux.",
                },
                {
                 mintit:"	Modélisation Architecturale et Structurelle",
                 desc:" 	Définition des cas de charges, combinaisons automatiques selon les Eurocodes, modélisation sismique et dynamique."
                },
                {
                mintit:"	Analyse et Application des Charges",
                desc:"Définition des cas de charges, combinaisons automatiques selon les Eurocodes, modélisation sismique et dynamique."
                },
                {
                 mintit: "	Calcul et Interprétation des Résultats",
                 desc:"Lancement du calcul aux éléments finis (MEF), analyse des contraintes, déplacements et vérification des hypothèses."
                },
                {
                  mintit:"Dimensionnement du Béton Armé et Fondations",
                  desc:" Calcul et optimisation des ferraillages, gestion des fondations (semelles isolées, filantes, radier).",
                },
                {
                 mintit:"	Production des Livrables et BIM"  ,
                 desc:"Génération automatique des plans de ferraillage détaillés, notes de calculs, métrés et gestion de l'export IFC.)."
                }
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"20h37mn",
                    apprend:"Apprenants",
                    neleve:"2,000",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    {
        id:8,
        titre: "Génie civil",
        best: "Nouveaux",
        time: "20h30",
       image: "/image/FORMATION GRAITEC ADVANCE DESIGN.jpg",
       title: "Formation Graitec Advance Design : De zero à Expert ",
       title2:"Formation Graitec Advance Design  : De Zéro à Expert en Calcul et Modélisation des Structures",
       photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Devenez un expert en Graitec Advance Design pour la maîtriser Advance Design ...",
        description2:"La Formation Graitec Advance Design  est un programme complet conçu pour vous permettre de maîtriser Advance Design de Graitec, l’un des logiciels les plus utilisés pour le calcul et la modélisation des structures en béton et en acier. Cette formation vous accompagne pas à pas, depuis la prise en main du logiciel jusqu’à la réalisation de projets réels, en appliquant les normes de calcul en vigueur et les méthodes professionnelles utilisées en bureau d’études.",
        minititre: "Graitec Advance Design",
        prix: "80.000",
        sousprix: "120.000",
        pourcentage: "33%",
        link: "voire le cours",
        header:{
            letitre:"Formation Graitec Advance Design : De zero à Expert ",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"65% positise reviews (1.3k)",
               iconUser:RiAccountCircle2Line,
               student:"2,500 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc:"/image/FORMATION GRAITEC ADVANCE DESIGN.jpg",
            coursedetaille:" Devenir expert sur la suite GRAITEC Advance : Calcul de structures et production de plans d'exécution en méthode BIM.",
            asavoir:" La formation est fortement orientée vers la pratique professionnelle, utilisant des cas d'études réels pour chaque module. Les participants réalisent un projet complet de A à Z, de la modélisation au calcul, jusqu'à la production des documents finaux.",
            detaille:[
                {
                mintit:"	Introduction à l'écosystème GRAITEC BIM",
                desc:"Présentation de la suite (Design, Steel, Concrete, PowerPack) et gestion des flux de données.",
                },
                {
                 mintit:"	Advance Design : Modélisation et Calcul",
                 desc:"Saisie de la géométrie, application des charges, analyse aux éléments finis, dimensionnement acier/béton/bois."
                },
                {
                mintit:"	Advance Steel : Charpente Métallique",
                desc:"Modélisation détaillée des assemblages, création automatique des plans de fabrication (débits, repérages)."
                },
                {
                 mintit: "		Advance Concrete (ou PowerPack Revit/CAD)",
                 desc:"Outils avancés pour le ferraillage 3D, génération des plans de coffrage et ferraillage détaillés pour le béton armé."
                },
                {
                  mintit:"Résultats et Documentation Technique",
                  desc:"Interprétation des résultats graphiques, édition de notes de calculs complètes, gestion des bordereaux et nomenclatures.",
                },
                {
                 mintit:"	Méthodologie BIM et Collaboration"  ,
                 desc:" Échange de données IFC, synchronisation entre les modules et avec les plateformes collaboratives."
                }
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"20h37mn",
                    apprend:"Apprenants",
                    neleve:"2,500",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    {
        id: 9,
        titre: "Génie civil",
        best: "Nouveaux",
        time: "20h30",
        image: "/image/FORMATION INFRAWORKS 360.jpg",
        title: "Formation InfraWorks 360 : De zero à Expert ",
        title2:"Formation InfraWorks 360  : De Zéro à Expert en Modélisation et Visualisation d’Infrastructures",
        photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Créez et gérez des projets de construction avec InfraWorks...",
        description2:"La Formation InfraWorks 360  est un programme complet conçu pour vous permettre de maîtriser Autodesk InfraWorks, le logiciel de référence pour la modélisation, la visualisation et la présentation de projets d’infrastructures. Cette formation vous guide pas à pas, depuis la prise en main du logiciel jusqu’à la création de projets réels, en intégrant des données SIG, des modèles terrain et des scénarios d’aménagement réalistes.",
        minititre: "InfraWorks 360",
        prix: "120.000",
        sousprix: "145.000",
        pourcentage: "25%",
        link: "voire le cours",
        header:{
            letitre:"Formation InfraWorks 360 : De zero à Expert ",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"35% positise reviews (3.1k)",
               iconUser:RiAccountCircle2Line,
               student:"4,000 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc:"/image/FORMATION INFRAWORKS 360.jpg",
            coursedetaille:"   Devenir expert sur InfraWorks : Modélisation de contexte, conception préliminaire et communication de projets d'infrastructures.",
            asavoir:"La formation est basée sur une approche  (apprendre en faisant). Les participants travaillent sur des projets concrets, de la création initiale du modèle à la présentation finale, guidés par un expert d'InfraWorks.",
            detaille:[
                {
                mintit:"	Introduction à InfraWorks et au Model Builder",
                desc:"Découverte de l'interface, création automatique de modèles de contexte mondiaux, gestion des données par défaut.",
                },
                {
                 mintit:"	Gestion et Importation de Données Métier",
                 desc:"Importation de données SIG (Shapefiles), données AutoCAD, nuages de points, terrains personnalisés et bâtiments 3D."
                },
                {
                mintit:"Modélisation et Aménagement Urbain",
                desc:"Ajout et modification manuelle de bâtiments, routes, zones d'eau, végétations et éléments de mobilier urbain."
                },
                {
                 mintit: "Conception de Projets Routiers (Routes Composées)",
                 desc:"Conception de routes préliminaires, modification de profils en long/travers, optimisation des tracés, calculs de déblais/remblais."
                },
                {
                  mintit:"	Analyse et Évaluation de Projets",
                  desc:"Analyses thématiques (pentes, visibilité), gestion des propositions de variantes, tableaux de bord de quantités.",
                },
                {
                 mintit:"Visualisation et Communication Immersive"  ,
                 desc:"Création de scénarios visuels, paramétrage des rendus, création de présentations animées et de vidéos de survol."
                }
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"20h37mn",
                    apprend:"Apprenants",
                    neleve:"4,000",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    
    {
        id: 10,
        titre: "Gestion",
        best: "Nouveaux",
        time: "20h30",
        image: "/image/FORMATION MS PROJET.jpg",
        title: "MS Project: Gestion de Projets de Construction",
        title2:"MS Project : Gestion Professionnelle des Projets de Construction",
        photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Maîtrisez la gestion de projets de construction avec MS Projets pour vous apprendre à...",
        description2:"La formation MS Project – Gestion de Projets de Construction est un programme complet conçu pour vous apprendre à planifier, organiser et piloter efficacement des projets de construction, de la phase de préparation jusqu’au suivi d’exécution. Cette formation vous permettra de maîtriser Microsoft Project à travers des cas pratiques et des projets réels du BTP, afin de gérer les délais, les ressources et les coûts comme un véritable chef de projet.",
        minititre: "MS Project",
        prix: "80.000",
        sousprix: "120.000",
        pourcentage: "33%",
        link: "voire le cours",
        header:{
            letitre:"Formation InfraWorks 360 : De zero à Expert ",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"35% positise reviews (3.1k)",
               iconUser:RiAccountCircle2Line,
               student:"4,000 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc:"/image/FORMATION INFRAWORKS 360.jpg",
            coursedetaille:"   Devenir expert sur InfraWorks : Modélisation de contexte, conception préliminaire et communication de projets d'infrastructures.",
            asavoir:"La formation est basée sur une approche  (apprendre en faisant). Les participants travaillent sur des projets concrets, de la création initiale du modèle à la présentation finale, guidés par un expert d'InfraWorks.",
            detaille:[
                {
                mintit:"	Introduction à InfraWorks et au Model Builder",
                desc:"Découverte de l'interface, création automatique de modèles de contexte mondiaux, gestion des données par défaut.",
                },
                {
                 mintit:"	Gestion et Importation de Données Métier",
                 desc:"Importation de données SIG (Shapefiles), données AutoCAD, nuages de points, terrains personnalisés et bâtiments 3D."
                },
                {
                mintit:"Modélisation et Aménagement Urbain",
                desc:"Ajout et modification manuelle de bâtiments, routes, zones d'eau, végétations et éléments de mobilier urbain."
                },
                {
                 mintit: "Conception de Projets Routiers (Routes Composées)",
                 desc:"Conception de routes préliminaires, modification de profils en long/travers, optimisation des tracés, calculs de déblais/remblais."
                },
                {
                  mintit:"	Analyse et Évaluation de Projets",
                  desc:"Analyses thématiques (pentes, visibilité), gestion des propositions de variantes, tableaux de bord de quantités.",
                },
                {
                 mintit:"Visualisation et Communication Immersive"  ,
                 desc:"Création de scénarios visuels, paramétrage des rendus, création de présentations animées et de vidéos de survol."
                }
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"20h37mn",
                    apprend:"Apprenants",
                    neleve:"4,000",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    {
      id: 11,
      titre: "Génie civil",
      best: "Nouveaux",
      time: "20h30",
      image: "/image/FORMATION MUR DE SOUTENEMENT.jpg",
      title: "Formation Mur de Soutenement: De zero à Expert ",
      title2:"Maîtrisez la conception et la construction des murs de soutènement.",
      photo: "/image/security.jpeg",
      nom: "Adama Sympavy",
      description: "Maitrisez la conception et la construction des murs de soutènement efficaces et sécurisés... ",
      description2:"Apprenez à concevoir et construire des murs de soutènement efficaces et sécurisés, en tenant compte des contraintes réelles du terrain, des sols et des charges. La formation met l’accent sur la pratique professionnelle, avec des études de cas réels et des méthodes utilisées sur les chantiers.",
      minititre: "Mur de Soutenement",
      prix: "70.000",
      sousprix: "95.000",
      pourcentage: "25%",
      link: "voire le cours",
      header:{
            letitre:"Formation Mur de Soutenement: De zero à Expert ",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"55% positise reviews (3.6k)",
               iconUser:RiAccountCircle2Line,
               student:"9,500 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc:"/image/FORMATION MUR DE SOUTENEMENT.jpg",
            coursedetaille:"   Conception, Dimensionnement et Réalisation des Murs de Soutènement",
            asavoir:" La formation combine des apports pratique fondamentaux, des exercices pratiques de calcul (manuels et/ou assistés par ordinateur) et des études de cas détaillées pour ancrer la théorie dans la réalité du terrain.",
            detaille:[
                {
                mintit:"Introduction et Typologie des Ouvrages",
                desc:"Rôles et fonctions des murs de soutènement, présentation des différentes solutions techniques et matériaux.",
                },
                {
                 mintit:"Mécanique des Sols Appliquée",
                 desc:"Rappels de géotechnique, identification des paramètres du sol (angle de frottement, cohésion), tassements."
                },
                {
                mintit:"Calcul des Poussées et Stabilité Externe",
                desc:"Théorie de Rankine et Coulomb, calcul des poussées actives/passives, vérifications de stabilité au glissement, renversement et poinçonnement."
                },
                {
                 mintit: "Dimensionnement et Stabilité Interne",
                 desc:"Calcul des sections du mur, prédimensionnement des éléments structurels (semelles, voiles), ferraillage du béton armé (selon Eurocode 2)."
                },
                {
                  mintit:"Solutions Spéciales et Systèmes de Drainage",
                  desc:"Murs poids (gabions, enrochements), parois clouées/tirantées, rôle crucial du drainage et des remblais.",
                },
                {
                 mintit:"Méthodologie de Chantier et Étude de Cas"  ,
                 desc:"Étapes de mise en œuvre, contrôle qualité, pathologies courantes, application sur des projets réels."
                }
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"20h37mn",
                    apprend:"Apprenants",
                    neleve:"9,500",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    {
        id: 12,
        titre: "Génie civil",
        best: "Nouveaux",
        time: "20h30",
        image: "/image/FORMATION NAVISWORK.jpg",
        title: "Formation Navisworks: De zero à Expert ",
        title2:"Formation Navisworks  : De Zéro à Expert en Coordination BIM et Détection de Conflits",
        photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Maîtrisez Navisworks pour la rendu 3D et planification des...",
        description2:"La Formation Navisworks  est un programme complet conçu pour vous permettre de maîtriser Autodesk Navisworks, outil essentiel pour la coordination BIM, la détection de conflits (clash detection) et la simulation 4D dans les projets de construction. Cette formation vous accompagne pas à pas, depuis la prise en main du logiciel jusqu’à la gestion de projets BIM réels, en vous apprenant à coordonner efficacement les différents corps d’état (structure, architecture, MEP).",
        minititre: "Navisworks",
        prix: "100.000",
        sousprix: "125.000",
        pourcentage: "25%",
        link: "voire le cours",
        header:{
            letitre:"Formation Navisworks: De zero à Expert ",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"35% positise reviews (400)",
               iconUser:RiAccountCircle2Line,
               student:"845 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc:"/image/FORMATION NAVISWORK.jpg",
            coursedetaille:"Coordination BIM et Simulation de Construction d'Ouvrages de Soutènement avec Navisworks",
            asavoir:" Avoir une expérience dans le secteur de la construction. Une connaissance préalable des logiciels de modélisation (Revit, Civil 3D, AutoCAD) et des principes BIM de base est fortement recommandée.",
            detaille:[
                {
                mintit:"Synthétiser des modèles 3D hétérogènes (IFC, DWG, NWC) de murs de",
                desc:"soutènement et leur environnement.",
                },
                {
                 mintit:"Réaliser des détections de conflits (clashs) entre le mur de soutènement, les",
                 desc:"réseaux enterrés, les fondations et autres éléments structurels."
                },
                {
                mintit:"Calcul des Poussées et Stabilité Externe",
                desc:"Théorie de Rankine et Coulomb, calcul des poussées actives/passives, vérifications de stabilité au glissement, renversement et poinçonnement."
                },
                {
                 mintit: "Associer le modèle 3D au planning de construction (simulation 4D) pour visualiser",
                 desc:"les étapes de réalisation."
                },
                {
                  mintit:"	Agrégation de Données et Modèles",
                  desc:" Importation des modèles de murs (provenant de CYPE, Civil 3D, Revit), gestion des points de vue, navigation en temps réel.",
                },
                {
                 mintit:"Détection et Gestion des Conflits (Clash Detective"  ,
                 desc:" Analyse des interférences (hard/soft clash) entre le mur de soutènement et les autres corps d'état (fondations, drainage, réseaux VRD)."
                }
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"20h37mn",
                    apprend:"Apprenants",
                    neleve:"845",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    {
        id: 13,
        titre: "Génie civil",
        best: "Nouveaux",
        time: "15h23",
        image: "/image/FORMATION PIEUX.jpg",
        title:"Devenz Expert en Conception, Dimensionnement et...",
        title2:"Devenez Expert en Conception, Dimensionnement et Réalisation des Pieux de Fondation",
        photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Maîtrisez la conception et la construction des pieux avec  Fondation...",
        description2:"La formation « Devenez Expert en Conception, Dimensionnement et Réalisation des Pieux de Fondation » est un programme complet destiné à vous apprendre à concevoir, dimensionner et exécuter des pieux de manière sûre, efficace et conforme aux normes. Cette formation couvre toutes les étapes essentielles, depuis l’étude géotechnique et l’analyse des charges jusqu’au choix du type de pieux, au calcul de la capacité portante et au suivi de l’exécution sur chantier.",
        minititre: "Génie civil",
        prix: "120.000",
        sousprix: "145.000",
        pourcentage: "25%",
        link: "voire le cours",
           header:{
            letitre:"Devenz Expert en Conception, Dimensionnement et Réalisation des Pieux et Fondations Profondes",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"90% positise reviews (3.5k)",
               iconUser:RiAccountCircle2Line,
               student:"15,000 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc:"/image/FORMATION PIEUX.jpg",
            coursedetaille:"Maîtrise des techniques de fondations profondes : Pratique, calcul et mise en œuvre des pieux.",
            asavoir:"Avoir des connaissances solides en mécanique des sols, en résistance des matériaux (RDM) et dans les principes de base des fondations superficielles. Une connaissance des normes de calcul (Eurocodes 7 et 2, Fascicule 62 Titre V) est un atout.",
            detaille:[
                {
                mintit:"Identifier les contextes géotechniques nécessitant l'usage de fondations profondes.",
                desc:"Choisir le type de pieu le plus adapté (pieu foré, pieu battu, micro-pieu, barrette) en fonction des contraintes du site.",
                },
                {
                 mintit:"Dimensionner les pieux manuellement ou à l'aide de logiciels, en vérifiant la portance (charge admissible) et le tassement.",
                 desc:"Intégrer les méthodes de calcul selon les normes françaises (Fascicule 62) ou européennes (Eurocodes)."
                },
                {
                mintit:"Maîtriser les différentes méthodes d'exécution sur chantier et les techniques de contrôle qualité (essais de chargement, intégrité).",
                desc:"Réaliser des pré-dimensionnements et des estimations de coûts pour ces ouvrages spécialisés."
                },
                {
                 mintit: "	Géotechnique Appliquée aux Pieux",
                 desc:"Interprétation des essais in situ (pressiomètre Ménard, CPT, SPT), détermination des paramètres de sol."
                },
                {
                  mintit:"	Méthodes de Dimensionnement (Eurocodes/Fasc. 62)",
                  desc:"Calcul de la force portante en pointe et du frottement latéral, vérification ELU/ELS, calcul des tassements.",
                },
                {
                 mintit:"	Conception Structurale et Liaison Tête de Pieux"  ,
                 desc:" Calcul du ferraillage, dimensionnement des semelles sur pieux et longrines de redressement, étude des efforts horizontaux."
                }
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"20h37mn",
                    apprend:"Apprenants",
                    neleve:"15,000",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    {
        id: 14,
        titre: "Génie Civil",
        best: "Nouveaux",
        time: "20h30",
        image:"/image/FORMATION PISCINE.jpg",
        title:"Formation Piscine:  Conception et Réalisation de Piscines en Génie",
        title2:"Formation Piscines : Conception et Réalisation des Piscines en Génie Civil",
        photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Maîtrisez la conception et la construction des piscines et vous apprendre à concevoir...",
        description2:"La Formation Piscines – Conception et Réalisation en Génie Civil est un programme complet destiné à vous apprendre à concevoir, dimensionner et construire des piscines durables, sécurisées et conformes aux normes techniques. Cette formation couvre toutes les étapes clés d’un projet de piscine, depuis l’étude du terrain et le dimensionnement de la structure jusqu’à la réalisation sur chantier, en intégrant les aspects hydrauliques, structurels et constructifs.",
        minititre: "Génie civil",
        prix: "60.000",
        sousprix: "85.000",
        pourcentage: "25%",
        link: "voire le cours", 
        header:{
            letitre:"Formation Piscine:  Conception et Réalisation de Piscines en Génie Civil",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"70% positise reviews (2.2k)",
               iconUser:RiAccountCircle2Line,
               student:"11,000 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc:"/image/FORMATION PISCINE.jpg",
            coursedetaille:"Maîtrise complète des projets de piscines : Ingénierie, étanchéité et mise en œuvre en béton armé.",
            asavoir:"La formation allie théorie technique (calculs, normes) et pratique opérationnelle. Les participants travaillent sur des études de cas concrètes, de l'esquisse du projet à la définition du ferraillage, pour une application directe sur le terrain.",
            detaille:[
                {
                mintit:"Concevoir les ouvrages de génie civil spécifiques aux piscines (fosses, radiers, parois).",
                desc:"Dimensionner les éléments en béton armé pour garantir la stabilité et l'étanchéité de la structure.",
                },
                {
                 mintit:" Dimensionner les éléments en béton armé pour garantir la stabilité et l'étanchéité de la structure.",
                 desc:"Intégrer les aspects techniques liés à l'hydraulique, à la filtration et aux revêtements."
                },
                {
                mintit:"Maîtriser les étapes clés de la mise en œuvre sur chantier : terrassement, ferraillage, coulage du béton (voiles banchés, blocs coffrants).",
                desc:"Appliquer les normes et les Documents Techniques Unifiés (DTU) pertinents, notamment le DTU 14.1 (Travaux de cuvelage) et le DTU 13.3 (Dallages)."
                },
                {
                 mintit: "	Conception et Dimensionnement Structurel",
                 desc:"Calcul de la structure en béton armé (radier, murs), gestion des efforts de poussée de l'eau et de contre-poussée du sol."
                },
                {
                  mintit:"	Hydraulique et Local Technique",
                  desc:" Conception du circuit hydraulique, dimensionnement du système de filtration, contraintes liées au local technique.",
                },
                {
                 mintit:"	Mise en Œuvre et Chantier"  ,
                 desc:" Terrassement, ferraillage, techniques de coulage du béton (banchage, gunite), contrôle qualité, normes de sécurité."
                }
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"20h37mn",
                    apprend:"Apprenants",
                    neleve:"11,000",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
  
    {
        id:15,
        titre:"Génie Civil",
        best: "Nouveaux",
        time:"15h20",
        image: "/image/FORMATION ROBOT + MILLENIUM.jpg",
        title:"Formation Robot + Millennium: Ingénierie Structurelle (Robot)...",
        title2:"Formation Robot + Millennium  : Ingénierie Structurelle et Calcul Avancé des Structures",
        photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Maîtrisez Robot et Millennium pour la modélisation 3D et la...",
        description2:"La Formation Robot + Millennium  est un programme complet conçu pour vous permettre de maîtriser Autodesk Robot Structural Analysis et Graitec Millennium, deux logiciels de référence en ingénierie structurelle et calcul des structures. Cette formation vous accompagne pas à pas, depuis la modélisation des structures jusqu’au dimensionnement détaillé, en appliquant les normes de calcul et les méthodes professionnelles utilisées dans les bureaux d’études.",
        minititre: "Robot + Millennium",
        prix: "80.000",
        sousprix: "120.000",
        pourcentage: "33%",
        link: "voire le cours",
        header:{
            letitre:"Formation Robot + Millennium: Ingénierie Structurelle (Robot) et Gestion de Projets BTP (Millennium)",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"80% positise reviews (8.2k)",
               iconUser:RiAccountCircle2Line,
               student:"13,800 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc:"/image/FORMATION ROBOT + MILLENIUM.jpg",
            coursedetaille:"Double compétence : Maîtrise du calcul de structures avec Robot Structural Analysis et gestion intégrée de projets avec Millennium.",
            asavoir:"Cette formation combine des ateliers pratiques sur les deux logiciels. L'accent est mis sur l'interfaçage et l'utilisation concrète des données générées par Robot pour alimenter le système de gestion Millennium, simulant ainsi un flux de travail complet d'entreprise.",
            detaille:[
                {
                mintit:" Côté Robot : Modéliser, calculer et dimensionner des structures complexes (acier, béton, bois) selon les Eurocodes.",
                desc:" Côté Millennium : Gérer l'intégralité du cycle de vie d'un projet BTP (devis, facturation, suivi de chantier, achats, paie, comptabilité).",
                },
                {
                 mintit:"Synergie : Intégrer les données techniques du calcul dans les outils de gestion pour un suivi économique et temporel précis (métrés vers devis).",
                 desc:"Intégrer les aspects techniques liés à l'hydraulique, à la filtration et aux revêtements."
                },
                {
                mintit:" Charges et Analyse Structurelle",
                desc:"Application des charges (permanentes, exploitation, vent, séisme), analyse aux éléments finis, combinaisons automatiques."
                },
                {
                 mintit: "	Modélisation et Interface Robot",
                 desc:"Saisie géométrique (poteaux, poutres, dalles), gestion des matériaux et des normes (Eurocodes)."
                },
                {
                  mintit:"	Dimensionnement et Résultats",
                  desc:" Vérification des éléments béton armé et acier, interprétation des résultats, édition des notes de calculs.",
                },
                {
                 mintit:"	Gestion Commerciale et Étude de Prix"  ,
                 desc:" Réalisation de devis, métrés (importation possible depuis Robot/BIM), facturation et situations de travaux."
                }
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"20h37mn",
                    apprend:"Apprenants",
                    neleve:"13,000",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    {
        id: 16,
        titre: "Génie Civil",
        best: "Nouveaux",
        time: "20h30",
        image:"/image/FORMATION ROBOT DDC.jpg",
        title: "Formation Robot DDC: Maîtrise de la Descente De Charges...",
        title2:"Formation Robot DDC  : Maîtrise de la Descente de Charges avec Robot Structural Analysis",
        photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Maîtrisez Robot DDC pour la conception et la modélisation...",
        description2:"La Formation Robot DDC  est un programme spécialisé conçu pour vous permettre de maîtriser la Descente de Charges (DDC) dans les projets de bâtiments à l’aide de Robot Structural Analysis. Cette formation vous guide pas à pas dans la compréhension des cheminements de charges, depuis les charges permanentes et d’exploitation jusqu’à leur transmission aux fondations. Vous apprendrez à utiliser Robot pour modéliser, calculer, vérifier et interpréter correctement les résultats de descente de charges.",
        minititre: "Robot DDC",
        prix: "80.000",
        sousprix: "120.000",
        pourcentage: "33%",
        link: "voire le cours",
         header:{
            letitre:"Formation Robot DDC: Maîtrise de la Descente De Charges (DDC) avec Robot Structural Analysis",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"75% positise reviews (7.2k)",
               iconUser:RiAccountCircle2Line,
               student:"9,800 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc:"/image/FORMATION ROBOT + MILLENIUM.jpg",
            coursedetaille:" Optimisation de la Descente De Charges avec Autodesk Robot : Théorie et application pratique pour le dimensionnement.",
            asavoir:"La formation est hautement pratique. Elle alterne entre des rappels théoriques indispensables, des démonstrations sur logiciel et de nombreux exercices pratiques basés sur des bâtiments types. L'accent est mis sur la compréhension physique du comportement de la structure.",
            detaille:[
                {
                mintit:" Comprendre et appliquer la théorie de la descente de charges manuelle pour valider les calculs logiciels.",
                desc:" Maîtriser les fonctionnalités d'Autodesk Robot dédiées à l'automatisation et à la vérification de la descente de charges.",
                },
                {
                 mintit:"Identifier et modéliser correctement toutes les sources de charges (permanentes, exploitation, climatiques).",
                 desc:"Dimensionner les éléments porteurs (poteaux, voiles, fondations) avec précision en tenant compte des charges cumulées."
                },
                {
                mintit:"Générer des rapports de descente de charges clairs et justificatifs pour les vérificateurs (contrôleurs techniques).",
                desc:"Optimiser la conception structurelle en assurant la sécurité tout en maîtrisant les coûts."
                },
                {
                 mintit: "	Interface et Modélisation sous Robot",
                 desc:"Création du modèle filaire, saisie des dalles et des charges surfaciques et linéaires."
                },
                {
                  mintit:"	Application des Charges et Attribution",
                  desc:"Outils d'attribution des charges aux éléments porteurs, gestion des sens de transfert de charge.",
                },
                {
                 mintit:"	Fonctionnalités Descente De Charges de Robot"  ,
                 desc:"Utilisation des outils automatiques DDC, vérification et correction des erreurs de transfert de charges."
                }
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"20h37mn",
                    apprend:"Apprenants",
                    neleve:"9,800",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    {
        id: 17,
        titre: "Génie Civil",
        best: "Nouveaux",
        time: "20h30",
        image: "/image/FORMATION TEKLA STRUCTURAL DESIGN.jpg",
        title: "Tekla Structure: Modélisation 3D avec Tekla Structural Design",
        title2:"Formation Tekla Structures : Modélisation 3D et Conception Structurelle avec Tekla",
        photo: "/image/security.jpeg",
        nom: "Adama Sympavy",
        description: "Maîtrisez Tekla Structural Design pour la modélisation 3D et Conception Structurelle...",
        description2:"La Formation Tekla Structures – Modélisation 3D et Conception Structurelle est un programme complet conçu pour vous permettre de maîtriser Tekla Structures, logiciel de référence pour la modélisation 3D avancée des structures en béton armé, acier et structures mixtes. Cette formation vous accompagne pas à pas, depuis la prise en main du logiciel jusqu’à la réalisation de projets structurels réels, en appliquant les méthodes BIM utilisées dans les bureaux d’études et les entreprises de construction.",
        minititre: "Tekla Structural Design",
        prix: "80.000",
        sousprix: "120.000",
        pourcentage: "33%",
        link: "voire le cours",
        header:{
            letitre:"Formation Robot DDC: Maîtrise de Tekla Structural Designer (TSD)",
            card:{
               vente: "best seller",
               likeicon:AiOutlineLike,
               review:"60% positise reviews (6.3k)",
               iconUser:RiAccountCircle2Line,
               student:"8,100 éléves",
               audioIcon:LuAudioLines,
               audio:"Français"
            },
            imagedesc:"/image/FORMATION TEKLA STRUCTURAL DESIGN.jpg",
            coursedetaille:" Devenir expert sur Tekla Structural Designer : Analyse, calcul et dimensionnement de structures multi-matériaux.",
            asavoir:"La formation est essentiellement pratique. Elle s'appuie sur la réalisation d'un ou plusieurs projets de bâtiments complets, de la saisie initiale jusqu'à la production de tous les documents d'exécution. Les participants manipulent le logiciel de manière intensive sous la supervision d'un expert certifié.",
            detaille:[
                {
                mintit:"Modéliser rapidement des structures complexes en 3D (bâtiments à étages, charpentes industrielles).",
                desc:"Appliquer les charges et les sollicitations (permanentes, d'exploitation, vent, neige, séisme) selon les réglementations en vigueur.",
                },
                {
                 mintit:" Analyser le comportement global de la structure et interpréter les résultats d'analyse (contraintes, déplacements).",
                 desc:"Dimensionner et optimiser les éléments en béton armé, acier, bois et maçonnerie de manière intégrée."
                },
                {
                mintit:"Générer automatiquement des plans d'exécution, des notes de calculs justificatives et des métrés détaillés.",
                desc:"Collaborer efficacement en environnement BIM grâce à l'interopérabilité (IFC, formats natifs Tekla/Trimble)."
                },
                {
                 mintit: "	Modélisation Structurelle Intelligente",
                 desc:"Saisie rapide de la géométrie, définition des niveaux, matériaux (acier, béton, bois) et sections d'éléments."
                },
                {
                  mintit:"Gestion des Charges et Sollicitations",
                  desc:" Application des charges surfaciques et linéaires, utilisation des générateurs automatiques de charges climatiques.",
                },
                {
                 mintit:"Analyse Structurelle et Résultats"  ,
                 desc:"	Analyse aux éléments finis, vérification des hypothèses, interprétation des résultats d'efforts et de déplacements."
                }
            ],
            leprix:{
                priactu:"0000",
                priavant:"0000",
                categori:{
                    categorie:"Catégories",
                    geniecivil:"Génie Civil",
                    duree:"Durée",
                    heure:"20h37mn",
                    apprend:"Apprenants",
                    neleve:"8,100",
                    certificat:"Certificat",
                    inclus:"Inclus"
                },
                tachecours:{
                    videodetail:"Plus de 60 vidéos bien détaillées.",
                    pratique:" Des cas pratiques bien expliqués.",
                    acces:"Accès à la communauté des Ingénieur sur Discord.",
                    doc:" Des fichiers ressources pour vous faciliter la tâche dans cette entreprise.",
                    button:"commande"
                }
            }
        }
    },
    {
    id: 23,
    titre: "Génie civil",
    best: "Best seller",
    time: "14h45",
    image: "/image/ROBOT PROMO CHATEAU N.jpg",
    title: "Robot Structural : Béton Armé – Étude complète d’un château...",
    title2: "Robot Structural Analysis : Étude d’un château d’eau en béton armé",
    photo: "/image/security.jpeg",
    nom: "Adama Sympavy",
    description: "Maîtrisez Robot Structural Analysis en béton armé à travers l’étude complète...",
    description2: "Grâce à une approche 100 % pratique basée sur un projet réel de château d’eau en béton armé, cette formation vous permettra de maîtriser Robot Structural Analysis pas à pas. Vous apprendrez à modéliser correctement la structure, appliquer les charges, analyser les résultats et dimensionner les éléments en béton armé selon les normes en vigueur, afin de devenir autonome et opérationnel sur des projets professionnels.",
    minititre: "Robot Structural",
    prix: "50.000",
    sousprix: "75.000",
    pourcentage: "25%",
    link: "voir le cours",
    header: {
        letitre: "Robot Structural Béton Armé : Étude complète d’un château...",
        card: {
            vente: "best seller",
            likeicon: AiOutlineLike,
            review: "97% positive reviews (1.2k)",
            iconUser: RiAccountCircle2Line,
            student: "8,500 élèves",
            audioIcon: LuAudioLines,
            audio: "Français"
        },
        imagedesc: "/image/FORMATION ROBOT BETON.jpg",
        coursedetaille: "Cette formation Robot Structural Analysis vous guide étape par étape dans l’étude complète d’un château d’eau en béton armé. Vous apprendrez à créer la modélisation 3D, définir les matériaux, appliquer les charges (poids propres, exploitation, vent, séisme), analyser le comportement structurel et dimensionner les éléments (poteaux, voiles, poutres, radier et cuve). Le cours combine théorie essentielle, démonstrations pratiques et études de cas réels pour vous rendre immédiatement efficace en bureau d’études ou sur chantier.",
        asavoir: "Avoir des notions de base en résistance des matériaux et en béton armé. Une connaissance préalable de Robot Structural Analysis est un plus mais n’est pas obligatoire.",
        detaille: [
            {
                mintit: "Introduction à Robot Structural Analysis",
                desc: "Présentation du logiciel, interface utilisateur et paramétrage initial du projet."
            },
            {
                mintit: "Modélisation du château d’eau",
                desc: "Création de la géométrie 3D, définition des sections, matériaux et appuis."
            },
            {
                mintit: "Définition des charges et combinaisons",
                desc: "Charges permanentes, charges d’exploitation, vent, séisme et combinaisons réglementaires."
            },
            {
                mintit: "Analyse structurelle",
                desc: "Lancement du calcul, lecture et interprétation des efforts internes et déplacements."
            },
            {
                mintit: "Dimensionnement du béton armé",
                desc: "Calcul et vérification des armatures des poteaux, voiles, poutres, radier et cuve."
            },
            {
                mintit: "Production des livrables",
                desc: "Extraction des notes de calcul, vérifications finales et préparation des documents techniques."
            }
        ],
        leprix: {
            priactu: "120.000",
            priavant: "160.000",
            categori: {
                categorie: "Catégories",
                geniecivil: "Génie Civil",
                duree: "Durée",
                heure: "14h45mn",
                apprend: "Apprenants",
                neleve: "8,500",
                certificat: "Certificat",
                inclus: "Inclus"
            },
            tachecours: {
                videodetail: "Plus de 85 vidéos détaillées étape par étape.",
                pratique: "Étude complète d’un château d’eau réel en béton armé.",
                acces: "Accès à la communauté privée des ingénieurs sur Discord.",
                doc: "Fichiers Robot, notes de calcul et documents techniques fournis.",
                button: "commande"
            }
        }
    }
},
{
    id: 24,
    titre: "Génie civil",
    best: "Indispensable",
    time: "9h20",
    image: "/image/METRE PROMO n.jpg",
    title: "Devis de Construction : Maîtriser le chiffrage BTP de A à Z",
    title2: "Comment faire un devis de construction professionnel",
    photo: "/image/security.jpeg",
    nom: "Adama Sympavy",
    description: "Apprenez à réaliser des devis de construction clairs, précis et professionnels pour des...",
    description2: "Cette formation vous apprend, étape par étape, comment établir un devis de construction fiable et rentable. Vous découvrirez comment analyser les plans, réaliser les métrés, estimer les coûts des matériaux, de la main-d’œuvre et des équipements, puis structurer un devis clair et professionnel, conforme aux pratiques du BTP et compréhensible par les clients.",
    minititre: "Devis BTP",
    prix: "80.000",
    sousprix: "120.000",
    pourcentage: "33%",
    link: "voir le cours",
    header: {
        letitre: "Comment faire un devis de construction : Méthode professionnelle BTP",
        card: {
            vente: "formation clé",
            likeicon: AiOutlineLike,
            review: "99% positive reviews (980)",
            iconUser: RiAccountCircle2Line,
            student: "6,200 élèves",
            audioIcon: LuAudioLines,
            audio: "Français"
        },
        imagedesc: "/image/FORMATION DEVIS BTP.jpg",
        coursedetaille: "Cette formation vous guide dans la réalisation complète d’un devis de construction, comme en bureau d’études ou en entreprise BTP. Vous apprendrez à lire les plans, effectuer les métrés, calculer les quantités, estimer les coûts unitaires, intégrer les frais généraux et marges, puis présenter un devis professionnel prêt à être envoyé au client. L’objectif est de vous rendre autonome et précis dans le chiffrage des projets de construction.",
        asavoir: "Aucune connaissance avancée n’est requise. Des notions de base en construction ou en génie civil sont un avantage, mais la formation est accessible aux débutants.",
        detaille: [
            {
                mintit: "Introduction au devis de construction",
                desc: "Rôle du devis, types de devis et erreurs courantes à éviter."
            },
            {
                mintit: "Lecture et analyse des plans",
                desc: "Comprendre les plans architecturaux et techniques pour extraire les quantités."
            },
            {
                mintit: "Métré et calcul des quantités",
                desc: "Méthodes pratiques pour calculer les volumes, surfaces et longueurs."
            },
            {
                mintit: "Estimation des coûts",
                desc: "Calcul des coûts de matériaux, main-d’œuvre, matériel et transport."
            },
            {
                mintit: "Structuration du devis",
                desc: "Organisation claire du devis : postes, sous-postes et totaux."
            },
            {
                mintit: "Finalisation et présentation",
                desc: "Ajout des marges, frais généraux et préparation du devis final pour le client."
            }
        ],
        leprix: {
            priactu: "60.000",
            priavant: "90.000",
            categori: {
                categorie: "Catégories",
                geniecivil: "Génie Civil",
                duree: "Durée",
                heure: "9h20mn",
                apprend: "Apprenants",
                neleve: "6,200",
                certificat: "Certificat",
                inclus: "Inclus"
            },
            tachecours: {
                videodetail: "Plus de 45 vidéos claires et structurées.",
                pratique: "Exemples réels de devis BTP expliqués pas à pas.",
                acces: "Accès à la communauté privée des professionnels du BTP.",
                doc: "Modèles de devis, tableaux de métrés et fichiers Excel fournis.",
                button: "commande"
            }
        }
    }
},
{
    id: 24,
    titre: "Génie civil",
    best: "Très demandé",
    time: "13h10",
    image: "/image/AFFICHE CM 2.jpg",
    title: "Structure Métallique : Études et Dimensionnement de A à Z",
    title2: "Études en structure métallique – De A à Z",
    photo: "/image/security.jpeg",
    nom: "Adama Sympavy",
    description: "Apprenez à réaliser des études complètes en structure métallique, de la modélisation...",
    description2: "Cette formation vous accompagne pas à pas dans l’étude complète d’une structure métallique. Vous apprendrez à comprendre le comportement des structures acier, modéliser les ouvrages, appliquer les charges, analyser les résultats et dimensionner les éléments selon les normes en vigueur, afin de maîtriser les projets métalliques de A à Z.",
    minititre: "Structure Métallique",
    prix: "100.000",
    sousprix: "125.000",
    pourcentage: "25%",
    link: "voir le cours",
    header: {
        letitre: "Études en structure métallique : De A à Z",
        card: {
            vente: "formation complète",
            likeicon: AiOutlineLike,
            review: "97% positive reviews (1.1k)",
            iconUser: RiAccountCircle2Line,
            student: "7,400 élèves",
            audioIcon: LuAudioLines,
            audio: "Français"
        },
        imagedesc: "/image/FORMATION STRUCTURE METALLIQUE.jpg",
        coursedetaille: "Cette formation couvre l’ensemble du processus d’étude d’une structure métallique, comme en bureau d’études. Vous apprendrez à modéliser des structures acier, définir les sections, appliquer les charges (permanentes, exploitation, vent, séisme), analyser les efforts internes et dimensionner les éléments (poteaux, poutres, contreventements, assemblages) selon les normes. Le cours est axé sur la pratique avec des exemples concrets et des cas réels.",
        asavoir: "Avoir des notions de base en résistance des matériaux. Une connaissance préalable des structures métalliques est un plus, mais la formation reste accessible aux débutants motivés.",
        detaille: [
            {
                mintit: "Introduction aux structures métalliques",
                desc: "Principes généraux, avantages de l’acier et comportement des structures."
            },
            {
                mintit: "Modélisation des structures acier",
                desc: "Création de la géométrie, choix des profils et paramétrage des matériaux."
            },
            {
                mintit: "Charges et combinaisons",
                desc: "Définition des charges permanentes, d’exploitation, vent et séisme."
            },
            {
                mintit: "Analyse structurelle",
                desc: "Calcul des efforts internes, déplacements et vérifications globales."
            },
            {
                mintit: "Dimensionnement des éléments métalliques",
                desc: "Vérification des poutres, poteaux, contreventements et stabilité."
            },
            {
                mintit: "Assemblages et livrables",
                desc: "Notions sur les assemblages métalliques et préparation des documents techniques."
            }
        ],
        leprix: {
            priactu: "110.000",
            priavant: "150.000",
            categori: {
                categorie: "Catégories",
                geniecivil: "Génie Civil",
                duree: "Durée",
                heure: "13h10mn",
                apprend: "Apprenants",
                neleve: "7,400",
                certificat: "Certificat",
                inclus: "Inclus"
            },
            tachecours: {
                videodetail: "Plus de 80 vidéos complètes et progressives.",
                pratique: "Études de cas réels en structure métallique.",
                acces: "Accès à la communauté privée des ingénieurs et techniciens.",
                doc: "Fichiers de calcul, exemples pratiques et supports techniques.",
                button: "commande"
            }
        }
    }
},
{
    id: 25,
    titre: "Génie civil",
    best: "Très pratique",
    time: "8h40",
    image: "/image/DALOT.jpg",
    title: "Dalot en Béton Armé : Étude et Dimensionnement Complet",
    title2: "Étude d’un dalot en béton armé – De A à Z",
    photo: "/image/security.jpeg",
    nom: "Adama Sympavy",
    description: "Apprenez à réaliser l’étude complète et le dimensionnement d’un dalot en béton armé...",
    description2: "Cette formation vous guide pas à pas dans l’étude technique complète d’un dalot en béton armé. Vous apprendrez à analyser les données de base, comprendre le fonctionnement de l’ouvrage, modéliser la structure, appliquer les charges et dimensionner les éléments en béton armé selon les normes en vigueur, afin de réaliser des projets routiers fiables et conformes.",
    minititre: "Dalot BA",
    prix: "80.000",
    sousprix: "120.000",
    pourcentage: "31%",
    link: "voir le cours",
    header: {
        letitre: "Étude et dimensionnement d’un dalot en béton armé",
        card: {
            vente: "cas réel",
            likeicon: AiOutlineLike,
            review: "98% positive reviews (720)",
            iconUser: RiAccountCircle2Line,
            student: "5,100 élèves",
            audioIcon: LuAudioLines,
            audio: "Français"
        },
        imagedesc: "/image/FORMATION DALOT BETON.jpg",
        coursedetaille: "Cette formation est basée sur l’étude réelle d’un dalot en béton armé utilisé dans les projets routiers et hydrauliques. Vous apprendrez à définir les hypothèses de calcul, modéliser l’ouvrage, appliquer les charges (poids propres, remblais, trafic), analyser les efforts internes et dimensionner les éléments (radier, piédroits, dalle supérieure) conformément aux normes. Le cours allie théorie essentielle et pratique terrain.",
        asavoir: "Avoir des notions de base en béton armé et en résistance des matériaux. La formation est accessible aux étudiants, techniciens et jeunes ingénieurs.",
        detaille: [
            {
                mintit: "Introduction aux dalots en béton armé",
                desc: "Rôle des dalots, types d’ouvrages et principes de fonctionnement."
            },
            {
                mintit: "Données de base et hypothèses de calcul",
                desc: "Analyse hydraulique, géométrie, matériaux et conditions de site."
            },
            {
                mintit: "Modélisation du dalot",
                desc: "Schématisation de l’ouvrage et définition des éléments structuraux."
            },
            {
                mintit: "Charges et sollicitations",
                desc: "Poids propres, remblais, surcharge routière et actions accidentelles."
            },
            {
                mintit: "Dimensionnement du béton armé",
                desc: "Calcul des armatures du radier, des piédroits et de la dalle."
            },
            {
                mintit: "Vérifications et livrables",
                desc: "Contrôles réglementaires et préparation des documents techniques."
            }
        ],
        leprix: {
            priactu: "55.000",
            priavant: "80.000",
            categori: {
                categorie: "Catégories",
                geniecivil: "Génie Civil",
                duree: "Durée",
                heure: "8h40mn",
                apprend: "Apprenants",
                neleve: "5,100",
                certificat: "Certificat",
                inclus: "Inclus"
            },
            tachecours: {
                videodetail: "Plus de 40 vidéos pratiques et bien structurées.",
                pratique: "Étude complète d’un dalot réel en béton armé.",
                acces: "Accès à la communauté privée des ingénieurs et techniciens.",
                doc: "Notes de calcul, exemples détaillés et supports techniques.",
                button: "commande"
            }
        }
    }
},
{
    id: 26,
    titre: "Génie civil",
    best: "Expert",
    time: "15h30",
    image: "/image/PONT 2.jpg",
    title: "Ponts sur pieux : Poutres, Dalles et Ponts Mixtes – Études",
    title2: "Formation Ponts sur pieux : ponts à poutres, ponts dalles et ponts mixtes",
    photo: "/image/security.jpeg",
    nom: "Adama Sympavy",
    description: "Maîtrisez l’étude et le dimensionnement des ponts sur pieux : ponts à poutres, ponts dalles...",
    description2: "Cette formation complète vous permet de comprendre et réaliser les études structurales des ponts sur pieux, qu’il s’agisse de ponts à poutres, de ponts dalles ou de ponts mixtes. À travers des cas réels, vous apprendrez à analyser les actions, modéliser les ouvrages, dimensionner les éléments porteurs et vérifier la stabilité globale conformément aux normes en vigueur.",
    minititre: "Ponts sur pieux",
    prix: "200.000",
    sousprix: "225.000",
    pourcentage: "25%",
    link: "voir le cours",
    header: {
        letitre: "Ponts sur pieux : Études complètes (Poutres, Dalles et Mixtes)",
        card: {
            vente: "niveau expert",
            likeicon: AiOutlineLike,
            review: "96% positive reviews (890)",
            iconUser: RiAccountCircle2Line,
            student: "4,800 élèves",
            audioIcon: LuAudioLines,
            audio: "Français"
        },
        imagedesc: "/image/FORMATION PONTS SUR PIEUX.jpg",
        coursedetaille: "Cette formation couvre l’étude complète des ponts sur pieux, depuis la compréhension du fonctionnement structural jusqu’au dimensionnement final. Vous apprendrez à étudier les ponts à poutres sur pieux, les ponts dalles sur pieux et les ponts mixtes, en intégrant les charges routières, les actions climatiques et les efforts transmis aux fondations profondes. L’approche est 100 % pratique, orientée bureau d’études et projets réels.",
        asavoir: "Avoir de bonnes bases en béton armé, en résistance des matériaux et en calcul des structures. Une première expérience en ouvrages d’art est recommandée.",
        detaille: [
            {
                mintit: "Introduction aux ponts sur pieux",
                desc: "Typologies de ponts, principes structuraux et domaines d’application."
            },
            {
                mintit: "Ponts à poutres sur pieux",
                desc: "Analyse structurale, modélisation et dimensionnement des poutres et appuis."
            },
            {
                mintit: "Ponts dalles sur pieux",
                desc: "Fonctionnement de la dalle, répartition des charges et calcul des armatures."
            },
            {
                mintit: "Ponts mixtes",
                desc: "Interaction acier–béton, principes de conception et vérifications."
            },
            {
                mintit: "Actions et combinaisons",
                desc: "Charges routières, effets thermiques, vent, séisme et combinaisons réglementaires."
            },
            {
                mintit: "Fondations sur pieux et livrables",
                desc: "Transmission des efforts, vérifications des pieux et préparation des documents techniques."
            }
        ],
        leprix: {
            priactu: "150.000",
            priavant: "200.000",
            categori: {
                categorie: "Catégories",
                geniecivil: "Génie Civil",
                duree: "Durée",
                heure: "15h30mn",
                apprend: "Apprenants",
                neleve: "4,800",
                certificat: "Certificat",
                inclus: "Inclus"
            },
            tachecours: {
                videodetail: "Plus de 90 vidéos approfondies et structurées.",
                pratique: "Études complètes de ponts réels sur pieux.",
                acces: "Accès à la communauté privée des ingénieurs en ouvrages d’art.",
                doc: "Notes de calcul, modèles de projets et supports techniques.",
                button: "commande"
            }
        }
    }
}



]
export default DataGenicivil