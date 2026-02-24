import styles from './inputtext.module.scss'
import { AlertTriangle, AlertCircle, Check } from 'lucide-react'
import { forwardRef } from 'react'

type InputProps = {
    placeholder: string,
    errormessage?: string,
    typeError?: 'error' | 'success' | 'warning' | null,
    icon?: React.ReactNode,
    type?: string,
} & React.ComponentPropsWithoutRef<'input'>

const size = 24 as const

const getIcon = {
  error: <AlertTriangle color='#EA4B48' height={size} width={size}/>,
  success: <Check color='#00B207' height={size} width={size}/>,
  warning: <AlertCircle color='#FF8A00' height={size} width={size}/>,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ placeholder, errormessage, typeError = null, icon, type = 'text', ...rest }, ref) => {
        return (
            <div data-testid="input" className={styles.input_container}>
                <div className={styles.input}>
                    {icon}
                    <input ref={ref} type={type} placeholder={placeholder} {...rest} />
                {
                    typeError && getIcon[typeError]
                }
            </div>
            {
                typeError && typeError != 'success' &&
                <small className={`${styles.alertmsg} ${styles[typeError]}`}>{errormessage ?? 'Check your informations'}</small>
            }
        </div>
        )
    }
)
Input.displayName = 'Input'