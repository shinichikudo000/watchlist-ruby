import React from "react";
import Box from "../_components/Box";

export default function HomePageLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <Box className='
            w-full 
            h-full 
            flex
            flex-col
            p-4
            overflow-x-hidden
        '>
            <div className="
                text-4xl
                flex
                w-full
                justify-center
                border-b-4
                border-[#282828]
                pb-4
            ">
                Anime Watchlist
            </div>
            <div>
                {children}
            </div>
        </Box>
    )
}