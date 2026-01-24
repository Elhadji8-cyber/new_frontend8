import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image'
import logo from './image/logo-2.png'
import Link from 'next/link'
type NavbarItems = {
    label: string;
    link: string;
    children?: NavbarItems[];
}  
const NavData :NavbarItems[]=[
     {
      label: "Accueil",
      link: "#",

     },
   
    {
    label: "Cours",
    link: "#",
    children:[
    {label: "Digital Marketing",
     link: "#"
      },
      {label: "Developpement Web",
        link: "#"
      },
      {label: "Developpement Mobile",
        link: "#"
      },
      {label: "Analys Des Données",
        link: "#"
      },
      {label: "Software Engineering",
        link: "#"
      },
      {label: "Cyber Security",
        link: "#"
      }
    ]
   },
   {
    label: "Page",
    link: "#",
    children:[
        {label: "A Propos",
            link: "#"
        },
        {label: "Notre Mision",
            link: "#"
        }, 
        {
            label: "Nos Mentor",
            link: "#"
        },
        {
            label: "Inscriptions",
            link: "#"
        },
        {
            label: "Contact",
            link: "#"
        }

    ]
   },
    {
    label: "Blog",
    link: "#",
    children:[
        {label: "Article",
            link: "#"
        },
    ]
   }
]
export const NavbarSection = function(){
    return(
        <section className="flex relative w-full justify-center items-center gap-10 mt-2 " >
            <div className="flex fixed z-40 mt-30  justify-evenly w-full items-center gap-10 ">
              <main className="flex gap-2 justify-center items-center">
              {/*------logo orange------*/}
              <Image src={logo} alt='logo' className="w-5 h-5 lg:w-12.5 lg:h-12.5 object-cover rounded-full"/>
              <div>
              <h2 className="text-sm lg:text-lg md:text-sm text-orange-500 font-bold">Orange Digital School</h2>
                <p className=" text-orange-500">école de formation en ligne</p>
                </div>
                </main>

                {/*-----Navbar Items-----*/}
                <nav className="hidden lg:flex md:hidden justify-center items-center gap-10 p-10">
                  {NavData.map((item, index)=> (
                    <div key={index} className="relative group px-2 transition-all">
                     <Link href={item.link ?? "#"} className="flex justify-center items-center  transition-all hover:text-orange-500">
                     <span className="text-orange-500 hover:text-white transition-all duration-300">{item.label}</span>
                     {item.children && (
                        <IoIosArrowDown className="rotate-180 hover:rotate-0 text-orange-500"/>
                     )}
                     </Link>
                     {/*-------Dropdown menu-----*/}
                     {item.children && (
                     <div className="absolute top-full bg-orange-500 z-40 right-0 hidden w-55 flex-col gap-1 rounded-lg py-3 
                     shadow-md transition-all group-hover:flex  ">
                      {item.children.map((child, index)=> (
                        <Link href={item.link ?? "#"} key={index}
                        className="p-3  text-white hover:text-neutral-300 transition-all duration-300"
                        >
                        <span>{child.label}</span>
                        </Link>
                      ))}  
                     </div>
                     )}
                    </div>
                  ))}
                </nav>
                {/*--------button section------*/}
                <div className="flex gap-5 items-center">
                    <Link href="#"
                    className="px-3 py-2 lg:px-6 rounded-2xl bg-orange-500 text-white"
                    >Acheter</Link>
                    <Link href="#"
                    className="px-2 text-sm lg:text-xl md:text-sm lg:px-6 py-2 rounded-2xl border-2 border-orange-500 text-orange-500
                     hover:bg-orange-500 hover:text-white transition-all duration-300"
                    >Contacter Nous</Link>
                </div>
         </div>
        </section>
    )
}