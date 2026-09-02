/// <reference types="cypress" />
class SignInForm {
    get emailField() {
        return cy.get('input[name="email"]');
    }
    get errorMessage() {
        return cy.get('input[name="email"]').next('.invalid-feedback');
    }
    fieldByEmail(email) {
        return cy.get(`input[name="${email}"]`);
    }
    clickField(email) {
        this.fieldByEmail(email).click();
    }
    clickEmailField() {
        this.emailField.click();
    }
    blurEmailField() {
        this.emailField.blur();
    }
    typeEmailField(email) {
        this.emailField.type(email);
    }
    verifyErrorMessage(errorMessage) {
        this.errorMessage.should('have.text', errorMessage);
    }

    get passwordField() {
        return cy.get('input[name="password"]');
    }
    get errorMessagePassword() {
        return cy.get('input[name="password"]').next('.invalid-feedback');
    }
    fieldByPassword(password) {
        return cy.get(`input[name="${password}"]`);
    }
    clickFieldByPassword(password) {
        this.fieldByPassword(password).click();
    }
    clickPasswordField() {
        this.passwordField.click();
    }
    blurPasswordField() {
        this.passwordField.blur();
    }
    typePasswordField(password) {
        this.passwordField.type(password);
    }
    verifyPasswordErrorMessage(errorMessage) {
        this.errorMessagePassword.should('have.text', errorMessage);
    }
    
    get loginButton() {
        return cy.contains('button', /^Log\s*in$/i);
    }
}
export default new SignInForm();
