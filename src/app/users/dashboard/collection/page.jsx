import Header from "@/components/Dashboard/Header"
import { ArrowArcLeft } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return(
        <section className="mt-4 px-4">
            <Header title={"My Collection"}/>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex items-center justify-center bottom-0 w-full h-16 bg-color-accent">
                        <h5 className="text-xl text-center">Judul anime disini</h5>
                    </div>
                </Link>
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex items-center justify-center bottom-0 w-full h-16 bg-color-accent">
                        <h5 className="text-xl text-center">Judul anime disini</h5>
                    </div>
                </Link>
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex items-center justify-center bottom-0 w-full h-16 bg-color-accent">
                        <h5 className="text-xl text-center">Judul anime disini</h5>
                    </div>
                </Link>
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex items-center justify-center bottom-0 w-full h-16 bg-color-accent">
                        <h5 className="text-xl text-center">Judul anime disini</h5>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Page