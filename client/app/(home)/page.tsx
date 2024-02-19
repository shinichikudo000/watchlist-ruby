'use client'

import { useEffect, useState } from "react"
import { API_URL } from "../constants"
import AnimeListItem from "../_components/AnimeListItem";

export interface AnimeListItemProps {
    id: number;
    title: string;
    description: string;
    deleteAnime: () => void
}

export default function HomePage() {
    const [animeList, setAnimeList] = useState<AnimeListItemProps[]>([])

    useEffect(() => {
        async function loadAnimeWatchlist() {
            try {
                const response = await fetch(`${API_URL}`)
                if (response.ok) {
                    const json = await response.json()
                    setAnimeList(json)
                }
            } catch (e) {
                console.log(e)
            }
        }
        loadAnimeWatchlist()
    }, [])

    async function deleteAnime(id: any) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            })
            if (response.ok) {
                setAnimeList(animeList.filter((anime) => anime.id !== id))
            } else {
                throw response
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="text-white w-full px-8 pb-8">
            {
                animeList.map((item) => (
                    <AnimeListItem key={item.title} {...item} deleteAnime={() => deleteAnime(item.id)}/>
                ))
            }
        </div>
    )
}