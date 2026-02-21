import { CircleButton } from "@/components"
import style from './quantity.module.scss'

export const Quantity = () => {
    return(
        <div className={style.quantity}>
            <CircleButton icon='minus' variable="secondary"/>
            5
            <CircleButton icon='plus' variable="secondary"/>
        </div>
    )
}