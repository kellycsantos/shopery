import { Form } from "@/app/components/features/Form";
import { Button, Checkbox, Input } from "@/app/components";
import Link from "next/link";

import styles from './page.module.scss'

export const Login = () => {
    return (
        <>
            <main className={styles.main}>
                <Form title="Login">
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <div className={styles.row}>
                        <Checkbox label="Remember me" value="true" /> <Link href="#">Forget Password</Link>
                    </div>
                    <Button text="Login" />
                    <p>Don't have account?
                        <Link href="/register">Register</Link></p>
                </Form>
            </main>
        </>
    )
}

export default Login;