import adicionarProdutoseRemoverProdutosPage from '../pages/adicionarProdutoseRemoverProdutos/adicionarProdutoseRemoverProdutosPage';
import RealizarLoginComSucessoPage from '../pages/realizarLoginComSuceso/realizarLoginComSucessoPage';
import ValidarProdutosPage from '../pages/validarProdutos/validarProdutosPage';
import finalizarFluxoDeCompraPage from '../pages/finalizarCompra/finalizarFluxoDeCompraPage';

describe('Sauce Demo', () => {

  beforeEach(() => {
   
    cy.visit('/');
  });

  it('Login', () => {
    RealizarLoginComSucessoPage.realizarLogin();
  });

  it('Validar Produtos', () => {
    ValidarProdutosPage.validarProdutosAposLogin();
  });
  
  it('Adicionando e Removendo Produtos', () => {
    adicionarProdutoseRemoverProdutosPage.adicionarProdutoseRemoverProdutos();
  });

  it.only('Finalizar Fluxo De Compra', () => {
    finalizarFluxoDeCompraPage.finalizarFluxoDeCompra();
  });

});