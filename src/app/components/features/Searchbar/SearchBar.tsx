'use client'
import style from './searchbar.module.scss'
import Link from 'next/link'

import Image from 'next/image'

import { Button, Input } from '@/components'

import { UserRound, Handbag, Search, MenuIcon, X } from 'lucide-react'
import shoperyIcon from '@/assets/icons/shopery-icon.svg'

import { useState } from 'react'

export const Searchbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <nav className={style.nav}>
            <div className={style.limit}>
                <h4 className={style.logo_container}>
                    <Image src={shoperyIcon} width={32} height={32} alt={'Icon'} />
                    Ecobazar
                </h4>
                <span className={style.search_container}>
                    <Input placeholder='search' icon={<Search />} data-inputsearch />
                    <Button text='Search' />
                </span>

                <span className={style.btn_menu} onClick={() => setToggleMenu(!toggleMenu)}>
                    {toggleMenu ? <X/> : <MenuIcon/>}
                </span>

                <div className={`${style.cart_profile} ${toggleMenu && style.open_menu}`}>

                    <span className={style.profile}>
                        <Link href={'/login'}> <UserRound /></Link>
                    </span>

                    <span className={style.cart}>
                        <Handbag />
                        <span className={style.items_cart}>23</span>
                    </span>
                    <span className={style.details}>
                        <p>Shopping cart:</p>
                        <p>$57.00</p>
                    </span>
                </div>
            </div>
        </nav>
    )
}