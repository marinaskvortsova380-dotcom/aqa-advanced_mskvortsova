import signInPage from './21SignIn';
import garagePage from './21GaragePage';
import expensesPage from './21ExpensesPage';

describe('Garage & Fuel Expenses with POM', () => {
  beforeEach(() => {
    signInPage.open();
    signInPage.login(
      Cypress.env('user1Email'),
      Cypress.env('user1Password')
    );
    cy.url().should('include', '/panel/garage');
  });

  it('should add a car in garage', () => {
    const brand = 'Audi';
    const model = 'TT';
    const mileage = '100';

    garagePage.addCar(brand, model, mileage);

    garagePage.carItems.first().should('be.visible');
    garagePage.carItems.first().should('contain', `${brand} ${model}`);
  });

  it('should add fuel expense to the created car', () => {
    const brand = 'BMW';
    const model = '3';
    const mileage = '200';
    const expenseMileage = '250';
    const liters = '30';
    const totalCost = '60';

    // 1. Add car
    garagePage.addCar(brand, model, mileage);
    garagePage.carItems.first().should('contain', `${brand} ${model}`);

    // 2. Add expense for the car
    garagePage.openAddExpenseModalForFirstCar();
    expensesPage.addExpense(expenseMileage, liters, totalCost);

    // 3. Verify in expenses page
    expensesPage.open();
    cy.url().should('include', '/panel/expenses');
    expensesPage.expensesTableRows.first().should('be.visible');
    expensesPage.expensesTableRows.first().should('contain', liters);
  });
});
