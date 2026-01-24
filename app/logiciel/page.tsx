import {LogicielData} from "./LogicielData";
import {HeaderSection} from "./HeaderSection"
import NavbarWrapper from "../component/NavbarWrapper";
import {CompetenceSection} from "./Competence";
import {FooterSection} from "../component/FooterSection"
export default function Home(){
    return(
        <section className="bg-neutral-300">
            <NavbarWrapper/>
            <HeaderSection/>
            <LogicielData/>
            <CompetenceSection/>
            <FooterSection/>
        </section>
    )
}