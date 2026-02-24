'use client'
import { forwardRef } from 'react'
import styles from './checkbox.module.scss'
import { Check } from 'lucide-react'

type CheckboxProps = {
    label: string,
    value?: string,
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'type'>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, value = 'on', ...rest }, ref) => {
        const id = rest.name ?? value
        return (
            <label data-testid="checkbox" htmlFor={id} className={styles.checkbox_container}>
                <span className={styles.box}>
                    <Check color="#FFFFFF" strokeWidth={3} />
                </span>
                <input
                    ref={ref}
                    type="checkbox"
                    id={id}
                    value={value}
                    {...rest}
                />
                {label}
            </label>
        )
    }
)
Checkbox.displayName = 'Checkbox'