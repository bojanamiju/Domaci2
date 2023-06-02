import { commonElements } from '../page_objects/commonElements';
import { registerPage } from '../page_objects/registerPagePom';

describe('Register page', () => {


    before( () => {
        cy.visit('register')
    })


    it('test', () => {

        registerPage.registerNewUser('bojanam', 'mijusk', 'bojana123@gmail.com', '12345678', '12345678')
    } )


it("Positive case - Register new user", () => {

    cy.url().should('contain', 'register');
        
    registerPage.firstNameInputField.type('Bojana');
    registerPage.lastNameInputField.type('Mijuskovic');
    cy.get("#email").type('bojana12345678@gmail.com');
    cy.get("#password").type('12345678');
    cy.get("#password-confirmation").type('12345678');
    cy.get(".form-check-input").click();
    cy.get(".btn-custom").click();
    cy.wait(2000);

    cy.url().should('not.contain', 'register');
    commonElements.myGalleriesButton.should('be.visible');
    commonElements.logoutBtn.should('be.visible');
    commonElements.galleryName.eq(4).should('contain', 'Flower')

    commonElements.myGalleriesButton.should('have.css', 'color', 'rgb(255, 255, 255)')




})

it("Register with all valid inputs", () => {
        
    cy.visit('register');
    cy.get("#first-name").type('Bojana');
    cy.get("#last-name").type('Mijuskovic');
    cy.get("#email").type('bojana@gmail.com');
    cy.get("#password").type('12345678');
    cy.get("#password-confirmation").type('12345678');
    cy.get(".form-check-input").click();
    cy.get(".btn-custom").click();
    cy.wait(2000);

    cy.url().should('not.contain', 'register');
    commonElements.myGalleriesButton.should('be.visible');
    commonElements.logoutBtn.should('be.visible');

})


    it("Empty first name - NEG", () => {
    
    cy.visit('register');
    cy.get("#last-name").type('Mijuskovic');
    cy.get("#email").type('bojana@gmail.com');
    cy.get("#password").type('12345678');
    cy.get("#password-confirmation").type('12345678');
    cy.get(".form-check-input").click();
    cy.get(".btn-custom").click();
    cy.wait(2000);

    cy.url().should('contain', 'register');
    registerPage.registerBtn.should('be.visible');  
    registerPage.submitButton.should('be.visible');

})

it("Empty last name - NEG", () => {
    
cy.visit('register');
cy.get("#first-name").type('Bojana');
cy.get("#email").type('bojana@gmail.com');
cy.get("#password").type('12345678');
cy.get("#password-confirmation").type('12345678');
cy.get(".form-check-input").click();
cy.get(".btn-custom").click();
cy.wait(2000);

cy.url().should('contain', 'register');
registerPage.registerBtn.should('be.visible');
registerPage.submitButton.should('be.visible');

})

it("Empty email field - NEG", () => {
    
cy.visit('register');
cy.get("#first-name").type('Bojana');
cy.get("#last-name").type('Mijuskovic');
cy.get("#password").type('12345678');
cy.get("#password-confirmation").type('12345678');
cy.get(".form-check-input").click();
cy.get(".btn-custom").click();
cy.wait(2000);

cy.url().should('contain', 'register');
registerPage.registerBtn.should('be.visible');
registerPage.submitButton.should('be.visible');

})

it("Empty password field - NEG", () => {
    
cy.visit('register');
cy.get("#first-name").type('Bojana');
cy.get("#last-name").type('Mijuskovic');
cy.get("#email").type('bojana@gmail.com');
cy.get("#password-confirmation").type('12345678');
cy.get(".form-check-input").click();
cy.get(".btn-custom").click();
cy.wait(2000);

cy.url().should('contain', 'register');
registerPage.registerBtn.should('be.visible');
registerPage.submitButton.should('be.visible');

})

it("Empty password confirmation field - NEG", () => {
    
cy.visit('register');
cy.get("#first-name").type('Bojana');
cy.get("#last-name").type('Mijuskovic');
cy.get("#email").type('bojana@gmail.com');
cy.get("#password").type('12345678');
cy.get(".form-check-input").click();
cy.get(".btn-custom").click();
cy.wait(2000);

cy.url().should('contain', 'register');
registerPage.registerBtn.should('be.visible');
registerPage.submitButton.should('be.visible');

})


it("Wrong password confirmation - NEG", () => {
    
cy.visit('register');
cy.get("#first-name").type('Bojana');
cy.get("#last-name").type('Mijuskovic');
cy.get("#email").type('bojana@gmail.com');
cy.get("#password").type('12345678');
cy.get("#password-confirmation").type('abcd1234');
cy.get(".form-check-input").click();
cy.get(".btn-custom").click();
cy.wait(2000);

registerPage.passDontMatch.should('contain', 'The password confirmation does not match.');
cy.url().should('contain', 'register');
registerPage.registerBtn.should('be.visible');
registerPage.submitButton.should('be.visible');

})

it("Terms and conditions didnt accepted - NEG", () => {
    
cy.visit('register');
cy.get("#first-name").type('Bojana');
cy.get("#last-name").type('Mijuskovic');
cy.get("#email").type('bojana@gmail.com');
cy.get("#password").type('12345678');
cy.get("#password-confirmation").type('12345678');
cy.get(".btn-custom").click();
cy.wait(2000);

registerPage.accTermsAndConditions.should('contain', 'The terms and conditions must be accepted.');
cy.url().should('contain', 'register');
registerPage.registerBtn.should('be.visible');
registerPage.submitButton.should('be.visible');

})

it("Password lower than 8 charachters - NEG", () => {
    
cy.visit('register');
cy.get("#first-name").type('Bojana');
cy.get("#last-name").type('Mijuskovic');
cy.get("#email").type('bojana@gmail.com');
cy.get("#password").type('1234567');
cy.get("#password-confirmation").type('1234567');
cy.get(".form-check-input").click();
cy.get(".btn-custom").click();
cy.wait(2000);

registerPage.passwordLength.should('contain', 'The password must be at least 8 characters.');
cy.url().should('contain', 'register');
registerPage.registerBtn.should('be.visible');
registerPage.submitButton.should('be.visible');

})

it("Password dont contains numbers - NEG", () => {
    
cy.visit('register');
cy.get("#first-name").type('Bojana');
cy.get("#last-name").type('Mijuskovic');
cy.get("#email").type('bojana@gmail.com');
cy.get("#password").type('aaaabbbb');
cy.get("#password-confirmation").type('aaaabbbb');
cy.get(".form-check-input").click();
cy.get(".btn-custom").click();
cy.wait(2000);

cy.url().should('contain', 'register');
registerPage.invalidPass.should('contain', 'The password format is invalid.');
registerPage.registerBtn.should('be.visible');
registerPage.submitButton.should('be.visible');

})

it("The email has already been taken - NEG", () => {
    
    cy.visit('register');
    cy.get("#first-name").type('Bojana');
    cy.get("#last-name").type('Mijuskovic');
    cy.get("#email").type('bojana@gmail.com');
    cy.get("#password").type('12345678');
    cy.get("#password-confirmation").type('12345678');
    cy.get(".form-check-input").click();
    cy.get(".btn-custom").click();
    cy.wait(2000);

    cy.url().should('contain', 'register');
    registerPage.registeredEmail.should('contain', 'The email has already been taken.');
    registerPage.registerBtn.should('be.visible');
    registerPage.submitButton.should('be.visible');
    
    })

    it("Invalid email address - NEG", () => {
    
        cy.visit('register');
        cy.get("#first-name").type('Bojana');
        cy.get("#last-name").type('Mijuskovic');
        cy.get("#email").type('bojana@gmail');
        cy.get("#password").type('12345678');
        cy.get("#password-confirmation").type('12345678');
        cy.get(".form-check-input").click();
        cy.get(".btn-custom").click();
        cy.wait(2000);
        
        cy.url().should('contain', 'register');
        registerPage.invalidEmail.should('contain', 'The email must be a valid email address.');
        registerPage.registerBtn.should('be.visible');
        registerPage.submitButton.should('be.visible');
        
        })

})