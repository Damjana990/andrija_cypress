const locators = require("../../fixtures/locators.json")

describe ('Create Gallery test', () => {

    before (() => {
        cy.visit ('/')
    })

    it ('Find one specific gallery', () => {
        //cy.get(locators.all_galleries_filter.all_filter).type('')
        cy.get(locators.all_galleries_filter.filter_button).click()
    })
})