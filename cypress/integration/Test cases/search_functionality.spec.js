/// <reference types="cypress" />

import MainPage from '../PageObject/MainPage'

describe('Search functionality', function () {

    const mainPage = new MainPage()

    beforeEach(function () {
        cy.fixture('data')
            .then(function (data) {
                this.data = data
            })
    })

    it('Partial search returns correct results', function () {
        const searchQuery = 'Dav'

        cy.visitAndLogin(this.data.login.username, this.data.login.password)

        mainPage.fillSearchBar(searchQuery)
        mainPage.searchButton()

        cy.xpath("//div[contains(@class, 'SClientCard')]//h2")
            .each((($h2, index, $list) => {
                expect($h2.text()).contains(searchQuery)
            }))

        mainPage.logoutButton()

    })

    it('Whole word search should not return results for partial search', function () {
        const searchQuery = 'Dav'

        cy.visitAndLogin(this.data.login.username, this.data.login.password)

        cy.wholeWordSearch(searchQuery)

        cy.xpath("//div[contains(@class, 'SClientCard')]//h2").should('not.exist')

    })

    it('Whole word search should return results for whole word search', function () {
        const searchQuery = 'David'

        cy.visitAndLogin(this.data.login.username, this.data.login.password)

        cy.wholeWordSearch(searchQuery)

        cy.xpath("//div[contains(@class, 'SClientCard')]//h2")
            .each((($h2, index, $list) => {
                expect($h2.text()).contains(searchQuery)
            }))

        mainPage.logoutButton()

    })

    it('Search query is case sensitive', function () {
        const searchQuery = 'Dav'

        cy.visitAndLogin(this.data.login.username, this.data.login.password)

        mainPage.caseSensitiveButton()
        mainPage.fillSearchBar(searchQuery)
        mainPage.searchButton()

        cy.xpath("//div[contains(@class, 'SClientCard')]//h2")
            .each((($h2, index, $list) => {
                expect($h2.text()).contains(searchQuery)
            }))

        mainPage.logoutButton()

    })

    it('Search query is not case sensitive', function () {
        const searchQuery = 'dav'

        cy.visitAndLogin(this.data.login.username, this.data.login.password)

        mainPage.caseSensitiveButton()
        mainPage.fillSearchBar(searchQuery)
        mainPage.searchButton()

        cy.xpath("//div[contains(@class, 'SClientCard')]//h2").should('not.exist')

        mainPage.logoutButton()

    })


})