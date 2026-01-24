
import { IconType } from "react-icons";
export type CardData = {
        id: number;
        titre: string;
        best: string;
        time: string;
        image: string;
        title: string;
        title2?: string;
        photo: string;
        nom: string
        description: string;
        description2?: string;
        minititre: string;
        prix: string;
        sousprix: string;
        pourcentage: string;
        link: string;
        header: {
            letitre:string;
            card: {
               vente: string;
               likeicon: IconType;
               review:string;
               iconUser: IconType;
               student:string;
               audioIcon: IconType;
               audio:string;
            },
            imagedesc: string,
            coursedetaille:string;
            asavoir: string;
            detaille:[
                {
                mintit:string;
                desc:string;
                },
                {
                 mintit:string;
                 desc:string;
                },
                {
                mintit:string;
                desc:string;
                },
                {
                 mintit: string;
                 desc:string;
                },
                {
                  mintit:string;
                  desc:string;
                },
                {
                 mintit:string;
                 desc:string;
                }
            ],
                leprix:{
                priactu:string;
                priavant:string;
                categori:{
                    categorie:string;
                    geniecivil:string,
                    duree:string;
                    heure:string;
                    apprend:string;
                    neleve:string;
                    certificat:string;
                    inclus:string;
                },
                tachecours:{
                    videodetail:string;
                    pratique:string;
                    acces:string;
                    doc:string;
                    button:string;
                }
            }
        }
}