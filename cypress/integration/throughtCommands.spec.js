describe("Login test", () =>{

    before(() => { //pozivanje setovanih podataka iz support/commands.js
       cy.loginCommand()
    })

    it('Visit gallery', () => {
        cy.visit('/')
    })
})