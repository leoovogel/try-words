import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { App } from '../App';
import { checkCurrentTry } from '../helpers/checkTry';

describe('Teste o componente <App.js />', () => {
  const wordTest = ['T', 'E', 'S', 'T', 'E'];

  it('É possível digitar uma palavra com 5 letras', () => {
    render(<App />);

    wordTest.forEach((letter, index) => {
      userEvent.type(screen.getAllByRole('textbox')[index], letter);
    });

    userEvent.click(screen.getByRole('button', { name: /enter/i }));

    wordTest.forEach((letter, index) => {
      expect(screen.getAllByRole('textbox')[index]).toHaveValue(letter);
    });

    expect(screen.getAllByRole('textbox')[5]).toHaveValue('');
  });

  it('As dicas são mostradas corretamente', async () => {
    render(<App />);

    const teste01 = checkCurrentTry('TESTE', 'TESTE'.split(''));
    expect(teste01.newTry.every(({ state }) => state === 'right')).toBe(true);

    const teste02 = checkCurrentTry('TESTE', 'AMIGO'.split(''));
    expect(teste02.newTry.every(({ state }) => state === 'wrong')).toBe(true);

    const teste03 = checkCurrentTry('TESTE', 'FESTA'.split(''));
    expect(teste03.newTry.map(({ state }) => state)).toEqual(['wrong', 'right', 'right', 'right', 'wrong']);

    const teste04 = checkCurrentTry('FESTA', 'AMIGO'.split(''));
    expect(teste04.newTry.map(({ state }) => state)).toEqual(['displaced', 'wrong', 'wrong', 'wrong', 'wrong']);
  });
});
