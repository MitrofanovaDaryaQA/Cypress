///reference types="Cypress"

it('Positive test for mail-form before Page Object', ()=>{
cy.visit('https://account.mail.ru/signup?from=main&rf=auth.mail.ru&app_id_mytracker=58519')
.viewport(1800, 900)
   .get('#fname')
   .type('Дарья')
   .should('have.value', 'Дарья')
   .and('be.visible')

   .get('#lname')
   .type('Митрофанова')
   .should('have.value', 'Митрофанова')
   .and('be.visible')

   .get('[class="Select__control css-0"]')
   .contains('День').click()
   .get('[aria-live="polite"]')
   .scrollIntoView()
   .should('be.visible')
   .get('#aria-selection-event')
   .get('[data-test-id="select-value:27"]')
   .click({force: true})
  
   .get('[class="Select__control css-0"]')
   .contains('Месяц').click()
   .get('[aria-live="polite"]')
   .get('#aria-selection-event')
   .get('[data-test-id="select-value:1"]')
   .click({force: true})   
   
   .get('[class="Select__control css-0"]')
   .contains('Год').click()
   .get('[aria-live="polite"]')
   .get('#aria-selection-event') 
   .get('[data-test-id="select-value:2001"]')
   .click({force: true})    
   

   .get('[class="base-0-2-39 control-0-2-47"]')
   .contains('Женский').click()
   .should('be.visible')
  
   
   .get('#aaa__input')
   .type('dasha.qa_' + Date.now())

   .get('#password')
   .type('password'+ Date.now())

   .get('#repeatPassword')
   .type('password'+ Date.now())

   .get('a').contains('Указать резервную почту')
   .click()

   .get('#extra-email')
   .type('mitrofanova.darya.qa@inbox.ru')
   .should('have.value', 'mitrofanova.darya.qa@inbox.ru')
   .and('be.visible')

   .get('button').contains('Создать')
   .click({force: true})

})