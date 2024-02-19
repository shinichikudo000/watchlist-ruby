'use client'
import { useEffect, useState } from "react"
import { AnimeListItemProps } from "../../page"
import { API_URL } from "@/app/constants"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ApiResponse, formSchema } from "../../new/page"


export default function AnimeItemEdit({ params }: { params: { id: string } }) {
    const router = useRouter()

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
    }, [params.id])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: anime ? anime.title : '',
          description: anime ? anime.description : ''
        },
        shouldUnregister: true 
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch (`${API_URL}/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    title: values.title,
                    description: values.description
                })
            })
            if (response.ok) {
                router.push(`/${params.id}`)
            } else {
                console.log(`error`)
            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        if (anime) {
            form.reset({
                title: anime.title,
                description: anime.description
            });
        }
    }, [anime])
    
    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-8 py-4">
            <FormField
            control={form.control} 
            name="title"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                    <Input placeholder="Anime Title" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                    <Input placeholder="Short Anime Description" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button type="submit">Submit</Button>
        </form>
        </Form>
    )
}