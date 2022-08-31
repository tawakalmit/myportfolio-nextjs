import Layout from "../../components/layout"
import Image from "next/dist/client/image"

export default function Certificate() {
  return (
    <>
    <Layout
    page="Certificate"
    about="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    skill="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    education="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    certificate="text-[#3498db] cursor-pointer"
    projects="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    logodesign="cursor-pointer opacity-50 hover:opacity-100 active:text-[#3498db]"
    content={
        <div className="w-11/12 mx-auto flex justify-around mt-5 md:mt-20">
            <Image src="/webdasar.png" width={400} height={300} alt="certi" className="m-3" />
            <Image src="/frontend.png" width={400} height={300} alt="certi" className="m-3" />
        </div>
    }
    />  
    </>
  )
}
