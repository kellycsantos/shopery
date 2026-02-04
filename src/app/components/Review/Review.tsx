'use client'
import { Star } from 'lucide-react'
import styles from './review.module.scss'

type ReviewProps = {
    stars: number,
    size?: number,
    rating?: number,
}

export const ReviewStars = ({stars, size, rating = 0}: ReviewProps) => {

    return (
        <div className={styles.reviewStars}>
            {[...Array(stars)].map((_, index) => (
                <Star className={`${styles.star} ${rating >= index + 1 && styles.active}`} 
                size={size} color='transparent' 
                strokeWidth={2} key={index} 
                />
            ))}
        </div>
    )
}