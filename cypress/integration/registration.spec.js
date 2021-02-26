//ubacivanje lokatora i faker-a, iznad description

const locators = require("../fixtures/locators.json")
const faker = require('faker')

describe ("Registration test", () => {

//dobijanje istog usera sa svakim testom, sa faker-om
    let userData = {
        randomName: faker.name.firstName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }

    beforeEach (() => {
        cy.visit ('/')
        cy.get('.nav-link').eq(2).click()
    })

    //it('Visit gallery page', () => {
      //  cy.visit('/')
    //})

    //it ('Click on register button', () => {
     //   cy.get('.nav-link').eq(2).click()
    //})

    it ('Registration with valid credential', () => {
        cy.get(locators.register.firstName).clear().type(faker.name.firstName())
        cy.get(locators.register.lastName).clear().type(faker.name.lastName())
        cy.get(locators.register.email).clear().type(faker.internet.email())
        cy.get(locators.register.password).clear().type(faker.internet.password())
        cy.get(locators.register.password_conf).clear().type(faker.internet.password())
        cy.get(locators.register.checkbox_conf).check()   
    })

    it ('Click on submit button', () => {
        cy.get(locators.register.button_conf).click() 
    })

})