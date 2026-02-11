import style from './banner.module.scss';
import Image from 'next/image';

import bannerImg from '@/assets/banner_image.png'

import { Button } from '@/components'

export const Banner = () => {
    return (
        <div className={style.banner}>
            <div className={style.limit}>

                <Image src={bannerImg} alt='fruit banner' />
                <section className={style.info}>
                    <p></p>
                    <h1>Fresh & Healthy <br />
                        Organic Food
                    </h1>
                    <p>Free shipping on all your order. we deliver, you enjoy</p>
                    <Button text='Shop now' size='lg' />
                </section>
            </div>
        </div>
    )
}