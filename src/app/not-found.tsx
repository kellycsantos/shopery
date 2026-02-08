'use client'
import notFoundImg from '@/assets/not-found-img.svg'
import Image from 'next/image'

import style from './not-found.module.scss'
import { Button, Searchbar } from './components'

import { useRouter } from 'next/navigation'

export const notFound = () => {
    const router = useRouter()
    return (
        <>
            <Searchbar />
            <main className={style.not_found_page}>
                <Image src={notFoundImg} alt="page not found" />
                <h2>Oops! page not found</h2>
                <p>Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
                <Button text='Back to Home' onClick={() => router.push('/')} />
            </main>
        </>
    )
}

export default notFound;