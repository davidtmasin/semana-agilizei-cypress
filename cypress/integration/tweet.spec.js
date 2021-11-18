/// <reference types="cypress">

/*
  1. O que está sendo testado? Criar um Tweet no Twitter Clone
  2. Sob que circunstâncias, condições? Acessar a caixa de tweets e digitar um Tweet
  3. Qual o resultado esperado? O tweet deverá aparece no feed
*/

describe('Twitter Clone - Tweets', () => {
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
  it('Criando um Tweet no Twitter Clone', () => {
    cy.visit('/')
    cy.get('.new-tweet > textarea').type('Para minha carreira, quero poder estar cada dia mais preparado e por dentro das tecnologia de automatização de testes que está bombando no mercado.')
    cy.get('button[class="sc-fzplWN pDAkO"]').click()
  })
})
