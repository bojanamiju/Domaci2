class CommonElements {

get myGalleriesButton(){
    return cy.get('a').contains('My Galleries')
}

get logoutBtn(){
    return cy.get('a').contains('Logout')
}

get galleryName() {
    return cy.get('.box-title')
}

}

export const commonElements = new CommonElements()