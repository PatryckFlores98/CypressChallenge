// cypress/e2e/duckduckgo.ts
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignUpPage from '../pages/actions/SignUpActions'
const signUpPage = new SignUpPage


When("I fill the {} field", (email) => {
    signUpPage.fillEmail(email);
});

When("I click on age verification check", () => {
    signUpPage.clickAgeVerification();
});

When("fill {} field", (password) => {
    signUpPage.fillPassword(password);
});

When("reenter the {} password field", (confirm) => {
    signUpPage.fillConfirmPassword(confirm);
});

When("I click on No Bonus check", () => {
    signUpPage.clickNoBonus();
});

When("I click on Create Account button", () => {
    signUpPage.clickCreateAccount();
});