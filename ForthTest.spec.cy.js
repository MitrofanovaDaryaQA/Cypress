///reference types="Cypress"

 it('TYPE', ()=>{
 cy.visit('https://educon2.tyuiu.ru/login/index.php');
 cy.get('#username') 
 .type('митрофанова_д_н')
});


 it('FOCUS', ()=>{
 cy.visit('https://educon2.tyuiu.ru/login/index.php');
 cy.get('#username') 
 .focus()
});

it('BLUR', ()=>{
 cy.visit('https://educon2.tyuiu.ru/login/index.php');
 cy.get('#username') 
 .focus()
 .blur()
});

it('CLEAR', ()=>{
 cy.visit('https://educon2.tyuiu.ru/login/index.php');
 cy.get('#username') 
 .focus()
 .type('митрофанова_д_н')
 .wait(2000)
 .clear()
});

it('SUBMIT', ()=>{
 cy.visit('https://educon2.tyuiu.ru/login/index.php');
 cy.get('form[method="post"]') 
 .submit()
});

it('CLICK', ()=>{
 cy.visit('https://educon2.tyuiu.ru/login/index.php');
 cy.contains('button', 'Вход') 
 .click()
});
 
 it('RIGHTCLICK', ()=>{
 cy.visit('https://example.cypress.io/commands/actions');
 cy.contains('Right click to edit') 
 .rightclick()
});

 it('DBLCLICK', ()=>{
 cy.visit('https://example.cypress.io/commands/actions');
 cy.contains('Double click to edit') 
 .dblclick()
});


 it('CHECK', ()=>{
 cy.visit('https://educon2.tyuiu.ru/login/index.php');
 cy.get('#rememberusername') 
 .check()
});


 it('CHECK', ()=>{
 cy.visit('https://example.cypress.io/commands/actions');
 cy.get('#optionsRadios2') 
 .check()
});

 it('UNCHECK', ()=>{
 cy.visit('https://example.cypress.io/commands/actions');
 cy.get('input[value="checkbox1"]') 
  .check()
  .wait(2000)
  .uncheck()
});

 it('SELECT', ()=>{
 cy.visit('https://example.cypress.io/commands/actions');
 cy.get('.action-select').select('oranges')
});


 it('scrollTo', ()=>{
    cy.viewport(1800, 900);
 cy.visit('https://stepik.org/catalog')
   .scrollTo(0, 10000)
 });


