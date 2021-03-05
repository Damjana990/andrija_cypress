//const locators = require("../fixtures/locators.json")
//import {loginPage} from '../pageObjects/loginPage.js'

const data = require("../fixtures/data.json")


describe("Login test", () => {

    beforeEach (() => {
        cy.visit ('/')
        loginPage.visitLogin()  
      })

    //it('Visit gallery page', () => {
      //  cy.visit('/')
        //cy.wait(10000)
    //})
    //it ('Click on login button', () => {
    //    cy.get('.nav-link').eq(1).click()
    //})
    
    //it ('Click on login button 2', () => {
     //   loginPage.visitLogin()
    //})

    it ('Login', () => {
        
        //cy.get(locators.login.email).type('test1234end@test.com')
        //loginPage.fillEmailInput('bla@gmail.com')
        //cy.get(locators.login.password).type('12345678')
        //loginPage.fillPasswordInput('helooooo')
        //cy.get(locators.login.submit).click()
        //loginPage.clickSubmitButton()
        loginPage.login('bla@gmail.com','heloooo')
    })


    it ('Logout', () => {
        cy.get("a[role= 'button ']").click()
    })

}) 