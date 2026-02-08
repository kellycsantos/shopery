import styles from './form.module.scss'
export const Form = ({title,children}) => {
    return(
        <form className={styles.form}>
            <h3>{title}</h3>
            {children}
        </form>
    )
}