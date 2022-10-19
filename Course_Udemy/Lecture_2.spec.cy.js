///reference types="Cypress"

 it("By text",()=> {
cy.visit("https://educon2.tyuiu.ru/login/index.php");

cy.contains("Вход на платформу");
 });

  it("By tag and text",()=> {
cy.visit("https://educon2.tyuiu.ru/login/index.php");

cy.contains("button", "Вход");
 });

  it("By TEXT & text",()=> {
cy.visit("https://educon2.tyuiu.ru/login/index.php");

cy.contains("ВХОД НА ПЛАТФОРМУ", {matchCase: false});
 });

 it.only("By get+contains",()=> {
cy.visit("https://educon2.tyuiu.ru/login/index.php");

cy.get("a").contains("Забыли логин или пароль?");
 });
