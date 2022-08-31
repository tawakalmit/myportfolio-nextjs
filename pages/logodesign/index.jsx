import Layout from "../../components/layout"
import Image from "next/dist/client/image"

export default function LogoDesign() {
  return (
    <>
    <Layout
    page="Logo Design"
    about="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    skill="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    education="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    certificate="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    projects="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    logodesign="text-[#3498db] cursor-pointer"
    content={
        <div className="w-11/12 flex flex-wrap mx-auto mt-10 justify-around">
            <Image src="/1.png" width={150} height={150} />
            <Image src="/2.png" width={150} height={150} />
            <Image src="/3.png" width={150} height={150} />
            <Image src="/4.png" width={150} height={150} />
            <Image src="/5.png" width={150} height={150} />
            <Image src="/6.png" width={150} height={150} />
            <Image src="/7.png" width={150} height={150} />
            <Image src="/8.png" width={150} height={150} />
            <Image src="/9.png" width={150} height={150} />
            <Image src="/10.png" width={150} height={150} />
            <Image src="/11.png" width={150} height={150} />
            <Image src="/12.png" width={150} height={150} />
            <Image src="/13.png" width={150} height={150} />
            <Image src="/14.png" width={150} height={150} />
        </div>
    }
    />  
    </>
  )
}
