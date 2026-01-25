describe('Login specs', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should user input has the focus when it clicks on it', () => {
    // Arrange
    cy.get('input[name="user"]').as('userInput');

    // Act
    cy.get('@userInput').click();
    
    // Assert
    cy.get('@userInput').should('have.focus');
  });

    it('should user and password in inputs elements', () => {
    // Arrange
    const user = "admin error";
    const password = "test error";
    cy.findByRole('textbox').as('userInput');
    cy.findByPlaceholderText('Contraseña').as('passwordInput');

    // Act
    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);

    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
  });

  it('should display error message for invalid credentials', () => {
    // Arrange
    const user = "admin error";
    const password = "test error";
    cy.findByRole('textbox').as('userInput');
    cy.findByPlaceholderText('Contraseña').as('passwordInput');
    cy.findByRole('button', { name: /login/i }).as('loginButton');

    // Act
    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.get('@loginButton').click();

    // Assert
    cy.contains('Usuario y/o password no válidos').should('be.visible');
  });

    it('should navigate to initial page when type valid credentials', () => {
    // Arrange
    const user = "admin";
    const password = "test";
    cy.findByRole('textbox').as('userInput');
    cy.findByPlaceholderText('Contraseña').as('passwordInput');
    cy.findByRole('button', { name: /login/i }).as('loginButton');

    // Act
    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.get('@loginButton').click();

    // Assert
    cy.url().should('eq', 'http://localhost:5173/#/submodule-list');
    cy.location('hash').should('eq', '#/submodule-list');
  });

});