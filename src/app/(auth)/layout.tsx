import { Footer, Topbar } from "@/components";
import style from './layout.module.scss'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className={style.container}>
                <Topbar />
                <div className={style.main}>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}