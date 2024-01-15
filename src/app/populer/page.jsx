"use client"

import React, { useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async () => {
        const response = await fetch (
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
        
            )
            const data = await response.json()
    }
    
    return (
        <>
            <HeaderMenu/>
            <div>fetching data</div>
            <Pagination/>
        </>
    )
}

export default Page