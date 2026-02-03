import { screen, render } from "@testing-library/react";
import { expect, describe, it, vi } from "vitest";
import { Input } from "./InputText";

describe('Input text', ()=> {
    it('Deve ser renderizado', () => {
        render(<Input placeholder="Nome"/>)
        expect(screen.getByTestId('input')).toBeVisible()
    })
    it('Deve exibir mensagem de erro generica', async () => {
        render(<Input placeholder="Senha" typeError='error'/>)
        const errorMessage = await screen.findByText('Check your informations')

        expect(errorMessage).toBeInTheDocument()
    })
    
    it('Deve exibir mensagem de erro', () => {
        render(<Input placeholder="Senha" errormessage="Senha incorreta" typeError='error'/>)
        expect(screen.findByText('Senha incorreta')).toBeTruthy()
    })
})