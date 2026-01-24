import {TemoignageSection} from "./Temoignage"
import {CardSecion} from "./CardSection"
import {HeaderSection} from "./HeaderSection"
import {InscriptionSection} from "./Inscription"
import {FooterSection} from "../component/FooterSection"
import NavbarWrapper from "../component/NavbarWrapper"
export default function Home(){
    return(
        <section className="bg-neutral-300">
            <div className="">
                <NavbarWrapper/>
            </div>
           <HeaderSection/>
           <CardSecion/>
           <TemoignageSection/>
           <InscriptionSection/>
           <FooterSection/>
        </section>
    )
}