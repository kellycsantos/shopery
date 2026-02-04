import { render, screen } from '@testing-library/react'
import { expect, describe, it } from 'vitest'
import { ReviewStars } from './Review'

const ratingLow = 0.9
const ratingMedium = 2.1
const ratingHigh = 5
const ratingRandom = Math.floor(Math.random() * 5) + 1

describe('ReviewStars', () => {
    it('Deve exibit o componente corretamente', () => {
        render(<ReviewStars stars={5} size={30} rating={ratingMedium} />)
        expect(screen.getByTestId(`star-${Math.floor(ratingMedium)}`)).toBeInTheDocument()
    })
    it('Deve exibir o componente corretamente com a nota minima', () => {
        render(<ReviewStars stars={5} size={30} rating={ratingLow} />)
        expect(screen.getByTestId(`star-${Math.round(ratingLow)}`)).toBeInTheDocument()
    })
    it('Deve exibir o componente corretamente com a nota maxima', () => {
        render(<ReviewStars stars={5} size={30} rating={ratingHigh} />)
        expect(screen.getByTestId(`star-${ratingHigh}`)).toBeInTheDocument()
    })
    it('Deve exibir o componente corretamente com a nota aleatoria', () => {
        render(<ReviewStars stars={5} size={30} rating={ratingRandom} />)
        expect(screen.getByTestId(`star-${Math.round(ratingRandom)}`)).toBeInTheDocument()
    })
})

