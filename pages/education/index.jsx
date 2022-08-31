import Layout from "../../components/layout"

export default function Education() {
  return (
    <>
    <Layout
    page="Education"
    about="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    skill="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    education="text-[#3498db] cursor-pointer"
    certificate="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    projects="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    logodesign="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    content={
        <div className="w-10/12 mx-auto flex-col mt-5 md:mt-20  ">
            <div className="w-10/12 mb-10">
                <p className="font-semibold text-xl">Diploma III</p>
                <p className="opacity-50">Manajemen Patiseri</p>
                <p className="font-medium">Sekolah Tinggi Pariwisata Bandung</p>
                <p className="opacity-80">2012 - 2015</p>
            </div>
            <div className="w-10/12">
                <p className="font-semibold text-xl">Immersive Bootcamp</p>
                <p className="opacity-50">Front End Engineer</p>
                <p className="font-medium">Alterra Academy</p>
                <p className="opacity-80">June - August 2022</p>
                <ul className="mt-5 text-sm">
                    <li><p>Learn HTML, CSS, Tailwind CSS, Javascript, UI/UX, Node JS, React JS, Next JS,
                    Git & Github, and Scrum agile method.</p></li>
                    <li className="mt-3"><p>Build projects with team, start with design the UI/UX using figma, build with
                    React or Next and styling using tailwind, then integrate with API that has been
                    made by Backend team and deploy the web via Vercel, checked by QA team,
                    and finally presented with slides.</p></li>
                </ul>
            </div>
        </div>
    }
    />  
    </>
  )
}
