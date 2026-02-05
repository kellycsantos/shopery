import styles from './inputtext.module.scss'
import { AlertTriangle, AlertCircle, Check } from 'lucide-react'

type InputProps = {
    placeholder: string,
    errormessage?: string,
    typeError?: 'error' | 'success' | 'warning' | null,
}

const size = 24 as const

const getIcon = {
  error: <AlertTriangle color='#EA4B48' height={size} width={size}/>,
  success: <Check color='#00B207' height={size} width={size}/>,
  warning: <AlertCircle color='#FF8A00' height={size} width={size}/>,
}

export const Input = ({ placeholder, errormessage, typeError = null }: InputProps) => {
    return (
        <div data-testid="input" className={styles.input_container}>
            <div className={styles.input}>
                <input type="email" placeholder={placeholder} />
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