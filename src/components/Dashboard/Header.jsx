"use client"

import { ArrowSquareLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({title}) => {
    const router = userRouter()

    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between items-center mb-4">
            <button onClick={handleBack} className="text-color-primary">
            <ArrowSquareLeft size={32}/>
            </button>
            <h3 className="text-2xl text-color-primary font-bold mb-4">{title}</h3>
        </div>
    )
}

export default Header
