'use client'
import styles from './checkbox.module.scss'
import { Check } from 'lucide-react'

type CheckboxProps = {
    label: string,
    value: string,
    onClick?: (e:any) => void,
    onChange?: (e: any) => void,
}
export const Checkbox = ({label, value, onClick, onChange}: CheckboxProps) => {
    return (
        <>
            <label data-testid='checkbox' htmlFor={value} className={styles.checkbox_container}>
                <span className={styles.box}>
                    <Check color='#FFFFFF' strokeWidth={3}/>
                </span>
                <input type="checkbox" id={value} value={value} onClick={(e) => onClick?.(e)} onChange={(e) => onChange?.(e.target.checked)} />
                {label}
            </label>
        </>
    )
}