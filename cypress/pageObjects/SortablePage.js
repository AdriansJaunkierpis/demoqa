import BasePage from './BasePage'

class SortablePage extends BasePage {
  static get url () {
    return 'https://demoqa.com/sortable';
  }

  static get listGroup(){
    return cy.get('.list-group-item');
  }
  static get (){
    return cy.get('');
  }
  static get (){
    return cy.get('');
  }
}

export default SortablePage;