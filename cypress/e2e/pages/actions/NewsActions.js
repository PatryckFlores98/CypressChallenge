/// <reference types="Cypress" />


import NewsElements from '../elements/NewsElements'
const newsElements = new NewsElements

class NewsPage {
  //This method is clicking in the element
  clickNewsImg() {
    cy.get(newsElements.newsImg()).click()
  }
  //This method is validating the content inside the element
  validateNews() {
    cy.get(newsElements.newsTitle()).should('have.text'," Free spins in Fruits of Luxor ")
  }


}


export default NewsPage;