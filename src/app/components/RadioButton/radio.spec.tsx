import { screen, render } from '@testing-library/react';
import { it, expect, describe, vi } from 'vitest'
import { useState } from 'react';
import userEvent from '@testing-library/user-event';

import { Radio } from './Radio';

const mockOption = [
    { title: 'genero', value: 'feminino', label: 'Feminino' },
    { title: 'genero', value: 'masculino', label: 'Masculino' },
    { title: 'genero', value: 'prefiro nao informar', label: 'Prefiro não responder' },
]

const onChangeMock = vi.fn()

describe('Radio button', () => {
    it('Deve renderizar corretamente', () => {
        render(<Radio options={mockOption} onChange={onChangeMock} />)
        expect(screen.getAllByTestId(/radio/)).toBeTruthy()
    })

    it('deve exibir as opções corretamente', () => {
        const onChangeMock = vi.fn()

        render(<Radio options={mockOption} onChange={onChangeMock} />)

        expect(screen.getByLabelText('Feminino')).toBeInTheDocument()
        expect(screen.getByLabelText('Masculino')).toBeInTheDocument()
        expect(screen.getByLabelText('Prefiro não responder')).toBeInTheDocument()
    })

    it('deve chamar onChange ao clicar em uma opção', async () => {
    const user = userEvent.setup()
    const onChangeMock = vi.fn()

    render(
      <Radio options={mockOption} onChange={onChangeMock} />
    )

    await user.click(screen.getByLabelText('Feminino'))

    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith('feminino')
  })

})
