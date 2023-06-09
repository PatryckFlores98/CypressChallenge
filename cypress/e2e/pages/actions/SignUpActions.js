/// <reference types="Cypress" />


import SignUpElements from '../elements/SignUpElements'
const signUpElements = new SignUpElements


class SignUpPage {
  //These methods are filling the fields with contents inserted by variables / clicking in elements
  fillEmail(email) {
    cy.get(signUpElements.emailField()).type(Math.random() + email)
  }

  fillPassword(password) {
    cy.get(signUpElements.passwordField()).type(password)
  }

  fillConfirmPassword(confirm_password) {
    cy.get(signUpElements.confirmPasswordField()).type(confirm_password)
  }

  clickAgeVerification() {
    cy.get(signUpElements.ageVerificationButton()).click()
  }

  clickNoBonus() {
    cy.get(signUpElements.noBonusButton()).click()
  }

  clickCreateAccount() {
    cy.get(signUpElements.createAccountButton()).click()
  }

}

export default SignUpPage;