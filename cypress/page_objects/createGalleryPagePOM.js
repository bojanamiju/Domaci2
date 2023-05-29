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

    get addImageButton() {
        return cy.get('#app > div.container > div > div > form > div:nth-child(3) > button');
    }

    get galleryImageUrl2() {
        return cy.get('#app > div.container > div > div > form > div:nth-child(3) > div:nth-child(3) > div > input');
    }

    get upArrowButton() {
        return cy.get('#app > div.container > div > div > form > div:nth-child(3) > div > div > div > button:nth-child(1)');
    }

    get downArrowButton() {
        return cy.get('#app > div.container > div > div > form > div:nth-child(3) > div:nth-child(2) > div > div > button:nth-child(3)');
    }

}

export const createGallery = new CreateGallery();

