class CreateGallery2 {

get galleryTitle() {
    cy.get('#title');
}

get galleryDescription() {
    cy.get('#description');
}

get galleryImageUrl() {
    cy.get('.input-group.mb-3');
}

get gallerySubmitButton() {
    cy.get(".btn.btn-custom").contains('Submit');
}

}

export default CreateGallery2;