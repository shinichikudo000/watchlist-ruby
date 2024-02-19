import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { AnimeListItemProps } from "../(home)/page";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AnimeListItem: React.FC<AnimeListItemProps> = ({ 
    title,
    description,
    id,
    deleteAnime
}) => {
    const router = useRouter()
    const handleClickEdit = () => {
        router.push(`/${id}/edit`)
    }
    return (
             <div className="
                relative
                w-full
                flex
                flex-row
                gap-2
                group
                border-b-2
                border-[#232323]
                mt-4
                hover:bg-[#282828]
                rounded-lg
                p-2
                cursor-pointer
            ">  
                <div className="
                    relative
                    left-[2px]
                    top-[5px]
                    min-w-[10px]
                    max-h-[10px]
                    border-2
                    border-grey-400
                    grow-0
                "></div>
                <div className="
                    grow-1
                    h-[4rem]
                    truncate
                ">
                    <div className="
                        flex
                        flex-row
                        gap-2
                        items-center
                    ">  
                        <h2>{title}</h2>
                        <MdDelete size={15} className="
                            hidden
                            group-hover:flex
                            cursor-pointer
                            z-10
                        "   
                            onClick={deleteAnime}
                        />
                        <MdEdit size={15}className="
                            hidden
                            group-hover:flex
                            cursor-pointer
                            z-10
                        "
                            onClick={handleClickEdit}
                        />
                    </div>
                    <Link href={`/${id}`}><p className="">{description}</p></Link>
                </div>
            </div>
    );
}

export default AnimeListItem;