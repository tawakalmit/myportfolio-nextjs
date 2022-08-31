import Layout from "../../components/layout"

export default function Homepage() {
  return (
    <>
    <Layout 
    page="About"
    about="text-[#3498db] cursor-pointer"
    skill="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    education="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    certificate="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    projects="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    logodesign="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    content={
      <div className="w-8/12 h-screen mx-auto flex flex-col mt-20">
      <h1 className="text-center font-bold text-3xl mb-10">About</h1>
      <p className="text-center">I was worked in FnB Industry and now I shift my career to Front End Engineer. I passed
      the Alterra Academy Immersive bootcamp for 3 months and learn many things about
      UI/UX Design and Front End Engineering such as ReactJS & NextJS framework, HTML,
      CSS, and Tailwind. I have created projects like E-Commerce, Social Media App and
      Realtime Location Chat App . Until now I’ve created around 4 UI web designs and 11
      web projects : 2 React projects and 3 Next projects with backend integration and 7 web
      projects based on HTML,CSS and Javascript. I have a high interest in IT, especially
      Front-End Engineering and enjoy my time to develop and keep learning more
      technology to come.</p>
      </div>
    }
    />
    </>
  )
}
