/// <reference types="Cypress" />

it.only('Replenishment of Ukraine mobile phone number', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="phone-number"]')
    .type('509629979')
    .get('[data-qa-node="amount"]')
    .type('1')
    .get('[data-qa-node="numberdebitSource"]')
    .type('4552331448138217')
    .get('[data-qa-node="expiredebitSource"]')
    .type('0124')
    .get(('[data-qa-node="cvvdebitSource"]'))
    .type('231')
    .get('[data-qa-node="submit"]')
    .click()
    .wait(3000)
    .get('[data-qa-node="card"]')
    .should('have.text','4552 **** **** 8217')
    .get('[data-qa-node="amount"]')
    .eq(1)
    .should('contains.text','1')
    .get('[data-qa-node="commission"]')
    .eq(1)
    .should('contains.text','2')



})