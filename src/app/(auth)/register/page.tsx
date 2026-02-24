'use client'
import { Form, Input, Checkbox, Button } from "@/app/components";
import Link from "next/link";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type Resolver } from "react-hook-form";

type RegisterForm = z.infer<typeof registerSchema>;

const registerSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Minimum 6 characters').max(16, 'Maximum 16 characters'),
    confirmPassword: z.string().min(6, 'Minimum 6 characters').max(16, 'Maximum 16 characters'),
    acceptTerms: z
        .union([z.boolean(), z.literal('true'), z.undefined()])
        .transform((v) => v === true || v === 'true')
        .default(false),
}).superRefine(({ acceptTerms, password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Passwords don't match",
            path: ['confirmPassword'],
        })
    }
    if (!acceptTerms) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'You must accept the terms and conditions',
            path: ['acceptTerms'],
        })
    }
});

const handleSignUp = (data: RegisterForm) => {
    console.log('Dados do formulário:', data);
}


export const Register = () => {
    const { register, handleSubmit, formState: { isValid, errors } } = useForm<RegisterForm>({
        mode: 'onChange',
        resolver: zodResolver(registerSchema) as Resolver<RegisterForm>,
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false,
        },
        reValidateMode: 'onChange',
    })

    return (
        <>
            <Form title="Create Account" onSubmit={handleSubmit(handleSignUp)}>
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
                <Input placeholder="Confirm Password" 
                    type="password" {...register('confirmPassword')} 
                    errormessage={errors.confirmPassword?.message} 
                    typeError={errors.confirmPassword && 'error'} 
                    required
                />
                <div className={'styles.row'}>
                    <Checkbox 
                    label="Accept all terms & Conditions" 
                    value="true" {...register('acceptTerms')}
                    errorMessage={errors.acceptTerms?.message} 
                    required
                    />
                </div>
                <Button text="Create Account" type="submit" disabled={!isValid} />
                <p>Already have account?{' '}<Link href="/login">Login</Link></p>
            </Form>
        </>
    )
}

export default Register;