'use client'
import { Form } from "@/app/components/features/Form";
import { Button, Checkbox, Input } from "@/app/components";
import Link from "next/link";

import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(16),
});

const onValid = (data: z.infer<typeof loginSchema>) => {
    console.log('Dados do formulário:', data);
}

const onInvalid = (errors: unknown) => {
    console.log('Erros de validação:', errors);
}


export const Login = () => {
    const { register, handleSubmit } = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })


    return (
        <>
            <main>
                <Form title="Login" onSubmit={handleSubmit(onValid, onInvalid)}>
                    <Input placeholder="Email" type="email" {...register('email')} />
                    <Input placeholder="Password" type="password" {...register('password')} />
                    <div >
                        <Checkbox label="Remember me" value="true" />
                    </div>
                    <Button type="submit" text="Login" />
                    <p>Don't have account?
                        <Link href="/register">Register</Link></p>
                </Form>
            </main>
        </>
    )
}

export default Login;