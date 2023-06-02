/// <reference types='cypress'/>

import {faker} from '@faker-js/faker'

import {commonElements} from '../../commonElementspage_objects/'


describe("Register user via API", () => {
  beforeEach(() => {

    cy.loginViaApi();
    /*cy.request({
      method: "POST",
      url: "https://gallery-api.vivifyideas.com/api/auth/register",
      body: {
        email: email,
        first_name: "aaaa",
        last_name: "aaaa",
        password: "12345678",
        password_confirmation: "12345678",
        terms_and_conditions: true,
      },
    })
      .its("body").then((response) => {
        const token = response.access_token;
        expect(token).to.be.a('string')
        const userId = response.user_id;
        expect(userId).to.be.a('number');


        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user_id', userId);
      });*/
  });

  it("registerAPI", () => {
    cy.visit("");
    commonElements.logoutBtn.should('be.visible');
  });

});
