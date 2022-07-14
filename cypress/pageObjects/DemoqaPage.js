import BasePage from './BasePage'

class DemoqaPage extends BasePage {
  static get url () {
    return 'https://demoqa.com/automation-practice-form';
  }

  static get inputFirstName(){
    return cy.get('#firstName');
  }
  static get inputLastName(){
    return cy.get('#lastName');
  }
  static get inputEmail(){
    return cy.get('#userEmail');
  }
  static get pickOption(){
    return cy.get('.custom-control-label');
  }
  static get inputPhoneNumber(){
    return cy.get('#userNumber');
  }
  static get calendarWidget(){
    return cy.get('#dateOfBirthInput');
  }
  static get inputSubjects(){
    return cy.get('.subjects-auto-complete__value-container');
  }
  static get inputAddress(){
    return cy.get('#currentAddress');
  }
  static get openState(){
    return cy.get('#state > div > div.css-1hwfws3');
  }
  static get pickState(){
    return cy.get('#react-select-3-input');
  }
  static get openCity() {
    return cy.get('#city > div > div.css-1hwfws3')
  }
  static get pickCity(){
    return cy.get('#react-select-4-input');
  }
  static get buttonSubmit(){
    return cy.get('#submit');
  }
  static get validateTable(){
    return cy.get('td');
  }
}

export default DemoqaPage;