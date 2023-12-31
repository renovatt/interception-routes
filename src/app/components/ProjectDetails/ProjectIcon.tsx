'use client'

import { RiCloseFill } from 'react-icons/ri'
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const ProjectIcon = () => {
    const router = useRouter()

    const backPage = useCallback(() => {
        router.back()
    }, [router])

    return (
        <RiCloseFill
            onClick={backPage}
            className='absolute -top-2.5 -right-4 w-8 h-8 rounded-full bg-backgroundPrimary transition-all ease-in text-white hover:text-textPrimary hover:bg-white cursor-pointer' />
    )
}