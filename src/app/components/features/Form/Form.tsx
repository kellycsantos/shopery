import styles from './form.module.scss'

type FormProps = {
    title: string,
    children: React.ReactNode

}
export const Form = ({title,children} : FormProps) => {
    return(
        <form className={styles.form}>
            <h3>{title}</h3>
            {children}
        </form>
    )
}