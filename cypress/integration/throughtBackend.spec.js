describe("Login test", () =>{

    before(() => {
        cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login',
        {email:"test1234end@test.com", password:"12345678"}
        )
        .its('body').then((identity) => {
            window.localStorage.setItem('token',identity.access_token);
        })
    })
    
    it('Visit gallery', () => {
        cy.visit('/')
    })
})

   