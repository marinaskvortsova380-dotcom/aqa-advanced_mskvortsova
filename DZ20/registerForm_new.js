/// <reference types="cypress" />

class RegisterForm {
    get fieldName() {
        return cy.get('input[name="name"]');
    }
    
    get errorMessage() {
        return cy.get('input[name="name"]').next('.invalid-feedback');
    }

    fieldByName(name) {
        return cy.get(`input[name="${name}"]`);
    }

    clickField(fieldName) {
        this.fieldByName(fieldName).click();
    }

    clickNameField() {
        this.fieldName.click();
    }

    blurFieldName() {
        this.fieldName.blur();
    }

    typeFieldName(text) {
        this.fieldName.type(text);
    }

    verifyErrorMessage(errorMessage) {
        this.errorMessage.should('contain.text', errorMessage);
    }   
    get fieldLastName() {
        return cy.get('input[name="lastName"]');
    }

    get errorMessageLastName() {
        return cy.get('input[name="lastName"]').next('.invalid-feedback');
    }

    get fieldEmail() {
        return cy.get('input[name="email"]');
    }

    get errorMessageEmail() {
        return cy.get('input[name="email"]').next('.invalid-feedback');
    }
    get fieldPassword() {
        return cy.get('input[name="password"]');
    }
    get errorMessagePassword() {
        return cy.get('input[name="password"]').next('.invalid-feedback');
    }
   
    get fieldReenterPassword() {
        return cy.get('input[name="repeatPassword"]');
    }
    get errorMessageReenterPassword() {
        return cy.get('input[name="repeatPassword"]').next('.invalid-feedback');
    }
    get buttonRegister() {
        return cy.contains('button','Register');
    }
}

export default new RegisterForm();
