// cypress/e2e/duckduckgo.ts
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePageActions from '../pages/actions/HomePageActions'
const homePage = new HomePageActions


Given("I access the UI", () => {
    homePage.accessUI();
});

When("I click on Got It button", () => {
    homePage.clickGotIt();
});

When("I click on Register button", () => {
    homePage.clickRegister();
});

When("I click on News button", () => {
    homePage.clickNews();
});