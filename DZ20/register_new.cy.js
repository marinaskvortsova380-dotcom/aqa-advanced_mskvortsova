import RegisterForm from './registerForm_new.js';

describe('Register Form Verifications', () => {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.contains('button', 'Sign up').click();
    });

    it('should Verify that error message is displayed when field name is empty', () => {
        RegisterForm.fieldName.focus().blur();
        RegisterForm.errorMessage.should('have.text', 'Name required');
    });

    it('should verify that error message is displayed when field name has wrong length', () => {
        RegisterForm.fieldName.type('a');
        RegisterForm.fieldName.blur();
        RegisterForm.errorMessage.should('have.text', 'Name has to be from 2 to 20 characters long');
    });

    it('should verify that error message is displayed when wrong data entered in the field name', () => {
        RegisterForm.fieldName.focus().blur();
        RegisterForm.fieldName.type('a1*)*()_+)<>');
        RegisterForm.errorMessage.should('have.text', 'Name is invalid');
    });

    it('should verify that error message is displayed with border color red when wrong data entered in the field name', () => {
        RegisterForm.fieldName.focus().blur();
        RegisterForm.fieldName.type('aaaaaaaaaaaaaaaaaaaaaaaaaa');
        RegisterForm.fieldName.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('should Verify that error message is displayed when field last name is empty', () => {
        RegisterForm.fieldLastName.focus().blur();
        RegisterForm.errorMessageLastName.should('have.text', 'Last name required');
    });

    it('should verify that error message is displayed when field last name has wrong length', () => {
        RegisterForm.fieldLastName.type('a');
        RegisterForm.fieldLastName.blur();
        RegisterForm.errorMessageLastName.should('have.text', 'Last name has to be from 2 to 20 characters long');
    });

    it('should verify that error message is displayed when wrong data entered in the field last name', () => {
        RegisterForm.fieldLastName.focus().blur();
        RegisterForm.fieldLastName.type('a1*)*()_+)<>');
        RegisterForm.errorMessageLastName.should('have.text', 'Last name is invalid');
    });

    it('should verify that error message is displayed with border color red when wrong data entered in the field last name', () => {
        RegisterForm.fieldLastName.focus().blur();
        RegisterForm.fieldLastName.type('aaaaaaaaaaaaaaaaaaaaaaaaaa');
        RegisterForm.fieldLastName.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('should verify that error message is displayed when field email is entered wrong', () => {
        RegisterForm.fieldEmail.focus().blur();
        RegisterForm.fieldEmail.type('a*%T^#!FHHHH');
        RegisterForm.errorMessageEmail.should('have.text', 'Email is incorrect');
    });

    it('should verify that error message is displayed when field email is empty', () => {
        RegisterForm.fieldEmail.focus().blur();
        RegisterForm.errorMessageEmail.should('have.text', 'Email required');
    });

    it('should verify that error message is displayed with border color red when wrong data entered in the field email', () => {
        RegisterForm.fieldEmail.focus().blur();
        RegisterForm.fieldEmail.type('aaaaaaaaaaaaaaaaaaaaaaaaaa');
        RegisterForm.fieldEmail.blur();
        RegisterForm.fieldEmail.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('should verify that error message is displayed when field password is empty', () => {
        RegisterForm.fieldPassword.focus().blur();
        RegisterForm.errorMessagePassword.should('have.text', 'Password required');
    });

    it('should verify that error message is displayed when field password has wrong data', () => {
        RegisterForm.fieldPassword.focus().blur();
        RegisterForm.fieldPassword.type('12345');
        RegisterForm.fieldPassword.blur();
        RegisterForm.errorMessagePassword.should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('should verify that error message is displayed when border color red when field password has wrong data', () => {
        RegisterForm.fieldPassword.focus().blur();
        RegisterForm.fieldPassword.type('123451234567890');
        RegisterForm.fieldPassword.blur();
        RegisterForm.fieldPassword.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('should verify that error message is displayed when field Re-enter password is empty', () => {
        RegisterForm.fieldReenterPassword.focus().blur();
        RegisterForm.errorMessageReenterPassword.should('have.text', 'Re-enter password required');
    });

    it('should verify that error message is displayed when field Re-enter password has wrong data', () => {
        RegisterForm.fieldReenterPassword.focus().blur();
        RegisterForm.fieldReenterPassword.type('Aaaassd12345');
        RegisterForm.fieldReenterPassword.blur();
        RegisterForm.errorMessageReenterPassword.should('have.text', 'Passwords do not match');
    });

    it('should verify that error message is displayed when border color red when field Re-enter password has wrong data', () => {
        RegisterForm.fieldReenterPassword.focus().blur();
        RegisterForm.fieldReenterPassword.type('123451234567890');
        RegisterForm.fieldReenterPassword.blur();
        RegisterForm.fieldReenterPassword.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('should verify that user can click the button register with filled all fields and the new user will be created', () => {
        const uniqueEmail = `aqa-marina${Date.now()}@test.com`;
        RegisterForm.fieldName.type('Marina');
        RegisterForm.fieldLastName.type('Galun');
        RegisterForm.fieldEmail.type(uniqueEmail);
        RegisterForm.fieldPassword.type('Aaaassd12345', { sensitive: true });
        RegisterForm.fieldReenterPassword.type('Aaaassd12345', { sensitive: true });
        RegisterForm.buttonRegister.click();
        cy.url().should('include', '/panel/garage');
    });

    it('should verify that the button is disabled if data incorrect', () => {
        RegisterForm.fieldName.type('a');
        RegisterForm.fieldLastName.type('a');
        RegisterForm.fieldEmail.type('aa');
        RegisterForm.fieldPassword.type('Aaaassd12345');
        RegisterForm.fieldReenterPassword.type('A');
        RegisterForm.buttonRegister.should('be.disabled');
    });
});
