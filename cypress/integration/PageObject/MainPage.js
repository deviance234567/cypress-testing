class MainPage {

    fillSearchBar = (value) => {
        cy.xpath("//input[contains(@class, 'Searchbarstyle')]").should('be.enabled').type(value)
        cy.wait(3000)
        return this
    }

    searchButton = () => {
        cy.xpath("//button[contains(@class, 'Buttonstyle') and text()='Search']").should('be.visible').click()
        return this
    }

    pageTitleIs = () => {
        cy.wait(3000)
        cy.get('h1').contains('Organizations')
        return this
    }

    logoutButton = () => {
        cy.xpath("//img[contains(@class, 'UserLogo')]").should('be.visible').click()
        cy.xpath("//button[contains(@class, 'UserPopupstyle') and text()='Log Out']").should('be.visible').click()
        return this
    }

    newOrganizationButton() {
        cy.xpath("//div[@id='SMain']//div[contains(@class, 'Headerstyle')]//button[contains(@class, 'SButton')]").should('be.visible').click()
        return this
    }

    wholeWordSearchButton() {
        cy.xpath("//div[contains(@class, 'FiltersDropdownstyle') and text()='Whole Word']").should('be.visible').click()
        return this
    }

    dropDownSearchButton() {
        cy.xpath("//button[contains(@class, 'SButton')]//i[contains(@class, 'angle-down')]").should('be.visible').click()
        return this
    }

    caseSensitiveButton() {
        cy.xpath("//div[contains(@class, 'SCaseSensitiveIconWrapper')]").should('exist').click({ multiple: true })
        return this
    }

    userProfileButton = () => {
        cy.xpath("//img[contains(@class, 'UserLogo')]").should('be.visible').click()
        cy.xpath("//button[contains(@class, 'UserPopupstyle') and text()='Profile Settings']").should('be.visible').click()
        return this
    }

}

export default MainPage