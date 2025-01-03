import { elements as eleme } from "./elements";

class finalizarFluxoDeCompraPage {

    finalizarFluxoDeCompraComUsuarioPadrao() {
        cy.get(eleme.userName).type(eleme.userOne);
        cy.get(eleme.password).type(eleme.passwordForAllUsers);
        cy.get(eleme.clickLogin).click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('0').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('1').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('2').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('3').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('4').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('5').click();
        cy.get(eleme.clicarCarrinho).click();
        cy.get(eleme.validarTituloItemUm).should('be.visible').contains('Sauce Labs Backpack');
        cy.get(eleme.validarTituloItemDois).should('be.visible').contains('Sauce Labs Bike Light');
        cy.get(eleme.validarTituloItemTres).should('be.visible').contains('Sauce Labs Bolt T-Shirt');
        cy.get(eleme.validarTituloItemQuatro).should('be.visible').contains('Sauce Labs Fleece Jacket');
        cy.get(eleme.validarTituloItemCinco).should('be.visible').contains('Sauce Labs Onesie');
        cy.get(eleme.validarTituloItemSeis).should('be.visible').contains('Test.allTheThings() T-Shirt (Red)');
        cy.get(eleme.btnCheckout).click();
        cy.get(eleme.firstNameElement).type(eleme.firstName);
        cy.get(eleme.lastNameElement).type(eleme.lastName);
        cy.get(eleme.postalCodeElement).type(eleme.postalCode);
        cy.get(eleme.btnContinue).click();
        cy.get(eleme.valorDosItens).should('be.visible').contains('Item total: $129.94');
        cy.get(eleme.valorDaTaxa).should('be.visible').contains('Tax: $10.40');
        cy.get(eleme.valorTotal).should('be.visible').contains('Total: $140.34');
        cy.get(eleme.btnFinish).click();
        cy.get(eleme.validarConfimarcaoDoPedido).should('be.visible').contains('THANK YOU FOR YOUR ORDER');
        cy.get(eleme.validarSubTituloDaConirmacaoDoPedido).should('be.visible').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        cy.get(eleme.selectOptions).click();
        cy.get(eleme.logout).click();

    }
    

    finalizarFluxoDeCompraDeComDefeitoNoUsuario() {
        cy.get(eleme.userName).type(eleme.userThree);
        cy.get(eleme.password).type(eleme.passwordForAllUsers);
        cy.get(eleme.clickLogin).click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('0').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('1').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('2').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('3').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('4').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('5').click();
        cy.get(eleme.clicarCarrinho).click();
        cy.get(eleme.validarTituloItemUm).should('be.visible').contains('Sauce Labs Backpack');
        cy.get(eleme.validarTituloItemDois).should('be.visible').contains('Sauce Labs Bike Light');
        cy.get(eleme.validarTituloItemCinco).should('be.visible').contains('Sauce Labs Onesie');
        cy.get(eleme.btnCheckout).click();
        cy.get(eleme.firstNameElement).type(eleme.firstName);
        cy.get(eleme.lastNameElement).type(eleme.lastName);
        cy.get(eleme.postalCodeElement).type(eleme.postalCode);
        cy.get(eleme.btnContinue).click();
        cy.get(eleme.valorDosItens).should('be.visible').contains('Item total: $95.93999999999998');
        cy.get(eleme.valorDaTaxa).should('be.visible').contains('Tax: $7.68');
        cy.get(eleme.valorTotal).should('be.visible').contains('Total: $103.62');
        cy.get(eleme.btnFinish).click();
        cy.get(eleme.validarConfimarcaoDoPedido).should('be.visible').contains('THANK YOU FOR YOUR ORDER');
        cy.get(eleme.validarSubTituloDaConirmacaoDoPedido).should('be.visible').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        cy.get(eleme.selectOptions).click();
        cy.get(eleme.logout).click();
        
    }

    finalizarFluxoDeCompraComFalhaNaPerformace() {
        cy.get(eleme.userName).type(eleme.userFour);
        cy.get(eleme.password).type(eleme.passwordForAllUsers);
        cy.get(eleme.clickLogin).click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('0').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('1').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('2').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('3').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('4').click();
        cy.get(eleme.adiconarProdutosNoCarrinho).eq('5').click();
        cy.get(eleme.clicarCarrinho).click();
        cy.get(eleme.validarTituloItemTres).should('be.visible').contains('Sauce Labs Bolt T-Shirt');
        cy.get(eleme.validarTituloItemQuatro).should('be.visible').contains('Sauce Labs Fleece Jacket');
        cy.get(eleme.validarTituloItemSeis).should('be.visible').contains('Test.allTheThings() T-Shirt (Red)');
        cy.get(eleme.btnCheckout).click();
        cy.get(eleme.firstNameElement).type(eleme.firstName);
        cy.get(eleme.lastNameElement).type(eleme.lastName);
        cy.get(eleme.postalCodeElement).type(eleme.postalCode);
        cy.get(eleme.btnContinue).click();
        cy.get(eleme.valorDosItens).should('be.visible').contains('Item total: $81.97');
        cy.get(eleme.valorDaTaxa).should('be.visible').contains('Tax: $6.56');
        cy.get(eleme.valorTotal).should('be.visible').contains('Total: $88.53');
        cy.get(eleme.btnFinish).click();
        cy.get(eleme.validarConfimarcaoDoPedido).should('be.visible').contains('THANK YOU FOR YOUR ORDER');
        cy.get(eleme.validarSubTituloDaConirmacaoDoPedido).should('be.visible').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }

    finalizarFluxoDeCompra() {
        this.finalizarFluxoDeCompraComUsuarioPadrao();
        this.finalizarFluxoDeCompraDeComDefeitoNoUsuario();
        this.finalizarFluxoDeCompraComFalhaNaPerformace();
    }
}

export default new finalizarFluxoDeCompraPage();
