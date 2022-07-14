import DemoqaPage from "../pageObjects/DemoqaPage";

describe('Demoqa test', () => {
  beforeEach(() => {
    DemoqaPage.visit();
  });

  Cypress.Commands.add('setYear', (year) => {
    cy.get('.react-datepicker__year-select').select(year);
  })
  Cypress.Commands.add('setMonth', (monthNr) => {
    cy.get('.react-datepicker__month-select').select(monthNr);
  })
  Cypress.Commands.add('setDate', (Date) => {
    cy.get('.react-datepicker__day').contains(Date).click();
  })

  it('login with locked-out-user', () => {
    DemoqaPage.inputFirstName.type("Adrians");
    DemoqaPage.inputLastName.type("Jaunkierpis");
    DemoqaPage.inputEmail.type("myMail@mail.com");
    DemoqaPage.inputPhoneNumber.type("0123456789");
    DemoqaPage.calendarWidget.click();
    cy.setYear('1984');
    cy.setMonth('February');
    cy.setDate('29');
    DemoqaPage.pickOption.contains("Male").click();
    DemoqaPage.inputSubjects.type("Maths{enter}");
    DemoqaPage.pickOption.contains("Sports").click();
    DemoqaPage.inputAddress.type("Ventspils Latvia");
    DemoqaPage.openState.click();
    DemoqaPage.pickState.type("Haryana{enter}");
    DemoqaPage.openCity.click();
    DemoqaPage.pickCity.type("Panipat{enter}");
    DemoqaPage.buttonSubmit.click({force: true});
    //validate
    DemoqaPage.validateTable.should("contains.text", "Student NameAdrians Jaunkierpis");
    DemoqaPage.validateTable.should("contains.text", "Student EmailmyMail@mail.com");
    DemoqaPage.validateTable.should("contains.text", "GenderMale");
    DemoqaPage.validateTable.should("contains.text", "Mobile0123456789");
    DemoqaPage.validateTable.should("contains.text", "SubjectsMaths");
    DemoqaPage.validateTable.should("contains.text", "HobbiesSports");
    DemoqaPage.validateTable.should("contains.text", "Picture");
    DemoqaPage.validateTable.should("contains.text", "AddressVentspils Latvia");
    DemoqaPage.validateTable.should("contains.text", "State and CityHaryana Panipat");
  })
});