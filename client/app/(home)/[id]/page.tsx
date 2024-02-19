'use client'
import { API_URL } from "@/app/constants"
import { useEffect, useState } from "react"
import { AnimeListItemProps } from "../page"

export default function AnimeItem({ params }: { params: { id: string } }) {
    const [anime, setAnime] = useState<AnimeListItemProps>()
    useEffect(() => {
        async function fetchCurrentAnime() {
            try {
                const response = await fetch(`${API_URL}/${params.id}`)
                if (response.ok) {
                    const json = await response.json()
                    setAnime(json)
                } else {
                    throw response
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchCurrentAnime()
    }, [])

    return (
        <div className="
            py-8
            px-16
            w-full
            h-full
            flex
            flex-col
            gap-4
        ">
            <h1 className="
                w-full
                flex
                justify-center
                text-2xl
                font-bold
            ">
                {anime?.title}
            </h1>
            <p className="
                grow-1
                indent-4
            ">
                {anime?.description}
            </p>
        </div>
    )
}