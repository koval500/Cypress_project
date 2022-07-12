/// <reference types="Cypress" />


it('type', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="phone-number"]')
    .type(509629979)
} )


it('focus', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="amount"]')
    .focus()
} )

it('blur', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="amount"]')
    .focus()
    .blur()
} )

it('clear', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="amount"]')
    .type(999)
    .wait(2000)
    .clear()
} )

it('clear', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('form[method="post"]')
    .submit()
} )

it('click', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-value="manual"]')
    .click()
} )

it('rightclick', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    .get('[class="rightclick-action-div"]')
    .rightclick()
} )

it('dblclick', ()=>{
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html')
    .contains('My Card')
    .dblclick()
} )

it('uncheck', ()=>{
    cy.visit('https://iterius.com/home/modal/login')
    .get('[class="Login_main__1LU2l"]').find('[name="email"]')
    .type('i.kovalenko@smissltd.com')
    .get('[class="Login_main__1LU2l"]').find('[name="password"]')
    .type('i.kovalenko123')
    .get('[class="jss4"]')
    .check()
    .get('[class="Login_main__1LU2l"]').find('[data-test="button"]')
    .click()
} )

it('uncheck', ()=>{
    cy.visit('https://en.privatbank.ua/')
    .get('#switch-input')
    .check({force: true})
    .wait(2000)
    .uncheck({force: true})
} )

it('select', ()=>{
    cy.visit('https://twitter.com/i/flow/signup?lang=en')
    .get('[class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"]').contains('Sign up with phone or email')
    .click()
    .get('#SELECTOR_1')
    .select('January')
    .get('#SELECTOR_2')
    .select('4')
    .get('#SELECTOR_3')
    .select('2001')
} )

it('scrollIntoView', ()=>{
    cy.visit('https://next.privat24.ua/?lang=en')
    .get('[data-qa-node="lang"]')
    .wait(3000)
    .scrollIntoView()
})

it.only('trigger', ()=>{
    cy.visit('https://next.privat24.ua/?lang=en')
    .contains('Services')
    .trigger('mouseover')
  
})
