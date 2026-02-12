import style from './extra.module.scss'

import { Truck, Headset, ShieldCheck, Package } from 'lucide-react'

export const Extras = ({isOverlap = false}) => {
    const features = [
        { title: 'Free Shipping', subtitle: 'Free shipping with discount', svg: <Truck /> },
        { title: 'Great Support 24/7', subtitle: 'Instant access to Contact', svg: <Headset /> },
        { title: '100% Sucure Payment', subtitle: 'We ensure your money is save', svg: <ShieldCheck /> },
        { title: 'Money-Back Guarantee', subtitle: '30 days money-back guarantee', svg: <Package /> },
    ]
    return (
        <section className={`${style.extra_container} ${isOverlap && style.overlap }`}>
            {
                features.map((feature, index) => (
                    <article key={index}>
                        <span className={style.icon_container}>
                            {feature.svg}

                        </span>
                        <h6>{feature.title}</h6>
                        <small>{feature.subtitle}</small>
                    </article>
                ))
            }
        </section>
    )
}