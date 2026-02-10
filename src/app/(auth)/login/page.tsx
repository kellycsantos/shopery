import { Form } from "@/app/components/features/Form";
import { Button, Checkbox, Input } from "@/app/components";
import Link from "next/link";

export const Login = () => {
    return (
        <>
            <main>
                <Form title="Login">
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <div >
                        <Checkbox label="Remember me" value="true" />
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