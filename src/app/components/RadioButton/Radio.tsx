'use client'
import styles from './radio.module.scss'

type Options = {
    title: string,
    value: string,
    label: string,
}

type RadioProps = {
    options: Options[],
    onChange: any
}
export const Radio = ({ options, onChange }: RadioProps) => {
    return (
        <>
        {
            options.map((option, index) => (
                <div data-testid="radio" className={styles.input_container} key={index}>
                    <label className={styles.radio} >
                        <>
                            <span className={styles.circle}></span>
                            <input className={styles.element} type="radio" id={option.value} name={option.title} value={option.value} onChange={(e) => onChange(e.target.value)}/>

                        </>

                    </label>
                    <label className={styles.visible_label} htmlFor={option.value}>{option.label}</label>
                </div>
                ))
            }

        </>
    )
}