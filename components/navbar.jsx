import { useRouter } from "next/dist/client/router"

export default function Navbar({about, skill, education, certificate, projects, logodesign}) {

  const router = useRouter();

  return (
    <div className="w-11/12 h-fit flex flex-wrap items-center justify-around bg-white mx-auto mt-2 rounded-xl px-5 shadow-md md:w-8/12 p-3">
        <p className={about} onClick={() => router.push('/')}>About</p>
        <p className={skill} onClick={() => router.push('/skill')}>Skill</p>
        <p className={education} onClick={() => router.push('education')}>Education</p>
        <p className={certificate} onClick={() => router.push('/certificate')}>Certificate</p>
        <p className={projects} onClick={() => router.push('/projects')}>Projects</p>
        <p className={logodesign} onClick={() => router.push('/logodesign')}>Logo Design</p>
    </div>
  )
}
