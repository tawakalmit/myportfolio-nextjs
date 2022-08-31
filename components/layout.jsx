import Sidebar from './sidebar'
import Navbar from './navbar'
import Head from 'next/head'

export default function Layout({page, about, skill, education, certificate, projects, logodesign, content}) {
  return (
    <div className='flex justify-end w-full'>
        <Head>
            <title>M Ikbal Tawakal | {page}</title>
            <link rel='icon' href='/clipboard-list.svg' />
        </Head>
        <div className='w-4/12 fixed top-0 bottom-0 left-0 bg-[#2c3e50]'>
          <Sidebar />
        </div>
        <div className='w-8/12 bg-[#ecf0f1]'>
          <Navbar
          about={about}
          skill={skill}
          education={education}
          certificate={certificate}
          projects={projects}
          logodesign={logodesign}
          />
          {content}
        </div>
    </div>
  )
}
