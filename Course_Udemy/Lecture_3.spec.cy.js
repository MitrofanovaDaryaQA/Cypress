///reference types="Cypress"

 it('SHOULD', ()=>{
 cy.visit('https://educon2.tyuiu.ru/login/index.php');
 cy.get('#username')
  .type('митрофанова_д_н')
  .should('have.value', 'митрофанова_д_н')
  .and('be.visible')
 });

 it('SHOULD', ()=>{
 cy.visit('https://educon2.tyuiu.ru/login/index.php');
 cy.get('[name="password"]')
  .type('password')
  .should('have.value', 'password')
  .and('be.visible')
 }); 

 
 it('EXPECT', ()=>{
 cy.visit('https://educon2.tyuiu.ru/login/index.php');
 cy.get('#username')
  .type('митрофанова_д_н').then( input => {
   expect(input ).to.have.value('митрофанова_д_н');
  })
 });

 it('EXPECT', ()=>{
 cy.visit('https://educon2.tyuiu.ru/login/index.php');
 cy.get('[name="password"]')
  .type('password').then( input => {
   expect(input ).to.have.value('password');
  })
 }); 

  it('CLICK', ()=>{
   cy.viewport(1800, 900);
     cy.visit('https://docs.cypress.io/guides/overview/why-cypress');
     cy.get('button').contains('Getting Started').click()
     .should('be.visible')
   });
 
    it('SHOULD+TRIGGER', ()=>{
   cy.viewport(1800, 900);
     cy.visit('https://www.lamoda.ru/?utm_source=lap&utm_medium=ap&utm_campaign=partner_287&utm_term=85be3a9644cb1cbcbcc1182e2df01c2d&utm_content=1420660&no_overlay=1');
     cy.contains('a','Новинки')
     .trigger('mouseover')
     .should('be.visible')
   });

    it('Check is correct attr in button', ()=>{
   cy.viewport(1800, 900);
     cy.visit("https://educon2.tyuiu.ru/login/index.php");
     cy.contains("button", "Вход")
       .should('have.attr', 'type')
       .and('match', /submit/)
   });

    it.only('Check is correct URL', ()=>{
   cy.viewport(1800, 900);
     cy.visit("https://educon2.tyuiu.ru/login/index.php");
     cy.url()
             .should('eq', 'https://educon2.tyuiu.ru/login/index.php')
   });
