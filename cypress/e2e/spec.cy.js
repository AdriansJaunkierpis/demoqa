import DemoqaPage from "../pageObjects/DemoqaPage";
import SortablePage from "../pageObjects/SortablePage";

describe('Demoqa test', () => {
  describe("Form practice", () => {
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

    it('Forms', () => {
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
  })
  describe("Interaction", () => {
    beforeEach(() => {
      SortablePage.visit();
    });
    it("Sortable", () => {
      SortablePage.listGroup.then( numbers => {
        expect(numbers[0]).to.contain.text("One");
        expect(numbers[1]).to.contain.text("Two");
        expect(numbers[2]).to.contain.text("Three");
        expect(numbers[3]).to.contain.text("Four");
        expect(numbers[4]).to.contain.text("Five");
        expect(numbers[5]).to.contain.text("Six");
      })
      //SortablePage.listGroup.first().trigger('mousedown');
      SortablePage.listGroup.first().trigger('mousedown');
      SortablePage.listGroup.contains("Six").click().trigger('mouseleave');
      SortablePage.listGroup.first().trigger('mousedown');
      SortablePage.listGroup.contains("Six").click().trigger('mouseleave');
      SortablePage.listGroup.first().trigger('mousedown');
      SortablePage.listGroup.contains("Six").click().trigger('mouseleave');
      SortablePage.listGroup.first().trigger('mousedown');
      SortablePage.listGroup.contains("Six").click().trigger('mouseleave');
      SortablePage.listGroup.first().trigger('mousedown');
      SortablePage.listGroup.contains("Six").click().trigger('mouseleave');

      SortablePage.listGroup.then( numbers => {
        expect(numbers[5]).to.contain.text("One");
        expect(numbers[4]).to.contain.text("Two");
        expect(numbers[3]).to.contain.text("Three");
        expect(numbers[2]).to.contain.text("Four");
        expect(numbers[1]).to.contain.text("Five");
        expect(numbers[0]).to.contain.text("Six");
      })
    })
  });
});