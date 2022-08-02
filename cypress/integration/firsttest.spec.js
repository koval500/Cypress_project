/// <reference types="Cypress" />

import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transfers } from "../support/pages/transfer"
import { basePage } from "../support/pages/basePage"


it('Replenishment of Ukraine mobile phone number', () => {
    basePage.open('https://next.privat24.ua/mobile?lang=en')
    mobileReplenishment.typePhoneNumber('509629979')
    basePage.typeAmount('1')
    basePage.typeDebitCardData('4552331448138217', '0124', '231')
    mobileReplenishment.sumbitPayment()
    cy.wait(3000)
    mobileReplenishment.checkDebitCard('4552 **** **** 8217')
    mobileReplenishment.checkDebitAmountAndComission('1')
    mobileReplenishment.checkReceiverAmount('1')
    mobileReplenishment.checkComissionAmount('2')


})

it('Money transfer between foreign cards', () => {
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
    basePage.typeDebitCardData('4552331448138217', '0124', '231')
    cy.wait(2000)
    transfers.typeDebitNameAndSurname('Shayne', 'McConnell')
    transfers.typeReceiverCard('5309233034765085')
    cy.wait(2000)
    transfers.typeReceiverNameAndSurname('Juliana', 'Jansen')
    basePage.typeAmount('400')
    transfers.typeComment('Test comment')
    cy.wait(2000)
    transfers.sumbitPayment2()
    transfers.checkDebitAndReceiverCards('4552 3314 4813 8217', '5309 2330 3476 5085')
    transfers.checkDebitAmountAndTotalAmount('400 UAH', '517.26')
    transfers.checkDebitComission('117.26 UAH')
    transfers.checkTotalCurrency('UAH')
    transfers.checkComment('Test comment')
    transfers.checkReceiverAmountAndComission('400 UAH', '0 UAH')
})


//Example HTTP GET request

it('Example sending the GET request', () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
            console.log(response);
        })
})

// Example HTTP POST request with expect verification of response
it('Example sending the POST request', () => {

    const requestBody = {
        action: "info",
        amount: 50,
        card: "4552331448138217",
        cardCvv: "123",
        cardExp: "0526",
        currency: "UAH",
        phone: "+380509629979",
        xref: "fc340fa9d515a9d49820cd7e2806cd6f",
        _: 1659117362449
    };


    const headersData = {
        cookie: "_ga=GA1.2.1236654061.1656003593; pubkey=2e52537c52fc29bc652704496624075a; _gid=GA1.2.150838733.1659117154; lfp=6/23/2022, 8:00:04 PM; pa=1659117165150.17380.6107718178157775next.privat24.ua0.009103381329444327+1; fp=16"
    }

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData,
    })
        .then((response) => {
            expect(response).to.have.property('status').to.equal(200)
            expect(response.body).to.have.property('status').to.equal('success')
            expect(response.body.data).to.have.property('amount').to.equal('50.0')

            console.log(response);
        })
})



// Example HTTP POST request with should verification of response
it.only('Example sending the POST request', () => {

    const requestBody = {
        action: "info",
        amount: 50,
        card: "4552331448138217",
        cardCvv: "123",
        cardExp: "0526",
        currency: "UAH",
        phone: "+380509629979",
        xref: "fc340fa9d515a9d49820cd7e2806cd6f",
        _: 1659117362449
    };


    const headersData = {
        cookie: "_ga=GA1.2.1236654061.1656003593; pubkey=2e52537c52fc29bc652704496624075a; _gid=GA1.2.150838733.1659117154; lfp=6/23/2022, 8:00:04 PM; pa=1659117165150.17380.6107718178157775next.privat24.ua0.009103381329444327+1; fp=16"
    }

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData,
    }).its('body').should('contain', {
        status: 'success'
    }).its('data').should('contain', {
        status: 'ok'
    })
})
    