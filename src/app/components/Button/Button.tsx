import styles from './button.module.scss'

type ButtonProps = {
    text: string,
    variable?: 'primary' | 'secondary' | 'outline',
    size?: 'sm' | 'md' | 'lg',
    type?: 'button' | 'submit' | 'reset',
    onClick?: () => void,
    disabled?: boolean,
}

export const Button = ({ text, variable = "primary", size = "sm", type = "button", disabled = false, onClick }: ButtonProps) => {
    return (
        <button type={type} data-testid="button" className={`${styles.button} ${styles[variable]} ${styles[size]}`} onClick={onClick} disabled={disabled}>{text}</button>
    )
}