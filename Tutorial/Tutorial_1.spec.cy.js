describe('Регистрация', () => {
  it('зарегистрироваться', () => {
    cy.visit('http://localhost:3000/apps/tesla.html');
  });
});

describe('Регистрация', () => {
  it('Регистрация', () => {
    cy.visit('http://localhost:3000/apps/tesla.html');
    cy.get('[placeholder="Фамилия"]').type('Митрофанова');
    cy.get('input[name=first_name]').type('Дарья');
    cy.get('[placeholder="Email"]').eq('0').type('mitrofanova.darya.qa@inbox.ru');
    cy.get('[placeholder="Коротко о Вас"]').type('Я люблю cypress');
    cy.get('[placeholder="Пароль"]').eq('0').type('cypress');
    cy.get('[data-18n-en="Continue"]').contains('Продолжить').click();
  });
});
