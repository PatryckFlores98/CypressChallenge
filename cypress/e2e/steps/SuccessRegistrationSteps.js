// cypress/e2e/duckduckgo.ts
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SuccessRegistrationActions from '../pages/actions/SuccessRegistrationActions'
const successRegistrationPage = new SuccessRegistrationActions


Then("the account has to be created", () => {
    successRegistrationPage.validateRegistration();
});
