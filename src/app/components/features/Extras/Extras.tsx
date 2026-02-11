import { Headset } from "lucide-react"
import style from './extra.module.scss'
export const Extras = () => {
    return(
        <section className={style.extra_container}>
            <article>
                <Headset/>
                <h6>Free Shipping</h6>
                <small>Free shipping with discount</small>
            </article>
        </section>
    )
}