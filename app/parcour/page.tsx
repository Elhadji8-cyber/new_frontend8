import {CardDomain} from "./CardDomain";
import {MiniSection} from "./MiniSection";
import {HeaderSection} from "./HeaderSection";
import {MarchSection}  from "./MarchSection";
import NavbarWrapper from "../component/NavbarWrapper";
import {FooterSection} from "../component/FooterSection"
export default function Home(){
    return(
        <section>
            <NavbarWrapper/>
            <HeaderSection/>
            <MiniSection/>
           <CardDomain/>
           <MarchSection/>
           <FooterSection/>
        </section>
    )
}