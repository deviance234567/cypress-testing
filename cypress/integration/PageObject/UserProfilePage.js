class UserProfilePage {
    pageTitleIs() {
        cy.xpath("//h1[text()='User Profile']").should('exist');
    }
}

export default UserProfilePage