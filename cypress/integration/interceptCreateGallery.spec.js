const locators = require("../fixtures/locators.json")
const data = require("../fixtures/data.json")
const error = require("../fixtures/error.json")

describe ('Create Gallery test', () => {

    before (() => {
        cy.visit ('/')
        cy.get("a[href='/login']").click()
    })
        it ('Login', () => {
        cy.get(locators.login.email).type(data.loginRegister.email)
        cy.get(locators.login.password).type(data.loginRegister.password)
        cy.get(locators.login.submit).click()
    })
        it ('Create new gallery', () => {
        cy.get("a[href='/create']").click()
    })
        let galId = ""
        it('intercept request', () => {
            cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) => {
            }).as('succesfullGalleryCreate')
            //cy.visit('/create')
            cy.get(locators.create_gallery.title).type('Sunset')
            cy.get(locators.create_gallery.description).type('Lorem Ipsum')
            cy.get(locators.create_gallery.image).type('https://upload.wikimedia.org/wikipedia/commons/9/9e/Peaceful_Sunset_%28Maldives%29.jpg')
            cy.get(locators.create_gallery.submit_butt).click()
            //cy.get(error.errorTitle.errorTitle).should('contain', error.errorTitMsgLessTwo.errorMsg).and('have.css', 'background-color', 'rgb(248, 215, 218)')
            cy.wait('@succesfullGalleryCreate').then((interception) => {
                expect(interception.response.statusCode).to.equal(201)
                galId=interception.response.body.id;
                })
        })

        it('Delete gallery', () => {(
            cy.intercept('DELETE',`https://gallery-api.vivifyideas.com/api/galleries/${galId}`, (req) => {
            }).as('succesfullGalleryDelete')
            cy.wait('@succesfullGalleryDelete').then((interception) => {
                expect(interception.response.statusCode).to.equal(200)
            })
        
        })
    })

        // it ('Form', () => {
        //     cy.get(locators.create_gallery.title).type(data.loginRegister.titleMore)
        //     cy.get(locators.create_gallery.description).type('Desc')
        //     cy.get(locators.create_gallery.image).type('https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg')
        //     cy.get(locators.create_gallery.submit_butt).click()
        //     cy.get(error.errorTitle.errorTitle).should("contain", error.errorMsg.errorMsg).and('have.css', 'background-color', 'rgb(248, 215, 218)') 
        //     })

