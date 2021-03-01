const locators = require("../../fixtures/locators.json")
const data = require("../fixtures/data.json")
const error = require("../fixtures/error.json")

describe ('Create Gallery test', () => {

    before (() => {
        cy.visit ('/')
    })

    it ('Filter all Find with specific characters', () => {
        cy.get(locators.all_galleries_filter.all_filter).type('Pi')
        cy.get(locators.all_galleries_filter.filter_button).click()

    })
})