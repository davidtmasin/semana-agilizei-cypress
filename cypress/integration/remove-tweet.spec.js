/// <reference types="cypress">

/*
  1. O que está sendo testado? Apagar um Tweet no Twitter Clone
  2. Sob que circunstâncias, condições? Clicar no ícone da lixeira do tweet que foi postado
  3. Qual o resultado esperado? O tweet deverá sumir do feed
*/
describe('Twitter Clone - Excluir Tweet', () => {
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

    cy.login()
  })

  it('Excluindo tweet do feed', () => {
    cy.visit('/')
    cy.get(
      ':nth-child(1) > .tweet-info > .tweet-stats > :nth-child(4) > span > .sc-AxiKw'
    ).click()
  })
})
