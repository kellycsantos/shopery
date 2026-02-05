import { screen, render, cleanup } from "@testing-library/react";
import { expect, describe, it, vi, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";

import { CircleButton } from "./CircleButton";
import { Heart, X } from "lucide-react";

const onClick = vi.fn()

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})

describe('Button', () => {
    const user = userEvent.setup()

    it('Deve renderizar corretamente ex', () =>{
        render(<CircleButton size="sm" svg={<Heart/>} variable="primary" />)
        expect(screen.getByTestId('circle-button')).toBeInTheDocument()
    })

    it('Deve ser chamada ao receber clique', async () => {
        render(<CircleButton size="md" variable="dark" svg={<X/>} onClick={onClick}/>)
        const circleButton = screen.getByTestId('circle-button')
        await user.click(circleButton)
        expect(onClick).toHaveBeenCalled()
    })
    
    it('Função não deve ser chamada ao receber clique', async () => {
        render(<CircleButton size="md" variable="dark" svg={<X/>} onClick={onClick} disabled/>)
        const circleButton = screen.getByTestId('circle-button')
        await user.click(circleButton)
        expect(onClick).not.toHaveBeenCalled()
    })


})
