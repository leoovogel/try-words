import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { App } from '../App';

// Testes:
// - [ ] Testa se as dicas são mostradas corretamente;
// - [ ] Deve ser possível escrever uma palavra;
// - [ ] Deve ter o comportamento esperado caso o Player ganhe;
// - [ ] Deve ter o comportamento esperado caso o Player perca;

describe('Teste o componente <App.js />', () => {
  it('É possível digitar uma palavra com 5 letras', () => {
    render(<App />);

    const inputs = screen.getAllByRole('textbox');

    userEvent.type(inputs[0], 'T');
    screen.logTestingPlaygroundURL();

    expect(inputs[0]).toHaveValue('T');
  });
});
