import { elements as el } from "./elements";

class realizarLoginComSucessoPage {

    loginComSucesso() {
        cy.get(el.userName).type(el.userOne);
        cy.get(el.password).type(el.passwordForAllUsers);
        cy.get(el.clickLogin).click();
        cy.get(el.selectOptions).click();
        cy.get(el.logout).click();
    }
    
    loginComUsuarioBloqueado() {
        cy.get(el.userName).type(el.userTwo);
        cy.get(el.password).type(el.passwordForAllUsers);
        cy.get(el.clickLogin).click();
        cy.get(el.validarMensagemDeErro).should('be.visible').contains('Epic sadface: Sorry, this user has been locked out.');
        cy.get(el.userName).clear();
        cy.get(el.password).clear();
    }

    loginDeUsuarioComDefeito() {
        cy.get(el.userName).type(el.userThree);
        cy.get(el.password).type(el.passwordForAllUsers);
        cy.get(el.clickLogin).click();
        cy.get(el.selectOptions).click();
        cy.get(el.logout).click();
    }

    loginDeUsuarioComFalhaNaPerformace() {
        cy.get(el.userName).type(el.userFour);
        cy.get(el.password).type(el.passwordForAllUsers);
        cy.get(el.clickLogin).click();
        cy.get(el.selectOptions).click();
        cy.get(el.logout).click();
    }

    realizarLogin() {
        this.loginComSucesso();
        this.loginComUsuarioBloqueado();
        this.loginDeUsuarioComDefeito();
        this.loginDeUsuarioComFalhaNaPerformace();
    }


}

export default new realizarLoginComSucessoPage();
