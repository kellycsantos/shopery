import styles from './topbar.module.scss'

export const Topbar = () => {
    return (
        <nav className={styles.topbar}>
            <div className={styles.limit}>
                <div>Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
                <div>En - USD | Sign In / Sign Up</div>
            </div>

        </nav>
    )
}