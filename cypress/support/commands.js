import LoginPage from '../integration/PageObject/LoginPage'
import MainPage from '../integration/PageObject/MainPage'

const loginPage = new LoginPage()
const mainPage = new MainPage()

Cypress.Commands.add('adminLogin', (username, password) => {

    loginPage.fillUsername(username)
    loginPage.fillPassword(password)

    loginPage.submit()

})

Cypress.Commands.add('visitAndLogin', (username, password) => {
    loginPage.visit()

    loginPage.pageTitleIs()

    cy.adminLogin(username, password)

    mainPage.pageTitleIs()
})

Cypress.Commands.add('wholeWordSearch', (searchQuery) => {
    mainPage.dropDownSearchButton()

    mainPage.wholeWordSearchButton()

    mainPage.fillSearchBar(searchQuery)

    mainPage.searchButton()
})