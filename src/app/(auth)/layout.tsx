import { Topbar } from "../components/Topbar";
import styles from './layout.module.scss'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Topbar/>
        <p>Rotas de login</p>
        <main className={styles.main}>
            {children}
            </main>
        </>
    );
}