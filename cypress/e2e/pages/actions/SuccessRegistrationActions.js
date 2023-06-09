/// <reference types="Cypress" />


import SuccessRegistrationElements from '../elements/SuccessRegistrationElements'
const successRegistrationElements = new SuccessRegistrationElements

class SuccessRegistrationActions {
  //This method is validating the content inside the element
  validateRegistration() {
    cy.get(successRegistrationElements.notificationIcon()).should('have.text'," Congratulations! ")
  }


}


export default SuccessRegistrationActions;