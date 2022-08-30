import React from 'react'
import Image from 'next/image'
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {CgFigma} from "react-icons/cg"
import {RiInstagramFill} from "react-icons/ri"
import {SiVercel} from "react-icons/si"
import { useRouter } from 'next/router'

export default function Sidebar() {
    const router = useRouter();
  return (
    <div className='w-full h-14 md:w-4/12 min-h-screen bg-[#2c3e50]'>
        <div className='w-10/12 h-auto md:w-10/12 py-20 mx-auto flex flex-col items-center'>
            <div className='w-fit mx-auto'>
            <Image src="/profile.jpg" width={200} height={200} alt="profile" className='rounded-full' />
            </div>
            <h1 className='text-[#ecf0f1] font-semibold text-2xl mt-5'>M Ikbal Tawakal</h1>
            <h2 className='text-white opacity-50'>Front End Engineer</h2>
            <p className='text-white text-sm opacity-80'>tawakal.mit@gmail.com</p>
            <div className='w-11/12 flex justify-around mt-10'>
                <FaLinkedin color='#ecf0f1' size={30} alt="Linkedin" onClick={() => router.push("https://www.linkedin.com/in/mikbaltawakal29/")} className='cursor-pointer hover:opacity-40' />
                <FaGithub color='#ecf0f1' size={30} alt="Github" onClick={() => router.push("https://github.com/tawakalmit")} className='cursor-pointer hover:opacity-40' />
                <CgFigma color='#ecf0f1' size={30} alt="Figma" onClick={() => router.push("https://www.figma.com/@tawakalmit")} className='cursor-pointer hover:opacity-40' />
                <RiInstagramFill color='#ecf0f1' size={30} alt="Instagram" onClick={() => router.push("https://www.instagram.com/tawakalmit/")} className='cursor-pointer hover:opacity-40' />
                <SiVercel color='#ecf0f1' size={30} alt="Vercel" onClick={() => router.push("https://vercel.com/tawakalmit")} className='cursor-pointer hover:opacity-40' />
            </div>
        </div>
    </div>
  )
}