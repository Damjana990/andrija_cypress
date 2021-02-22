describe ("Registration test", () => {

    it('Visit gallery page', () => {
        cy.visit('/')
    })

    it ('Click on register button', () => {
        cy.get('.nav-link').eq(2).click()
    })

    it ('Registration with invalid credential', () => {
        cy.get('#first-name').type('Test')
        cy.get('#email').type('test12345end@test.com')
        cy.get('#password').type('12345678')
        cy.get('#password-confirmation').type('12345678')
        cy.get('input[type="checkbox"]').check()   
    })

    it ('Click on submit button', () => {
        cy.get('.nav-link').eq(1).click() 
    })

})