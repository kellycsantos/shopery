'use client'
import style from './card.module.scss'
import Image from 'next/image'

import greenApple from '@/assets/fruit/green_apple.png'

import { ReviewStars, Tag , CircleButton, TagProps} from '@/components'
import { useRouter } from 'next/navigation'


type CardProps = {
    rounded?: boolean,
    tags?: TagProps[],
    link?: string | undefined
}
export const Card = ({ rounded = false, tags, link }: CardProps) => {
    const router = useRouter()
    return (
        <div className={`${style.card} ${rounded && style.rounded}`} onClick={() => router.push(link ? link: '') }>
            {
                tags &&
                <span className={style.tag_container}>
                {tags.map((tag, index) => (
                    <Tag text={tag?.text} type={tag.type} key={index}/>
                ))}
                </span>
            }
            <Image src={greenApple} alt='green apple' />
            <div className={style.info_card}>
                <span>
                    <p>Green Apple</p>
                    <p>$14.99<span>$20.99</span></p>
                    <ReviewStars stars={5} rating={4} size={19} />
                </span>

                <span className={style.btn_bag}>
                    <CircleButton icon='bag' variable='secondary' />
                </span>
            </div>
        </div>
    )
}