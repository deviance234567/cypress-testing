/// <reference types="cypress" />

import MainPage from '../PageObject/MainPage'
import UserProfilePage from '../PageObject/UserProfilePage'


describe('User profile functionality', function () {

    const mainPage = new MainPage()
    const userProfilePage = new UserProfilePage()

    beforeEach(function () {
        cy.fixture('data')
            .then(function (data) {
                this.data = data
            })
    })

    it('User profile page loads', function () {

        cy.visitAndLogin(this.data.login.username, this.data.login.password)

        mainPage.pageTitleIs()

        mainPage.userProfileButton()

        userProfilePage.pageTitleIs()

        mainPage.logoutButton()

    })
})