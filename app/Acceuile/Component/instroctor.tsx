import Image from 'next/image'
import heroImage from "./image/hero-image.jpg"
import Link from 'next/link'
export const InstroctorSection = function(){
       return(
        <section className='lg:mt-20 md:mt-10 mt-5 flex flex-col lg:flex-row justify-center items-center gap-5'>
            {/*------------section image & text----------*/}
            <div className='flex flex-col lg:flex-row flex-1 justify-center bg-black p-5 rounded-xl items-center gap-3'>
                {/*--------text main section-----*/}
                <main className='flex flex-col  gap-6'>
                    <h3 className='text-3xl lg:text-6xl text-orange-500 font-bold flex flex-col p-1 lg:p-2'>Améliorez vos compétences.
                      <span>Transformez votre avenir.</span>
                     </h3>
                     <p className='flex flex-col text-orange-500 p-2 text-sm md:text-lg lg:text-xl'>
                         Rejoignez les milliers d'apprenants qui ont déjà suivi leur
                         <span>Faites passer votre carrière au niveau supérieur grâce</span>
                           <span>  à des cours dispensés par des experts.</span>
                     </p>
                     <Link href="#"
                     className='px-6 py-2 lg:py-3 lg:text-xl text-sm bg-orange-500 text-white rounded-lg text-center'
                     >Inscrit Toi Dés aujourd'huit</Link>
                </main>
                {/*--------image section-----*/}
                <main className='w-full lg:w-[750px] lg:h-[370px]'>
                    <Image src={heroImage} alt="hero image" className='w-full lg:w-[750px] h-[260px] lg:h-[370px] object-cover rounded-xl'/>
                </main>
            </div>

            {/*----------instructor section----------*/}
            <div className='lg:w-[500px] w-full bg-black text-orange-500 lg:p-5 p-2 rounded-xl'>
                <h1 className='lg:text-6xl text-3xl font-bold flex flex-col p-2'>Devenir Instructeur</h1>
                <p className='flex flex-col lg:text-xl text-sm p-1'>
                    Rejoignez notre communauté d'enseignants et touchez
                    <span>Rejoignez notre communauté d'enseignants et </span>
                    <span> touchez des milliers d'étudiants à travers le monde.</span>
                    <span>grâce à votre expertise.</span>
                </p>
                <Link href="#"
                className="bg-white px-8 lg:py-3 py-2 text-sm rounded-lg text-black mt-5 block text-center lg:text-xl"
                >Laisser vos information</Link>
            </div>
        </section>
       )
}