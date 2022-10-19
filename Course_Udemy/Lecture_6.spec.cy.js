///reference types="Cypress"
import { FirstNameNew, LastNameNew, SelectBDay, SelectBMonth, SelectBYear , SelectRandSex, TypeNewMail, TypeNewPassword, TypeRepeatPass, ClickResMail, TypeRMail, ClickButton } from "../support/commands.js"


it('Positive test for mail-form after Page Object', ()=>{
cy.visit('https://account.mail.ru/signup?from=main&rf=auth.mail.ru&app_id_mytracker=58519')
.viewport(1800, 900)

FirstNameNew.typeFirstName('Дарья')
   
LastNameNew.typeLastName('Митрофанова')
   
SelectBDay.SelectDay()
  
SelectBMonth.SelectMonth()

SelectBYear.SelectYear()

SelectRandSex.SelectRSex()

TypeNewMail.TypeEmail('dasha.qa_' + Date.now())

TypeNewPassword.TypePassword('password'+ Date.now())

TypeRepeatPass.TypeRepPassword('password'+ Date.now())

ClickResMail.ClickMail()

TypeRMail.TypeResMail('mitrofanova.darya.qa@inbox.ru')

ClickButton.Click()
}) 
