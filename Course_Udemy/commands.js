export class FirstName {
   typeFirstName(typeName){
   cy.get('#fname')
   .type(typeName)
   }
}

export const FirstNameNew = new FirstName()

export class LastName {
   typeLastName(typeLName){
   cy.get('#lname')
   .type(typeLName)
   }
}

export const LastNameNew = new LastName()

export class SelectDay {
   SelectDay(day){
 cy.get('[class="Select__control css-0"]')
   .contains('День').click()
   .get('[aria-live="polite"]')
   .scrollIntoView()
   .get('#aria-selection-event')
   .get('[data-test-id="select-value:27"]')
   .click({force: true})
   }
}

   export const SelectBDay = new SelectDay()

export class SelectMonth {
   SelectMonth(month){
   cy.get('[class="Select__control css-0"]')
   .contains('Месяц').click()
   .get('[aria-live="polite"]')
   .get('#aria-selection-event')
   .get('[data-test-id="select-value:1"]')
   .click({force: true})
   }
}

export const SelectBMonth = new SelectMonth()


export class SelectYear {
   SelectYear(year){
cy.get('[class="Select__control css-0"]')
   .contains('Год').click()
   .get('[aria-live="polite"]')
   .get('#aria-selection-event') 
   .get('[data-test-id="select-value:2001"]')
   .click({force: true})
   }
}

export const SelectBYear = new SelectYear()

function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

var arr = ["Мужской", "Женский"]
var arrRand = arrayRandElement(arr)

export class SelectRSex {
   SelectRSex(sex){
cy.get('[class="base-0-2-39 control-0-2-47"]')
   .contains(arrRand).click()
   }
}

export const SelectRandSex = new SelectRSex()


export class TypeEmail {
   TypeEmail(mail){
cy.get('#aaa__input')
   .type(mail)
   }
}

export const TypeNewMail = new TypeEmail()

export class TypePass {
   TypePassword(password){
cy.get('#password')
   .type(password)
   }
}

export const TypeNewPassword = new TypePass()

export class TypeRepPass {
   TypeRepPassword(reppassword){
cy.get('#repeatPassword')
   .type(reppassword)
   }
}

export const TypeRepeatPass = new TypeRepPass()

export class ClickMail {
   ClickMail(resmail){
cy.get('a').contains('Указать резервную почту')
   .click()
   }
}

export const ClickResMail = new ClickMail()

export class TypeResMail {
   TypeResMail(tresmail){
   cy.get('#extra-email')
   .type(tresmail)
   }
}

export const TypeRMail = new TypeResMail()
  
export class Click {
   Click(click){
   cy.get('button').contains('Создать')
   .click({force: true})
   }
}

export const ClickButton = new Click()


import 'cypress-file-upload';
