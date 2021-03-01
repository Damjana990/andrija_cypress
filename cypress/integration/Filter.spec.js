const locators = require("../fixtures/locators.json")
const data = require("../fixtures/data.json")
const error = require("../fixtures/error.json")

describe ('Create Gallery test', () => {

    before (() => {
        cy.visit ('/')
    })
    // it ('Login', () => {
    //     cy.get(locators.login.email).type(data.loginRegister.email)
    //     cy.get(locators.login.password).type(data.loginRegister.password)
    //     cy.get(locators.login.submit).click()
    // })

    it ('Filter all Find with specific characters', () => {
        cy.get(locators.all_galleries_filter.all_filter).type('Pics')
        cy.get(locators.all_galleries_filter.filter_button).click()
        cy.get(error.filterError.filterError).should("contain", "pics")
    })
})