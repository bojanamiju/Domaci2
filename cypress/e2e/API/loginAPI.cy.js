/// <reference types='cypress'/>

import { createGallery } from "../../page_objects/createGalleryPagePOM";

describe('Login user via API', () =>{


    beforeEach(() => {

        //cy.loginViaApi();
        /*cy.request({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/login',
            body:{
                email:"leo@gmail.com",
                password:"12345678"
            }
            
        }).its('body').then((response) => {
            cy.log(response);
            const token = response.access_token;
            expect(token).to.be.a('string')
            const userId = response.user_id;
            expect(userId).to.be.a('number');


            window.localStorage.setItem('token', token);
            window.localStorage.setItem('user_id', userId);

            cy.log(token);
            cy.log(userId);
        })*/

    })

    it('Negative case - login invalid password via API', () => {

        const registeredEmail = Cypress.env('registeredEmail');
        const validPassword = Cypress.env('validPassword');

        //Drugi nacin.
        //const {registeredEmail, validPassword} = Cypress.env()



        cy.loginViaApi(registeredEmail, validPassword)
        cy.visit('');
        cy.wait(1500);
        cy.url().should('not.contain', 'login')
        //cy.wait(2000);

    })

    it.only('Login user - intercept', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/login'
        }).as('successfullLogin');


        cy.visit('/login');
        createGallery.loginUser(Cypress.env('registeredEmail'), Cypress.
        env('validPassword'));

        cy.wait('@successfullLogin').then((res) => {
            console.log(res.response);
            let token = res.response.body.access_token;
            expect(token).to.be.a('string');
            expect(res.response.statusCode).eq(200);

            window.localStorage.setItem('token', token)
        })

    }) 

})



