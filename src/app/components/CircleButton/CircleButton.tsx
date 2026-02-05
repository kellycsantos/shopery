import styles from './circlebutton.module.scss'
import { ArrowLeft, ArrowRight, X, Loader, Eye, Minus, Plus, Handbag } from 'lucide-react'

type CircleButtonProps = {
    size?: 'sm' | 'md' | 'lg',
    variable?: 'primary' | 'secondary' | 'dark',
    icon?: 'arrowLeft' | 'arrowRight' | 'close' |'loader'|'eye'| 'minus'|'plus'|'bag'
    svg? : React.ReactNode,
    disabled?: boolean,
    onClick?: () => void
}

const icons = {
    arrowLeft : <ArrowLeft/>,
    arrowRight: <ArrowRight/>,
    close: <X/>,
    loader: <Loader/>,
    eye: <Eye/>,
    minus: <Minus/>,
    plus: <Plus/>,
    bag: <Handbag/>
}
export const CircleButton = ({ size = 'md', variable = 'primary', icon, svg ,onClick, disabled }: CircleButtonProps) => {
    return (
        <button data-testid="circle-button" className={`${styles.circleButton} ${styles[size]} ${styles[variable]}`} onClick={onClick} disabled={disabled}>
        { icon ? icons[icon] : svg }
        </button>
    )
}
