import SignInForm from './SignInForm_new.js';
import RegisterForm from './registerForm_new.js';

describe('SignIn Form Verifications', () => {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
    });

    it('should verify that error message is displayed when email field is empty', () => {
        cy.get('button.header_signin').click();
        SignInForm.clickEmailField();
        SignInForm.blurEmailField();
        SignInForm.verifyErrorMessage('Email required');
    });

    it('should verify that error message is displayed when password field is empty', () => {
        cy.get('button.header_signin').click();
        SignInForm.clickPasswordField();
        SignInForm.blurPasswordField();
        SignInForm.verifyPasswordErrorMessage('Password required');
    });

    it('should verify that user can register and then login', () => {
        const uniqueEmail = `aqa-marina${Date.now()}@test.com`;
        const password = 'Aaaassd12345';

        // Register new user
        cy.contains('button', 'Sign up').click();
        RegisterForm.fieldName.type('Marina');
        RegisterForm.fieldLastName.type('Galun');
        RegisterForm.fieldEmail.type(uniqueEmail);
        RegisterForm.fieldPassword.type(password, { sensitive: true });
        RegisterForm.fieldReenterPassword.type(password, { sensitive: true });
        RegisterForm.buttonRegister.click();
        cy.url().should('include', '/panel/garage');

        // Logout
        cy.get('#userNavDropdown').click();
        cy.contains('button.dropdown-item', 'Logout').click();

        // Login using custom command
        cy.login(uniqueEmail, password);
        cy.url().should('include', '/panel/garage');
    });
});
