import {HeaderSection} from "./HeaderSection"
import {HistoricSection} from "./HistoricSection"
import {NosValeurs} from "./NosValeurs"
import {AdamsChiffre} from "./AdamsChiffre"
import {ExperienceSection} from "./Experience"
import {CommunauteSection} from "./CommunauteSection"
import NavbarWrapper from "../component/NavbarWrapper"
import { FooterSection } from "../component/FooterSection"
export default function Home(){
    return(
        <section className="bg-neutral-200">
         <NavbarWrapper/>
        <HeaderSection/>
        <HistoricSection/>
        <NosValeurs/>
        <AdamsChiffre/>
        <ExperienceSection/>
        <CommunauteSection/>
        <FooterSection/>
        </section>
    )
}