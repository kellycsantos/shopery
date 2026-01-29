import {it, describe, expect, vi, afterEach} from 'vitest'
import {render,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

const textBtn = "Click me";
const onClick = vi.fn()

describe('Button', () => {
    const user = userEvent.setup()
    it('Deve exibir o botão com a props text correta', () => {
        render(<Button text={textBtn}/>)
        expect(screen.getByTestId('button')).toBeTruthy();
        expect(screen.findByText(textBtn)).toBeTruthy()
    })

    it('Deve ser clicavel para o usuario', async () => {
        render(<Button text="Somar" onClick={onClick}/>)
        const button = screen.getByTestId('button')
        await user.click(button)
        expect(onClick).toHaveBeenCalledTimes(1)
    })
})