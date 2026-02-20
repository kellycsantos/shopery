import styles from './tag.module.scss'

export type TagProps = {
    value: string,
    type: 'discount' | 'new' | 'bestSale' | 'soldOut',
    pill?: boolean,
}

const textCapitalize = (tagText: string) => {
    return tagText
        ?.split(' ')
        .map((word) => (word.toLowerCase() === 'of' ? 'of' : word.charAt(0).toUpperCase() + word.slice(1)))
        .join(' ');
}

export const Tag = ({ value, type, pill = false }: TagProps) => {
    return (
        <div data-testid="tag" className={`${styles.tag} ${styles[type]} ${pill && styles.pill}`}>
            {textCapitalize(value)}
        </div>
    )
}


