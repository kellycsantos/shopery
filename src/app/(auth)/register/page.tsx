'use client'
import { Form, Input, Checkbox, Button } from "@/app/components";
import Link from "next/link";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type Resolver } from "react-hook-form";

type RegisterForm = z.infer<typeof registerSchema>;

const registerSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(8, 'Mínimo 8 caracteres').max(16, 'Máximo 16 caracteres'),
    confirmPassword: z.string().min(8, 'Mínimo 8 caracteres').max(16, 'Máximo 16 caracteres'),
    acceptTerms: z
    .union([z.boolean(), z.literal('true'), z.undefined()])
    .transform((v) => v === true || v === 'true')
    .default(false),
}).superRefine(({ acceptTerms, password, confirmPassword }, ctx) => {
    if (acceptTerms && password !== confirmPassword) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'As senhas não coincidem',
        })
    }
    if (!acceptTerms) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Você deve aceitar os termos e condições',
        })
    }
});

const onValid = (data: RegisterForm) => {
    console.log('Dados do formulário:', data);
}

const onInvalid = (errors: unknown) => {
    console.log('Erros de validação:', errors);
}

export const Register = () => {
    const { register, handleSubmit } = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema) as Resolver<RegisterForm>,
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false,
        },
    })
    return (
        <>
            <Form title="Create Account" onSubmit={handleSubmit(onValid, onInvalid)}>
                <Input placeholder="Email" {...register('email')} />
                <Input placeholder="Password" {...register('password')} />
                <Input placeholder="Confirm Password" {...register('confirmPassword')} />
                <div className={'styles.row'}>
                    <Checkbox label="Accept all terms & Conditions" value="true" {...register('acceptTerms')} />
                </div> 
                <Button text="Login" type="submit"/>
                <p>Already have account?
                    <Link href="/login">Login</Link></p>
            </Form>
        </>
    )
}

export default Register;