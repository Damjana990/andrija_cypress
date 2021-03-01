const locators = require("../fixtures/locators.json")
const data = require("../fixtures/data.json")

describe("Login test", () => {

    beforeEach (() => {
        cy.visit ('/')
        cy.get("a[href='/login']").click()
    })

    //it('Visit gallery page', () => {
      //  cy.visit('/')
        //cy.wait(10000)
    //})
    //it ('Click on login button', () => {
    //    cy.get('.nav-link').eq(1).click()
    //})
    
    it ('Click on login button 2', () => {
        cy.get("a[href='/login']").click()
    })

    it ('Login with valid credential', () => {
        cy.get(locators.login.email).type(data.loginRegister.email)
        cy.get(locators.login.password).type(data.loginRegister.password)
        cy.get(locators.login.submit).click()
        //cy.url().should('eq', 'https://gallery-app.vivifyideas.com/')
        cy.get(locators.login.email).should('not.exist')
        cy.get(locators.login.password).should('not.exist')
        cy.get(locators.login.submit).should('not.exist')
    })

    // it ('Logout', () => {
    //     cy.get("a[role= 'button ']").click()
    // })

}) 