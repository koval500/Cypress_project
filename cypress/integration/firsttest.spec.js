/// <reference types="Cypress" />

// it('By ID', ()=> {
//    cy.visit("https://facebook.com/") 
//    cy.get('#email')
// })

// it('By Class', ()=> {
//     cy.visit("https://docs.cypress.io/api/table-of-contents") 
//     cy.get('.DocSearch')
//  })

//  it('By Tag', ()=> {
//     cy.visit("https://docs.cypress.io/api/table-of-contents") 
//     cy.get('nav')
//  })

//  it('By Tag value', ()=> {
//     cy.visit("https://www.facebook.com/") 
//     cy.get('[name="pass"]')
//  })

//  it('By Different Tag', ()=> {
//     cy.visit("https://facebook.com/") 
//     cy.get('[data-testid="open-registration-form-button"][rel="async"]')
//  })

//  it('By Different Types', ()=> {
//     cy.visit("https://docs.cypress.io/api/table-of-contents") 
//     cy.get('img[src="/_nuxt/img/cypress-logo.a2e1292.svg"][alt="Cypress Docs Logo"]')
//  })

//  it('By Contatins Name', ()=> {
//     cy.visit('https://next.privat24.ua/') 
//     cy.get('*[class^="card"]')
//  })

//  it.only('By Tag value', ()=> {
//     cy.visit("https://iterius.com/home") 
//     cy.get('button[class="Button_button__3COUz Button_primary__Uwo1K"][data-test="button"]')
//  })


 it('Using Get with Find and Eq', ()=> {
    cy.visit('https://next.privat24.ua/deposit/open') 
    cy.get('tbody').find('td').find('div').find('button').eq('0')
 })


 it.only('Using Get with Find and Eq', ()=> {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress#What-you-ll-learn') 
    cy.get('div').find('nav').find('ul').find('li').find('a').eq('100')
 })
