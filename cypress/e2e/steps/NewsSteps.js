// cypress/e2e/duckduckgo.ts
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NewsActions from '../pages/actions/NewsActions'
const newsActions = new NewsActions


When("I click on a news", () => {
    newsActions.clickNewsImg();
});

Then("the news has to be displayed", () => {
    newsActions.validateNews();
});