import styles from './circlebutton.module.scss'
import { ShoppingCart } from 'lucide-react'

type CircleButtonProps = {
    size?: 'sm' | 'md' | 'lg',
    variable?: 'primary' | 'secondary' | 'dark',
    icon?: string,
    svg? : React.ReactNode,
    disabled?: boolean,
    onClick?: () => void
}

const hasIcon = (icon: React.ReactNode | string) => {

}
export const CircleButton = ({ size = 'md', variable = 'primary', icon, svg ,onClick, disabled }: CircleButtonProps) => {
    return (
        <button data-testid="circle-button" className={`${styles.circleButton} ${styles[size]} ${styles[variable]}`} onClick={onClick} disabled={disabled}>
            {icon || svg}
        </button>
    )
}

/*
    1- Criar um array de icones pré carregados
    2- Verficar se a prop passada é de um icone ou svg
    3- se for icon, verificar o icon no array
    4- do contrario renderizar o svg passado

*/