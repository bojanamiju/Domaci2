class RegisterPage {

    get firstNameInputField() {
        return cy.get('#first-name')
    }

    get lastNameInputField(){
        return cy.get('#last-name')
    }

    get eMailInputField(){
        return cy.get('#email')
    }

    get passwordInputField(){
        return cy.get('#password')
    }

    get passwordConfirmationInputField(){
        return cy.get('#password-confirmation')
    }

    get checkInput(){
        return cy.get('.form-check-input')
    }

    get submitButton(){
        return cy.get("button[type='submit']")
    }

    registerNewUser (name, lastName, email, pass, passConfirm) {
        this.firstNameInputField.type(name);
        this.lastNameInputField.type(lastName);
        this.eMailInputField.type(email);
        this.passwordInputField.type(pass);
        this.passwordConfirmationInputField.type(passConfirm);
        this.checkInput.click();
        this.submitButton.click();
    }


    get passDontMatch(){
        return cy.get('p').contains('The password confirmation does not match.')
    }

    get accTermsAndConditions(){
        return cy.get('p').contains('The terms and conditions must be accepted.')
    }

    get passwordLength(){
        return cy.get('p').contains('The password must be at least 8 characters.')
    }

    get invalidPass(){
        return cy.get('p').contains('The password format is invalid.')
    }

    get registeredEmail(){
        return cy.get('p').contains('The email has already been taken.')
    }

    get invalidEmail(){
        return cy.get('p').contains('The email must be a valid email address.')
    }

    get registerBtn(){
        return cy.get('a').contains('Register')
    }

    get myGalleries(){
        return cy.get('a').contains('My Galleries')
    }

}


export const registerPage = new RegisterPage();

