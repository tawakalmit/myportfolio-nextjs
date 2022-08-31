export default function Navbar({about, skill, education, certificate, projects, logodesign}) {
  return (
    <div className="w-8/12 h-10 flex items-center justify-around bg-white mx-auto mt-2 rounded-xl px-5 shadow-md">
        <p className={about}>About</p>
        <p className={skill}>Skill</p>
        <p className={education}>Education</p>
        <p className={certificate}>Certificate</p>
        <p className={projects}>Projects</p>
        <p className={logodesign}>Logo Design</p>
    </div>
  )
}
