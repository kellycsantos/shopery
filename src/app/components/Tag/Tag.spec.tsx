import { it, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tag } from './Tag'

describe('Tag', () => {
    it('Deve exibir o componente corretamente', () => {
        render(<Tag value="Tag" type="discount" />)
        expect(screen.getByTestId('tag')).toBeInTheDocument()
    })
    it('Deve exibir o texto corretamente', () => {
        render(<Tag value="New" type="new" />)
        expect(screen.getByText('New')).toBeInTheDocument()
    })
    it('Deve exibir o tipo Discount corretamente', () => {
        render(<Tag value="Tag" type="discount" />)
        expect(screen.getByTestId('tag')).toHaveClass(/discount/)
    })
    it('Deve exibir o tipo New corretamente', () => {
        render(<Tag value="Tag" type="new" />)
        expect(screen.getByTestId('tag')).toHaveClass(/new/)
    })
    it('Deve exibir o tipo Best Sale corretamente', () => {
        render(<Tag value="Tag" type="bestSale" />)
        expect(screen.getByTestId('tag')).toHaveClass(/bestSale/)
    })
    it('Deve exibir o tipo Sold Out corretamente', () => {
        render(<Tag value="Tag" type="soldOut" />)
        expect(screen.getByTestId('tag')).toHaveClass(/soldOut/)
    })
    it('Deve exibir o tipo pilula corretamente', () => {
        render(<Tag value="Tag" type="discount" pill />)
        expect(screen.getByTestId('tag')).toHaveClass(/pill/)
    })
})