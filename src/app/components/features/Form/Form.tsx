import styles from './form.module.scss'

type FormProps = {
    title: string,
    children: React.ReactNode,
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void,
}
export const Form = ({ title, children, onSubmit }: FormProps) => {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <h3>{title}</h3>
            {children}
        </form>
    )
}