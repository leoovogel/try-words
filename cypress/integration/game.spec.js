/* eslint-disable cypress/no-unnecessary-waiting */
describe('Teste o comportamento do game', () => {
  beforeEach(() => {
    localStorage.setItem('solution', JSON.stringify('TESTE'));

    cy.visit('http://localhost:3000/');
    cy.wait(1);

    cy.get('.ReactModal__Content').find('button').click();
  });

  it('É possível digitar uma palavra com 5 letras', () => {
    'OUTRO'.split('').forEach((letter, index) => {
      cy.get('input').eq(index).type(letter);
    });
    cy.get('input').eq(4).type('{enter}');

    'OUTRO'.split('').forEach((letter, index) => {
      cy.get('input').eq(index).should('be.disabled');
    });
  });

  it('Deve ter o comportamento esperado caso o Player ganhe', () => {
    'TESTE'.split('').forEach((letter, index) => {
      cy.get('input').eq(index).type(letter);
    });
    cy.get('input').eq(4).type('{enter}');

    cy.get('.ReactModal__Content').find('img').should('have.attr', 'alt', 'win');
  });

  it('Deve ter o comportamento esperado caso o Player perca', () => {
    new Array(6).fill('').forEach((input, line) => {
      'OUTRO'.split('').forEach((letter, index) => {
        cy.get(`.${line}-${index}`).type(letter);
      });
      cy.get(`.${line}-4`).type('{enter}');
    });

    cy.get('.ReactModal__Content').find('img').should('have.attr', 'alt', 'lose');
  });
});

describe('As dicas são mostradas corretamente', () => {
  function checkTips(word, tips) {
    word.split('').forEach((letter, index) => {
      cy.get('input').eq(index).type(letter);
    });
    cy.get('input').eq(4).type('{enter}');

    tips.forEach((tip, index) => {
      cy.get('input').eq(index).should('have.css', 'background-color', tip);
    });
  }

  beforeEach(() => {
    localStorage.setItem('solution', JSON.stringify('TESTE'));

    cy.visit('http://localhost:3000/');
    cy.wait(1);

    cy.get('.ReactModal__Content').find('button').click();
  });

  it('Duas letras certas e três inexistentes', () => {
    checkTips('TEMPO', ['rgb(47, 193, 140)', 'rgb(47, 193, 140)', 'rgb(225, 229, 235)', 'rgb(225, 229, 235)', 'rgb(225, 229, 235)']);
  });

  it('Todas erradas', () => {
    checkTips('CAIXA', ['rgb(225, 229, 235)', 'rgb(225, 229, 235)', 'rgb(225, 229, 235)', 'rgb(225, 229, 235)', 'rgb(225, 229, 235)']);
  });

  it('Três palavras na posição errada e duas inexistentes', () => {
    checkTips('ESTOU', ['rgb(250, 204, 21)', 'rgb(250, 204, 21)', 'rgb(250, 204, 21)', 'rgb(225, 229, 235)', 'rgb(225, 229, 235)']);
  });
});
