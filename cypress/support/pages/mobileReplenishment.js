export class MobilePhoneReplenishment {
    typePhoneNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }


    sumbitPayment() {
        cy.get('[data-qa-node="submit"]')
            .click()
    }

    checkDebitCard(debitCard) {
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }

    checkDebitAmountAndComission(debitAmount) {
        cy.get('[data-qa-node="amount"]')
            .eq(1)
            .should('contains.text', debitAmount)
    }

    checkReceiverAmount(receiverAmount) {
        cy.get('[data-qa-node="amount"]')
            .eq(1)
            .should('contains.text', receiverAmount)
    }

    checkComissionAmount(comissionAmount) {
        cy.get('[data-qa-node="commission"]')
        .eq(1)
        .should('contains.text', comissionAmount)
    }
}

export const mobileReplenishment = new MobilePhoneReplenishment()