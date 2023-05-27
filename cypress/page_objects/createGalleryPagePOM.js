class CreateGallery {

    get loginEmail() {
        return cy.get('#email');
    }

    get loginPassword() {
        return cy.get("#password");
    }

    get loginSubmitButton() {
        return cy.get('.btn.btn-custom');
    }

    get galleryTitle() {
        return cy.get('#title');
    }

    get galleryDescription() {
        return cy.get('#description');
    }

    get galleryImageUrl() {
        return cy.get('#app > div.container > div > div > form > div:nth-child(3) > div > div > input');
    }

    get gallerySubmitButton() {
        return cy.get(".btn.btn-custom").contains('Submit');
    }
    get galleryCancelButton() {
        return cy.get(".btn.btn-custom").contains('Cancel');
    }


}

export const createGallery = new CreateGallery();

