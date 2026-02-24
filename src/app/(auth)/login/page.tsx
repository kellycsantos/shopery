'use client'
import { Form } from "@/app/components/features/Form";
import { Button, Checkbox, Input } from "@/app/components";
import Link from "next/link";

import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type Resolver } from "react-hook-form";

const loginSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(8, 'Mínimo 8 caracteres').max(16, 'Máximo 16 caracteres'),
    remember: z
        .union([z.boolean(), z.literal('true'), z.undefined()])
        .transform((v) => v === true || v === 'true')
        .default(false),
}).superRefine(({ remember }, ctx) => {
    if (!remember) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Você deve lembrar de mim',
        })
    }
});

const onValid = (data: z.infer<typeof loginSchema>) => {
    console.log('Dados do formulário:', data);
}

const onInvalid = (errors: unknown) => {
    console.log('Erros de validação:', errors);
}


export const Login = () => {
    type LoginForm = z.infer<typeof loginSchema>
    const { register, handleSubmit } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema) as Resolver<LoginForm>,
        defaultValues: {
            email: '',
            password: '',
            remember: false,
        },
    })


    return (
        <>
            <main>
                <Form title="Login" onSubmit={handleSubmit(onValid, onInvalid)}>
                    <Input placeholder="Email" type="email" {...register('email')} />
                    <Input placeholder="Password" type="password" {...register('password')} />
                    <div >
                        <Checkbox label="Remember me" value="true" {...register('remember')} />
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