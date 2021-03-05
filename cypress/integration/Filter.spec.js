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

    it("Filter field, searching for existent gallery", () => {
        cy.get(locators.allGalleries.inputField).type("Image555")
        cy.get(locators.allGalleries.filterButton).click()
        cy.get("h2 > .box-title").should("contain", "Image555")
    })
    
    it.only("Filter field, matching with 2 galleries", () => {
        cy.get(locators.allGalleries.inputField).type("5 Slika")
        cy.get(locators.allGalleries.filterButton).click()
        cy.get(".grid").should(($p) => {
    expect($p).to.have.length(2)
    expect($p.first()).to.contain('5 Slika')
  })
