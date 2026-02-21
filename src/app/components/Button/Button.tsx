import styles from './button.module.scss'

type ButtonProps = {
    text: string,
    variable?: 'primary' | 'secondary' | 'outline',
    size?: 'sm' | 'md' | 'lg' | 'full'
    onClick?: () => void,
    disabled?: boolean
}

export const Button = ({text,variable = "primary", size = "sm",disabled=false,onClick}: ButtonProps) => {
    const primary = 'primary'

    return(
        <button data-testid="button" className={`${styles.button} ${styles[variable]} ${styles[size]}`} onClick={onClick} disabled={disabled}>{text}</button>
    )
}