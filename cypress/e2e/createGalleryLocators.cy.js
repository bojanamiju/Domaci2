/// <reference types='cypress'/>
const locators = require('../fixtures/locators.json');


describe("Create Gallery with all valid inputs", () => {
    it("Check all elements on the login page", () => {
      cy.visit("login");
      cy.get(locators.loginPage.loginEmail).type("bojana@gmail.com");
      cy.get(locators.loginPage.loginPass).type("12345678");
      cy.get(locators.loginPage.loginSubmitButton).click();
      cy.wait(2000);

      cy.visit('create');
      cy.get(locators.createGallery.galleryTitle).type('Gallery name');
      cy.get(locators.createGallery.galleryDescription).type('Gallery description');
      cy.get(locators.createGallery.galleryImageUrl).type('https://images.pexels.com/photos/5335221/pexels-photo-5335221.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')
      cy.get(locators.createGallery.gallerySubmitButton).click();

      cy.wait(2000);

  })

  it("Create Gallery without Title", () => {
     cy.visit("login");
     cy.get(locators.loginPage.loginEmail).type("bojana@gmail.com");
     cy.get(locators.loginPage.loginPass).type("12345678");
     cy.get(locators.loginPage.loginSubmitButton).click();
     cy.wait(2000);

     cy.visit('create');
     cy.get(locators.createGallery.galleryDescription).type('Gallery description');
     cy.get(locators.createGallery.galleryImageUrl).type('https://images.pexels.com/photos/5335221/pexels-photo-5335221.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')
     cy.get(locators.createGallery.gallerySubmitButton).click();

     cy.wait(2000);

  })


  it("Create Gallery without Description", () => {
    cy.visit("login");
    cy.get(locators.loginPage.loginEmail).type("bojana@gmail.com");
    cy.get(locators.loginPage.loginPass).type("12345678");
    cy.get("button[type='submit']").click();
    cy.wait(2000);

    cy.visit('create');
    cy.get(locators.createGallery.galleryTitle).type('Gallery name');
    cy.get(locators.createGallery.galleryImageUrl).type('https://images.pexels.com/photos/5335221/pexels-photo-5335221.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')
    cy.get(locators.createGallery.gallerySubmitButton).click();

    cy.wait(2000);

  })

    it("Create Gallery without image URL", () => {
        cy.visit("login");
        cy.get(locators.loginPage.loginEmail).type("bojana@gmail.com");
        cy.get(locators.loginPage.loginPass).type("12345678");
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    
        cy.visit('create');
        cy.get(locators.createGallery.galleryDescription).type('Gallery description');
        cy.get(locators.createGallery.galleryTitle).type('Gallery name');
        cy.get(locators.createGallery.gallerySubmitButton).click();
    
        cy.wait(2000);


     it("Cancel button", () => {
            cy.visit("login");
            cy.get(locators.loginPage.loginEmail).type("bojana@gmail.com");
            cy.get(locators.loginPage.loginPass).type("12345678");
            cy.get("button[type='submit']").click();
            cy.wait(2000);
        
            cy.visit('create');
            cy.get(locators.createGallery.galleryTitle).type('Gallery name');
            cy.get(locators.createGallery.galleryDescription).type('Gallery description');
            cy.get(locators.createGallery.galleryImageUrl).type('https://images.pexels.com/photos/5335221/pexels-photo-5335221.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');
            cy.get(locators.createGallery.galleryCancelButton).click();
        
            cy.wait(2000);
    
  })


 });

})
