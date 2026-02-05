import {render, screen} from '@testing-library/react';
import {it, describe, expect} from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => { 
    it('Deve renderizar o componente corretamente', () => {
        render(<Checkbox label='I agree' value='true'/>)
        expect(screen.getByTestId('checkbox')).toBeInTheDocument()
    })
 })