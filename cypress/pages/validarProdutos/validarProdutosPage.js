import { elements as ele } from "./elements";

class validarProdutosPage {

    validarProdutosComUsuarioPadrao() {
        cy.get(ele.userName).type(ele.userOne);
        cy.get(ele.password).type(ele.passwordForAllUsers);
        cy.get(ele.clickLogin).click();
        cy.get(ele.selecionarItem).eq('0').click();
        cy.get(ele.validarTituloItemUm).should('be.visible').contains('Sauce Labs Backpack');
        cy.get(ele.validarSubTituloItemUm).should('be.visible').contains('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.get(ele.validarValorItemUm).should('be.visible').contains('$29.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selecionarItem).eq('1').click();
        cy.get(ele.validarTituloItemDois).should('be.visible').contains('Sauce Labs Bike Light');
        cy.get(ele.validarSubTituloItemDois).should('be.visible').contains("A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.");
        cy.get(ele.validarValorItemDois).should('be.visible').contains('$9.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selecionarItem).eq('2').click();
        cy.get(ele.validarTituloItemTres).should('be.visible').contains('Sauce Labs Bolt T-Shirt');
        cy.get(ele.validarSubTituloItemTres).should('be.visible').contains('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
        cy.get(ele.validarValorItemTres).should('be.visible').contains('$15.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selecionarItem).eq('3').click();
        cy.get(ele.validarTituloItemQuatro).should('be.visible').contains('Sauce Labs Fleece Jacket');
        cy.get(ele.validarSubTituloItemQuatro).should('be.visible').contains("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
        cy.get(ele.validarValorItemQuatro).should('be.visible').contains('$49.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selecionarItem).eq('4').click();
        cy.get(ele.validarTituloItemCinco).should('be.visible').contains('Sauce Labs Onesie');
        cy.get(ele.validarSubTituloItemCinco).should('be.visible').contains("Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
        cy.get(ele.validarValorItemCinco).should('be.visible').contains('$7.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selecionarItem).eq('5').click();
        cy.get(ele.validarTituloItemSeis).should('be.visible').contains('Test.allTheThings() T-Shirt (Red)');
        cy.get(ele.validarSubTituloItemSeis).should('be.visible').contains('This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.');
        cy.get(ele.validarValorItemSeis).should('be.visible').contains('$15.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selectOptions).click();
        cy.get(ele.logout).click();
    }

    validarProdutosComDefeitoNoUsuario() {
        cy.get(ele.userName).type(ele.userThree);
        cy.get(ele.password).type(ele.passwordForAllUsers);
        cy.get(ele.clickLogin).click();
        cy.get(ele.selecionarItem).eq('0').click();
        cy.get(ele.validarTituloItemUm).should('be.visible').contains('Sauce Labs Fleece Jacket');
        cy.get(ele.validarSubTituloItemUm).should('be.visible').contains("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
        cy.get(ele.validarValorItemUm).should('be.visible').contains('$49.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selecionarItem).eq('1').click();
        cy.get(ele.validarTituloItemDois).should('be.visible').contains('Sauce Labs Bolt T-Shirt');
        cy.get(ele.validarSubTituloItemDois).should('be.visible').contains('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
        cy.get(ele.validarValorItemDois).should('be.visible').contains('$15.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selecionarItem).eq('2').click();
        cy.get(ele.validarTituloItemTres).should('be.visible').contains('Sauce Labs Onesie');
        cy.get(ele.validarSubTituloItemTres).should('be.visible').contains("Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
        cy.get(ele.validarValorItemTres).should('be.visible').contains('$7.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selecionarItem).eq('3').click();
        cy.get(ele.validarTituloItemQuatro).should('be.visible').contains('ITEM NOT FOUND');
        cy.get(ele.btnBack).click();
        cy.get(ele.selectOptions).click();
        cy.get(ele.logout).click();
    }

    validarProdutosComProblemaDePerformaceNoUsuario() {
        cy.get(ele.userName).type(ele.userOne);
        cy.get(ele.password).type(ele.passwordForAllUsers);
        cy.get(ele.clickLogin).click();
        cy.get(ele.selecionarItem).eq('0').click();
        cy.get(ele.validarTituloItemUm).should('be.visible').contains('Sauce Labs Backpack');
        cy.get(ele.validarSubTituloItemUm).should('be.visible').contains('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.get(ele.validarValorItemUm).should('be.visible').contains('$29.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selecionarItem).eq('1').click();
        cy.get(ele.validarTituloItemDois).should('be.visible').contains('Sauce Labs Bike Light');
        cy.get(ele.validarSubTituloItemDois).should('be.visible').contains("A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.");
        cy.get(ele.validarValorItemDois).should('be.visible').contains('$9.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selecionarItem).eq('2').click();
        cy.get(ele.validarTituloItemTres).should('be.visible').contains('Sauce Labs Bolt T-Shirt');
        cy.get(ele.validarSubTituloItemTres).should('be.visible').contains('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
        cy.get(ele.validarValorItemTres).should('be.visible').contains('$15.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selecionarItem).eq('3').click();
        cy.get(ele.validarTituloItemQuatro).should('be.visible').contains('Sauce Labs Fleece Jacket');
        cy.get(ele.validarSubTituloItemQuatro).should('be.visible').contains("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
        cy.get(ele.validarValorItemQuatro).should('be.visible').contains('$49.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selecionarItem).eq('4').click();
        cy.get(ele.validarTituloItemCinco).should('be.visible').contains('Sauce Labs Onesie');
        cy.get(ele.validarSubTituloItemCinco).should('be.visible').contains("Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
        cy.get(ele.validarValorItemCinco).should('be.visible').contains('$7.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selecionarItem).eq('5').click();
        cy.get(ele.validarTituloItemSeis).should('be.visible').contains('Test.allTheThings() T-Shirt (Red)');
        cy.get(ele.validarSubTituloItemSeis).should('be.visible').contains('This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.');
        cy.get(ele.validarValorItemSeis).should('be.visible').contains('$15.99');
        cy.get(ele.btnBack).click();
        cy.get(ele.selectOptions).click();
        cy.get(ele.logout).click();

    }

    validarProdutosAposLogin() {
        this.validarProdutosComUsuarioPadrao();
        this.validarProdutosComDefeitoNoUsuario();
        this.validarProdutosComProblemaDePerformaceNoUsuario();
    }
}

export default new validarProdutosPage();
