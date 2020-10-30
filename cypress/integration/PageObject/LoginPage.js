class LoginPage {
    visit = () => {
        cy.fixture('data')
            .then((data) => {
                cy.visit(data.url)
                cy.url().should('include', 'admin-web')
            })
    }

    fillUsername = (value) => {
        cy.get('#username').should('be.visible').type(value)
        return this
    }

    fillPassword = (value) => {
        cy.get('#password').should('be.visible').type(value)
        return this
    }

    submit = () => {
        cy.xpath("//button[contains(text(),'Sign in')]").should('be.enabled').click()
        return this
    }

    pageTitleIs = () => {
        cy.get('h2').contains('Welcome to Qnary')
    }
}

export default LoginPage