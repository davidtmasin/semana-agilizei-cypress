/// <reference types="cypress">

/*
  1. O que está sendo testado? Twitter Clone - Login
  2. Sob que circunstâncias, condições? Ao autenticar com credenciais válidas
  3. Qual o resultado esperado? Deve ser redirecionado para o feed

  Ao autenticar com credenciais inválidas, uma mensagem de erro irá aparecer e permanecerá na tela de login
*/

describe('Twitter Clone - Login', () => {
  /*
    Hooks
    => Pode ser executado antes de todos ou cada testes -> Vem do mocha -> beforeEach
    => Pode ser executado depois de todos ou cada testes -> Vem do mocha ->afterEach
    
    cy.intercept
    1. RouteMatcher - mapeamento, filtro da rota que queremos
    2. RouteHandler (opcional) - controlar a rota que vai retornar (mock)
    Request URL: https://res.cloudinary.com/douy56nkf/image/upload/v1588127894/twitter-build/bvxmlgckusmrwyivsnzr.svg
    Request Method: GET
 */
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        hostname: 'res.cloudinary.com'
      },
      {
        statusCode: 200,
        fixture: 'selo-delicia'
      }
    ).as('cloudinary')
  })

  it('Ao autenticar com credenciais válidas, deverá ocorrer o redirecionamento para o feed do Twitter Clone', () => {
    cy.login()

    cy.visit('/')

    cy.get('nav ul li').should('be.visible').and('have.length', 6)
  })
})
