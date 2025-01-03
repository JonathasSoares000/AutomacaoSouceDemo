import { elements as elem } from "./elements";

class adicionarProdutoseRemoverProdutosPage {

    adicionarProdutoseRemoverProtudosComUsuarioPadrao() {
        cy.get(elem.userName).type(elem.userOne);
        cy.get(elem.password).type(elem.passwordForAllUsers);
        cy.get(elem.clickLogin).click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('0').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('1').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('2').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('3').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('4').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('5').click();
        cy.get(elem.clicarCarrinho).click();
        cy.get(elem.removerProdutosDoCarrinho).eq('5').click();
        cy.get(elem.removerProdutosDoCarrinho).eq('4').click();
        cy.get(elem.removerProdutosDoCarrinho).eq('3').click();
        cy.get(elem.removerProdutosDoCarrinho).eq('2').click();
        cy.get(elem.removerProdutosDoCarrinho).eq('1').click();
        cy.get(elem.removerProdutosDoCarrinho).eq('0').click();
        cy.get(elem.selectOptions).click();
        cy.get(elem.logout).click();
    }
    

    adicionarProdutoseRemoverProtudosDeUsuariosComDefeito() {
        cy.get(elem.userName).type(elem.userThree);
        cy.get(elem.password).type(elem.passwordForAllUsers);
        cy.get(elem.clickLogin).click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('0').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('1').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('2').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('3').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('4').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('5').click();
        cy.get(elem.clicarCarrinho).click();
        cy.get(elem.removerProdutosDoCarrinho).eq('2').click();
        cy.get(elem.removerProdutosDoCarrinho).eq('1').click();
        cy.get(elem.removerProdutosDoCarrinho).eq('0').click();
        cy.get(elem.selectOptions).click();
        cy.get(elem.logout).click();
    }

    adicionarProdutoseRemoverProtudosDeUsuarioComFalhaNaPerformace() {
        cy.get(elem.userName).type(elem.userFour);
        cy.get(elem.password).type(elem.passwordForAllUsers);
        cy.get(elem.clickLogin).click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('0').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('1').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('2').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('3').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('4').click();
        cy.get(elem.adiconarProdutosNoCarrinho).eq('5').click();
        cy.get(elem.clicarCarrinho).click();
        cy.get(elem.removerProdutosDoCarrinho).eq('5').click();
        cy.get(elem.removerProdutosDoCarrinho).eq('4').click();
        cy.get(elem.removerProdutosDoCarrinho).eq('3').click();
        cy.get(elem.removerProdutosDoCarrinho).eq('2').click();
        cy.get(elem.removerProdutosDoCarrinho).eq('1').click();
        cy.get(elem.removerProdutosDoCarrinho).eq('0').click();
        cy.get(elem.selectOptions).click();
        cy.get(elem.logout).click();
    }

    adicionarProdutoseRemoverProdutos() {
        this.adicionarProdutoseRemoverProtudosComUsuarioPadrao();
        this.adicionarProdutoseRemoverProtudosDeUsuariosComDefeito();
        this.adicionarProdutoseRemoverProtudosDeUsuarioComFalhaNaPerformace();
    }


}

export default new adicionarProdutoseRemoverProdutosPage();
