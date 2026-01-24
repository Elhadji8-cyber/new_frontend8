"use client"
import Link from "next/link"
import { IoArrowUpSharp } from "react-icons/io5";
import { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

type VideoCard = {
    video: string
    text: string
    link: string
}

const VideoData: VideoCard[] = [
  { video: "/video/video-1.mp4", text: "Apprenez chez vous", link: "#" },
  { video: "/video/video-2.mp4", text: "Apprenez chez vous", link: "#" },
  { video: "/video/video-3.mp4", text: "Apprenez chez vous", link: "#" },
  { video: "/video/video-4.mp4", text: "Apprenez chez vous", link: "#" },
  { video: "/video/video-5.mp4", text: "Apprenez chez vous", link: "#" },
  { video: "/video/video-6 (2).mp4", text: "Apprenez chez vous", link: "#" },
]

// Séparation gauche/droite
const videoDataLeft = VideoData.filter((_, index) => index % 2 === 0);
const videoDataRight = VideoData.filter((_, index) => index % 2 !== 0);

export const VideoCarousel = () => {
  const controlsUp = useAnimation()
  const controlsDown = useAnimation()

  useEffect(() => {
    controlsUp.start({
      y: ["0%", "-100%"],
      transition: { duration: 20, ease: [0, 0, 1, 1], repeat: Infinity }
    });

    controlsDown.start({
      y: ["-100%", "0%"],
      transition: { duration: 20, ease: [0, 0, 1, 1], repeat: Infinity }
    });
  }, [controlsUp, controlsDown]);

  return (
    <section className="flex justify-center mt-20  gap-5 p-5">
      <div className="flex flex-col w-[50%] gap-2 ">
        <h2 className="text-orange-500 text-7xl font-bold p-2 flex flex-col gap-2">
          ODS (Orange Digital School), la plateforme de formation 
         <span className="text-3xl"> numérique qui prépare la nouvelle
          génération de talents africains aux 
          compétences du 21ᵉ siècle.</span>
        </h2>
         <p className="flex flex-col p-2 text-xl">Construire une Afrique numérique, innovante et inclusive, où chaque 
           étudiant a la possibilité d’apprendre, de créer et
          d&apos;entreprendre grâce aux outils digitaux.
          <span className="font-bold">“Chez ODS, chaque ligne de code, chaque idée et chaque
          projet contribuent à bâtir un futur meilleur.”</span>
          </p>
        <ul className="flex flex-col gap-2 text-xl font-bold p-2">
          <li>Être motivé à apprendre et à pratiquer</li>
          <li>Avoir un ordinateur et une connexion Internet</li>
          <li>Être prêt à suivre des cours en ligne</li>
        </ul>
        <main className="flex gap-10">
          <Link href="#" className="px-8 flex items-center gap-2 py-3 rounded-2xl bg-orange-500 text-xl">Inscrivez vous
           <IoArrowUpSharp className="rotate-60 bg-white p-1 text-2xl rounded-full" /></Link>
          <Link href="#" className="px-8 flex items-center gap-2 py-3 rounded-2xl bg-black text-orange-500 text-xl">
          Contacter Nous <IoArrowUpSharp className="rotate-60 bg-white text-2xl p-1 rounded-full" /></Link>
        </main>
      </div>

      {/* --- Vidéos --- */}
      <div className="flex gap-5">
        <div className="h-[700px] overflow-hidden">
          <motion.div initial={{ y: "0%" }} animate={controlsDown}>
            <VideoContent data={videoDataLeft} />
            <VideoContent data={videoDataLeft} />
          </motion.div>
        </div>

        <div className="h-[700px] overflow-hidden">
          <motion.div initial={{ y: "-100%" }} animate={controlsUp}>
            <VideoContent data={videoDataRight} />
            <VideoContent data={videoDataRight} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export const VideoContent = ({ data }: { data: VideoCard[] }) => {
  return (
    <div className="flex flex-col gap-5">
      {data.map((item, index) => (
        <div key={index} className="w-[300px] h-[450px] rounded-xl overflow-hidden relative">
          <video src={item.video} autoPlay loop muted playsInline className="object-cover w-full h-full" />

          <div className="flex items-center gap-2 absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-2 rounded-lg w-[230px]">
            <h3>{item.text}</h3>
            <Link href={item.link} className="p-3 bg-orange-500 rounded-full">
              <IoArrowUpSharp className="rotate-60" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
