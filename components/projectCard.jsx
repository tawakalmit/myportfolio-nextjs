import Image from "next/dist/client/image"
import {TbWorld} from "react-icons/tb"
import {SiGithub} from "react-icons/si"
import {FaFigma} from "react-icons/fa"
import { useRouter } from "next/dist/client/router"

export default function ProjectCard({nama, deploy, github, figma, duration, ul, image }) {
    const router = useRouter();
  return (
    <div className="w-full bg-[#2c3e50] rounded-xl mt-10 text-[#ecf0f1]">
        <div className="p-3 flex items-center">
            <h1 className="font-semibold text-xl">{nama}</h1>
            <div className="w-2/12 ml-2 flex items-center justify-around">
            <TbWorld size={25} onClick={deploy} className="cursor-pointer hover:opacity-50"/>
            <SiGithub size={25} onClick={github} className="cursor-pointer hover:opacity-50"/>
            <FaFigma size={25} onClick={figma} className="cursor-pointer hover:opacity-50" />
            </div>
        </div>

        <div className="w-11/12 mx-auto">
        {ul}
        <p>Duration : {duration}</p>
        </div>

        <div className="w-11/12 flex justify-around mx-auto px-5 pt-3 pb-5">
            {image}
        </div>
    </div>
  )
}
