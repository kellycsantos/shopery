'use client'
import style from './card.module.scss'
import Image from 'next/image'

import { ReviewStars, Tag, CircleButton, TagProps } from '@/components'
import { useRouter } from 'next/navigation'


type CardProps = {
    rounded?: boolean,
    tags?: TagProps[],
    link?: string | undefined,
    img: string,
    name: string,
    value: number,
    valueWithDiscount: number,
    discount: boolean,
    rating: number
}
export const Card = ({ rounded = false, tags, link, img, name, value, valueWithDiscount, discount, rating }: CardProps) => {
    const router = useRouter()
    return (
        <div className={`${style.card} ${rounded && style.rounded}`} onClick={() => router.push(link ? link : '')}>
            {
                tags &&
                <span className={style.tag_container}>
                    {tags.map((tag, index) => (
                        <Tag value={tag?.value} type={tag.type} key={index} />
                    ))}
                </span>
            }
            <Image src={img} alt={name} width={600} height={600} />
            <div className={style.info_card}>
                <span>
                    <p>{name}</p>
                    <p> {discount && `$${valueWithDiscount}`} {' '}<span className={discount ? style.originalValue : ''}>${value}</span></p>
                    <ReviewStars stars={5} rating={rating} size={19} />
                </span>

                <span className={style.btn_bag}>
                    <CircleButton icon='bag' variable='secondary' />
                </span>
            </div>
        </div>
    )
}