import { Form, Input, Checkbox, Button } from "@/app/components";
import Link from "next/link";

export const Register = () => {
    return (
        <>
            <Form title="Create Account">
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <div className={'styles.row'}>
                    <Checkbox label="Accept all terms & Conditions" value="true" />
                </div>
                <Button text="Login" />
                <p>Already have account?
                    <Link href="/login">Login</Link></p>
            </Form>
        </>
    )
}

export default Register;