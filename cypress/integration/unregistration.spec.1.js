//ubacivanje lokatora i faker-a, iznad description
const locators = require("../fixtures/locators.json")
//const faker = require('faker')
const data = require("../fixtures/data.json")
const error = require("../fixtures/error.json")

describe ("Registration test", () => {

//dobijanje istog usera sa svakim testom, sa faker-om
    //let userData = {
      //  randomName: faker.name.firstName(),
      //  randomLastName: faker.name.lastName(),
      //  randomEmail: faker.internet.email(),
      //  randomPassword: faker.internet.password()
    // }

    before (() => {
        cy.visit ('/')
        cy.get('.nav-link').eq(2).click()
    })

    // it('Visit gallery page', () => {
    //    cy.visit('/')
    // })

    it ('Click on register button', () => {
       cy.get('.nav-link').eq(2).click()
    })

    it('Registration with valid credential', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName)
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName)
        cy.get(locators.register.email).clear().type(data.loginRegister.email)
        cy.get(locators.register.password).clear().type(data.loginRegister.password)
        cy.get(locators.register.password_conf).clear().type(data.loginRegister.inc_pass)
        cy.get(locators.register.checkbox_conf).check()
        cy.get(locators.register.button_conf).click()
        cy.get(error.createGallery.passwordMissmatch).should("contain", error.error.errorMsg)   
    })

    it('Click on submit button', () => {
         
    })

})