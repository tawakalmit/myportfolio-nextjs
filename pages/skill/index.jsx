import Layout from "../../components/layout"
import {SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiTailwindcss, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiTrello } from "react-icons/si"
import {FaReact, FaNodeJs, FaGithub} from "react-icons/fa"

export default function Skill() {
  return (
    <>
    <Layout
    page="Skill"
    about="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    skill="text-[#3498db] cursor-pointer"
    education="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    certificate="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    projects="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    logodesign="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    content={
        <div className="w-7/12 mx-auto flex flex-wrap justify-around mt-5 md:mt-20">
            <div className="md:m-5">
                <SiHtml5 size={70} color="#2c3e50" alt="html" />
                <p className="text-center">HTML</p>
            </div>

            <div className="md:m-5">
                <SiCss3 size={70} color="#2c3e50" alt="css" />
                <p className="text-center">CSS</p>
            </div>

            <div className="md:m-5">
                <SiJavascript size={70} color="#2c3e50" alt="js" />
                <p className="text-center">Javascript</p>
            </div>

            <div className="md:m-5">
                <FaReact size={70} color="#2c3e50" alt="react" />
                <p className="text-center">React JS</p>
            </div>

            <div className="md:m-5">
                <SiNextdotjs size={70} color="#2c3e50" alt="next" />
                <p className="text-center">Next JS</p>
            </div>

            <div className="md:m-5">
                <SiTailwindcss size={70} color="#2c3e50" alt="tailwind" />
                <p className="text-center">Tailwind</p>
            </div>

            <div className="md:m-5">
                <SiFigma size={70} color="#2c3e50" alt="figma" />
                <p className="text-center">Figma</p>
            </div>

            <div className="md:m-5">
                <FaNodeJs size={70} color="#2c3e50" alt="node" />
                <p className="text-center">Node JS</p>
            </div>

            <div className="md:m-5">
                <FaGithub size={70} color="#2c3e50" alt="github" />
                <p className="text-center">Github</p>
            </div>

            <div className="md:m-5">
                <SiTrello size={70} color="#2c3e50" alt="trello" />
                <p className="text-center">Trello</p>
            </div>

            <div className="md:m-5">
                <SiAdobephotoshop size={70} color="#2c3e50" alt="photoshop" />
                <p className="text-center">Photoshop</p>
            </div>

            <div className="md:m-5">
                <SiAdobeillustrator size={70} color="#2c3e50" alt="illustrator" />
                <p className="text-center">Illustrator</p>
            </div>    
        </div>
    }
    />  
    </>
  )
}
