export default function Navbar({about, skill, education, certificate, projects, logodesign}) {
  return (
    <div className="w-11/12 h-fit flex flex-wrap items-center justify-around bg-white mx-auto mt-2 rounded-xl px-5 shadow-md md:w-8/12 p-3">
        <p className={about}>About</p>
        <p className={skill}>Skill</p>
        <p className={education}>Education</p>
        <p className={certificate}>Certificate</p>
        <p className={projects}>Projects</p>
        <p className={logodesign}>Logo Design</p>
    </div>
  )
}
