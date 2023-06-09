/// <reference types="Cypress" />


import HomePageElements from '../elements/HomePageElements'
const homepageElements = new HomePageElements

class HomePage {

  //This method access the casino page, it was necessary to put an uncaught expection and failOnStatusCode: false due to errors in the connection
  accessUI() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.viewport(1920, 1080)
    cy.visit('https://demo.casino/', {failOnStatusCode: false})
  }


  // The 3 next methods are basically clicking in the elements
  clickGotIt() {
    cy.get(homepageElements.gotItButton()).click()
  }

  clickRegister() {
    cy.get(homepageElements.registerButton()).click()
  }

  clickNews() {
    cy.get(homepageElements.newsButton()).click()
  }


}


export default HomePage;