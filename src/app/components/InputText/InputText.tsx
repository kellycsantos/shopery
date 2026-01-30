import styles from './inputtext.module.scss'
import { AlertTriangle, AlertCircle, Check } from 'lucide-react'

type InputProps = {
    placeholder: string,
    errormessage?: string,
    typeError?: 'error' | 'success' | 'warning' | null,
}

const getIcon = (error: string) => {
    if (error) {
        if (error === 'error') {
            return <AlertTriangle color='#EA4B48' height={24} width={24}/>
        }
        if (error === 'success') {
            return <Check color='#00B207' height={24} width={24}/>
        }
        if (error === 'warning') {
            return <AlertCircle color='#FF8A00' height={24} width={24}/>
        }
    }
}

export const Input = ({ placeholder, errormessage, typeError = null }: InputProps) => {
    return (
        <div data-testid="input" className={styles.input_container}>
            <div className={styles.input}>
                <input type="email" placeholder={placeholder} />
                {
                    typeError && getIcon(typeError)
                }
            </div>
            {
                typeError && typeError != 'success' &&
                <small className={`${styles.alertmsg} ${styles[typeError]}`}>{errormessage ?? 'Check your informations'}</small>
            }
        </div>
    )
}