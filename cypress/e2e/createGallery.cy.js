/// <reference types='cypress'/>
import { createGallery } from '../page_objects/createGalleryPagePOM';

import {faker} from '@faker-js/faker'

var gTitle = faker.commerce.productName();
var gDescription = faker.lorem.sentence();

describe('Create Gallery page', () => {

    it('Create gallery with all valid inputs', () => {


        cy.visit('login');
        createGallery.loginEmail.type("bojana@gmail.com");
        createGallery.loginPassword.type("12345678");
        createGallery.loginSubmitButton.click();
        cy.wait(2000);

        cy.visit('create');
        createGallery.galleryTitle.type(gTitle);
        createGallery.galleryDescription.type(gDescription);
        createGallery.galleryImageUrl.type('https://images.pexels.com/photos/5335221/pexels-photo-5335221.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')
        createGallery.gallerySubmitButton.click();

        cy.wait(2000);

    })
   
 
it("Create Gallery without Title", () => {

    cy.visit('login');
    createGallery.loginEmail.type("bojana@gmail.com");
    createGallery.loginPassword.type("12345678");
    createGallery.loginSubmitButton.click()
    cy.wait(2000);

    cy.visit('create');
    createGallery.galleryDescription.type(gDescription);
    createGallery.galleryImageUrl.type('https://images.pexels.com/photos/5335221/pexels-photo-5335221.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')
    createGallery.gallerySubmitButton.click();
    cy.wait(2000);

 })


 it("Create Gallery without Description", () => {

    cy.visit("login");
    createGallery.loginEmail.type("bojana@gmail.com");
    createGallery.loginPassword.type("12345678");
    createGallery.loginSubmitButton.click()
    cy.wait(2000);

    cy.visit('create');
    createGallery.galleryTitle.type(gTitle);
    createGallery.galleryImageUrl.type('https://images.pexels.com/photos/5335221/pexels-photo-5335221.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')
    createGallery.gallerySubmitButton.click();
    cy.wait(2000);

 })

   it("Create Gallery without image URL", () => {
    cy.visit("login");
    createGallery.loginEmail.type("bojana@gmail.com");
    createGallery.loginPassword.type("12345678");
    createGallery.loginSubmitButton.click()
    cy.wait(2000);

    cy.visit('create');
    createGallery.galleryTitle.type(gTitle);
    createGallery.galleryDescription.type(gDescription);
    createGallery.gallerySubmitButton.click();
    cy.wait(2000);

   })


    it("Create gallery with two images", () => {

        cy.visit("login");
        createGallery.loginEmail.type("bojana@gmail.com");
        createGallery.loginPassword.type("12345678");
        createGallery.loginSubmitButton.click()
        cy.wait(2000);
       
        cy.visit('create');
        createGallery.galleryTitle.type(gTitle);
        createGallery.galleryDescription.type(gDescription);
        createGallery.galleryImageUrl.type('https://images.pexels.com/photos/5335221/pexels-photo-5335221.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')
        createGallery.addImageButton.click();
        createGallery.galleryImageUrl2.type('https://images.pexels.com/photos/5335221/pexels-photo-5335221.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')
        createGallery.gallerySubmitButton.click();
        cy.wait(2000);

    })

    it("Cancel button", () => {

        cy.visit("login");
        createGallery.loginEmail.type("bojana@gmail.com");
        createGallery.loginPassword.type("12345678");
        createGallery.loginSubmitButton.click()
        cy.wait(2000);
       
        cy.visit('create');
        createGallery.galleryTitle.type(gTitle);
        createGallery.galleryDescription.type(gDescription);
        createGallery.galleryImageUrl.type('https://images.pexels.com/photos/5335221/pexels-photo-5335221.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')
        createGallery.galleryCancelButton.click();
        cy.wait(2000);
   
 })

 it("Move image down", () => {

    cy.visit("login");
    createGallery.loginEmail.type("bojana@gmail.com");
    createGallery.loginPassword.type("12345678");
    createGallery.loginSubmitButton.click()
    cy.wait(2000);
   
    cy.visit('create');
    createGallery.galleryTitle.type(gTitle);
    createGallery.galleryDescription.type(gDescription);
    createGallery.galleryImageUrl.type('https://images.pexels.com/photos/5335221/pexels-photo-5335221.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')
    createGallery.addImageButton.click();
    createGallery.galleryImageUrl2.type('https://upload.wikimedia.org/wikipedia/commons/7/74/A-Cat.jpg')
    createGallery.downArrowButton.click();
    createGallery.gallerySubmitButton.click();
    cy.wait(2000);

})


});


