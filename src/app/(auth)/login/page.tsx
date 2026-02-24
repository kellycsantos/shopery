'use client'
import { Form } from "@/app/components/features/Form";
import { Button, Checkbox, Input } from "@/app/components";
import Link from "next/link";

import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type Resolver } from "react-hook-form";

const loginSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Minimum 6 characters').max(16, 'Maximum 16 characters'),
    remember: z
        .union([z.boolean(), z.literal('true'), z.undefined()])
        .transform((v) => v === true || v === 'true')
        .default(false),
})

const handleSignIn = (data: z.infer<typeof loginSchema>) => {
    console.log('Dados do formulário:', data);
}

export const Login = () => {
    type LoginForm = z.infer<typeof loginSchema>
    const { register, handleSubmit, formState: { isValid, errors } } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema) as Resolver<LoginForm>,
        defaultValues: {
            email: '',
            password: '',
            remember: false,
        },
        mode: 'onChange',
        reValidateMode: 'onChange',
    })


    return (
        <>
            <main>
                <Form title="Login" onSubmit={handleSubmit(handleSignIn)}>
                    <Input placeholder="Email"
                        type="email" {...register('email')}
                        errormessage={errors.email?.message}
                        typeError={errors.email && 'error'}
                        required
                    />
                    <Input placeholder="Password"
                        type="password" {...register('password')}
                        errormessage={errors.password?.message}
                        typeError={errors.password && 'error'}
                        required
                    />
                    <div >
                        <Checkbox label="Remember me"
                            {...register('remember')} />
                    </div>
                    <Button type="submit" text="Login" disabled={!isValid} />
                    <p>
                        Don't have account?{' '}
                        <Link href="/register">Register</Link>
                    </p>
                </Form>
            </main>
        </>
    )
}

export default Login;