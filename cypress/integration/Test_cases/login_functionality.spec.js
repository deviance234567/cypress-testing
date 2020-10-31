/// <reference types="cypress" />

import LoginPage from '../PageObject/LoginPage'
import MainPage from '../PageObject/MainPage'


describe('Login Functionality', function () {


    const loginPage = new LoginPage()
    const mainPage = new MainPage()

    beforeEach(function () {
        cy.fixture('data')
            .then(function (data) {
                this.data = data
            })
    })

    it('Log in and out', function () {

        cy.visitAndLogin(this.data.login.username, this.data.login.password)

        mainPage.pageTitleIs()

        mainPage.logoutButton()

        loginPage.pageTitleIs()

    })

    it('Log in with no password', function () {

        loginPage.visit()

        loginPage.pageTitleIs()

        loginPage.fillUsername('Random@something.com')

        loginPage.submit()

        cy.on('window:alert', function (txt) {
            expect(txt).eq('Invalid password. Please try again.')

        })

        cy.on('uncaught:exception', function (err, p) {
            return false
        })

    })

    it('Log in with no username', function () {

        loginPage.visit()

        loginPage.pageTitleIs()

        loginPage.fillPassword('random12345')

        loginPage.submit()


        cy.on('window:alert', function (txt) {
            expect(txt).eq('ERRORS.USER')

        })

        cy.on('uncaught:exception', function (err, p) {
            return false
        })

    })

    it('Log in with wrong credentials', function () {

        loginPage.visit()

        loginPage.pageTitleIs()

        cy.adminLogin('Random@something.com', 'random12345')

        cy.on('window:alert', function (txt) {
            expect(txt).eq('ERRORS.USER')

        })
    })

})