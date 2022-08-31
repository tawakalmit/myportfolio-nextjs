import Layout from "../../components/layout"
import ProjectCard from "../../components/projectCard"
import { useRouter } from "next/dist/client/router"
import Image from "next/dist/client/image";

export default function Projects() {
    const router = useRouter();
  return (
    <>
    <Layout
    page="Projects"
    about="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    skill="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    education="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    certificate="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    projects="text-[#3498db] cursor-pointer"
    logodesign="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    content={
        <div className="w-10/12 mx-auto">

            <ProjectCard
            nama="LesGoo ( Realtime Location and Chat )"
            deploy={() => router.push("https://les-goo.vercel.app") }
            github={() => router.push("https://github.com/tawakalmit/LesGoo-1.2.git") }
            figma={() => router.push("https://www.figma.com/file/jMBzc4iIBLjwRcB5A1FL15/Prototype?node-id=0%3A1") }
            duration="15 Days. August, 9th - August, 24th 2022."
            ul=
            {<ul>
                <li className="list-disc">Design UI/UX and wireframe using FIGMA</li>
                <li className="list-disc">Slicing design to code using Next JS and tailwind for styling</li>
                <li className="list-disc">Implement React Leaflet and Openstreet map for location tracker feature.</li>
                <li className="list-disc">Implement Firebase Cloud Messaging for chat feature.</li>
                <li className="list-disc">Integrate the app to the backend RESTful API.</li>
                <li className="list-disc">Collaborate the project with the Backend and Quality Assurence Team via Trello, Github and Discord</li>
                <li className="list-disc">Deploy the web via VERCEL</li>
            </ul>} 
            image={
                <>
                <Image src="/lesgoo.png" width={300} height={150} />
                <Image src="/lesgoo2.png" width={300} height={150} />
                </>
            }  
            />

            <ProjectCard
            nama="Mercat App ( E-Commerce App )"
            deploy={() => router.push("https://mercat-app.vercel.app") }
            github={() => router.push("https://github.com/tawakalmit/mercat-app.git") }
            figma={() => router.push("https://www.figma.com/file/6Tu820mRvx4AwD3H13iBJ9/Untitled") }
            duration="6 Days. July, 31th - August, 5th 2022."
            ul=
            {<ul>
                <li className="list-disc">Design UI/UX and wireframe using FIGMA</li>
                <li className="list-disc">Slicing design to code using Next JS and tailwind for styling</li>
                <li className="list-disc">Integrate the app to the backend RESTful API.</li>
                <li className="list-disc">Collaborate the project with the Backend Team via Trello, Github and Discord.</li>
                <li className="list-disc">Deploy the web via VERCEL </li>
            </ul>}  
            image={
                <>
                <Image src="/mercat.png" width={300} height={150} />
                </>
            }   
            />

            <ProjectCard
            nama="Kongkow App ( Social Media App )"
            deploy={() => router.push("https://kongkow-app.vercel.app") }
            github={() => router.push("https://github.com/tawakalmit/kongkow-app.git") }
            figma={() => router.push("https://www.figma.com/file/1I2DO6DJIkJCWr5IWuNa5i/Mobile-Version") }
            duration="6 Days. July, 24th - July, 29th 2022"
            ul=
            {<ul>
                <li className="list-disc">Design UI/UX and wireframe using FIGMA</li>
                <li className="list-disc">Slicing design to code using Next JS and tailwind for styling</li>
                <li className="list-disc">Integrate the app to the backend RESTful API.</li>
                <li className="list-disc">Collaborate the project with the Backend Team via Trello, Github and Discord.</li>
                <li className="list-disc">Deploy the web via VERCEL </li>
            </ul>}
            image={
                <>
                <Image src="/kongkow.png" width={300} height={150} />
                </>
            }     
            />

            <ProjectCard
            nama="Jes Petshop ( E- Commerce app )"
            deploy={() => router.push("https://jes-petshop-next-js.vercel.app") }
            github={() => router.push("https://github.com/tawakalmit/Jes-Petshop-NextJs.git") }
            figma={() => router.push("https://www.figma.com/file/9XYSGsjAE3NA7AjArlF0GW/Jes-Petshop?node-id=0%3A1") }
            duration="On Progress"
            ul=
            {<ul>
                <li className="list-disc">Design UI/UX and wireframe using FIGMA</li>
                <li className="list-disc">Slicing design to code using Next JS and tailwind for styling</li>
                <li className="list-disc">Create API via strappi CMS headless</li>
                <li className="list-disc">Integrate with strappi API</li>
                <li className="list-disc">Deploy the web via VERCEL </li>
            </ul>}   
            image={
                <>
                <Image src="/jes.png" width={150} height={230} />
                <Image src="/jes2.png" width={150} height={230} />
                </>
            }
            />

            <ProjectCard
            nama="MitFlix ( Movie Database Web )"
            deploy={() => router.push("https://mitflix-three.vercel.app") }
            github={() => router.push("https://github.com/tawakalmit/mymovie-react-app-fullrelease.git") }
            ul=
            {<ul>
                <li className="list-disc">Integrate OMDB API</li>
                <li className="list-disc">Add to favourite feature</li>
                <li className="list-disc">Dark mode theme</li>
                <li className="list-disc">Build with React JS</li>
                <li className="list-disc">Vanilla CSS styling</li>
                <li className="list-disc">Responsive</li>
            </ul>} 
            image={
                <>
                <Image src="/mitflix.png" width={300} height={150} />
                <Image src="/mitflix2.png" width={300} height={150} />
                </>
            }     
            />

            <ProjectCard
            nama="Bookshelf App"
            deploy={() => router.push("https://bookshelf-apps-tawakalmit.vercel.app") }
            github={() => router.push("https://github.com/tawakalmit/bookshelf-apps.git") }
            ul=
            {<ul>
                <li className="list-disc">Build with Pure HTML, CSS, Javascript</li>
                <li className="list-disc">Add books feature</li>
                <li className="list-disc">Move books from unread to finish read shelf</li>
            </ul>}
            image={
                <>
                <Image src="/bookshelf.png" width={300} height={150} />
                <Image src="/bookshelf2.png" width={300} height={150} />
                </>
            } 
            />

            <ProjectCard
            nama="Sofaque Website (Landing Page)"
            deploy={() => router.push("https://sofaque-website.vercel.app") }
            github={() => router.push("https://github.com/tawakalmit/sofaque-website.git") }
            ul=
            {<ul>
                <li className="list-disc">Build with Pure HTML, CSS, Javascript</li>
                <li className="list-disc">Navbar burger menu</li>
                <li className="list-disc">Responsive website</li>
            </ul>}  
            image={
                <>
                <Image src="/sofaque.png" width={300} height={150} />
                <Image src="/sofaque2.png" width={300} height={150} />
                </>
            }  
            />

        </div>
    }
    />  
    </>
  )
}
