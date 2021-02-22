describe("Login test", () => {

    it('Visit gallery page', () => {
        cy.visit('/')
        cy.wait(10000)
    })
    it ('Click on login button', () => {
        cy.get('.nav-link').eq(1).click()
    })
    
    it ('Click on login button 2', () => {
        cy.get("a[href='/login']").click()
    })

    it ('Login with valid credential', () => {
        cy.get('#email').type('test1234end@test.com')
        cy.get('#password').type('12345678')
        cy.get('button').click()
    })

    it ('Logout', () => {
        cy.get("a[role= 'button ']").click()
    })

}) 