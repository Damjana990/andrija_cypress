const locators = require("../fixtures/locators.json")
const data = require("../fixtures/data.json")

 describe("Register test", () => {

        it('intercept request', () => {
            cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register', (req) => {
            }).as('succesfullRegister')
            cy.visit('/register')
            cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName)
            cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName)
            cy.get(locators.register.email).clear().type(data.loginRegister.email)
            cy.get(locators.register.password).clear().type(data.loginRegister.password)
            cy.get(locators.register.password_conf).clear().type(data.loginRegister.password_conf)
            cy.get(locators.register.checkbox_conf).check()   
            cy.get(locators.register.button_conf).click() 
            cy.wait('@succesfullRegister').then((interception) => {
                expect(interception.response.statusCode).to.equal(200)
                expect(interception.response.body.access_token).exist
                console.log(interception)
            })
        })
})