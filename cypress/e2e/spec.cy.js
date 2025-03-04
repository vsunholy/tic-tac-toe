describe('Tic Tac Toe testing', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173');
  });
  it('H1 should be visible', () => {
    cy.contains('Tic Tac Toe').should('be.visible');
  });

  it('Should board be empty and X first player', () => {
    cy.get('[data-testid="status"]').should('have.text', 'Next player: X');
    cy.get('.square').should('have.length', 9);
    cy.get('.square').each($square => {
      cy.wrap($square).should('be.empty');
    });
  });

  it('should players move alternately', () => {
    cy.get('.square').eq(0).click();
    cy.get('.square').eq(0).should('have.text', 'X');
    cy.get('[data-testid="status"]').should('have.text', 'Next player: O');
    cy.get('.square').eq(1).click();
    cy.get('.square').eq(1).should('have.text', 'O');
    cy.get('[data-testid="status"]').should('have.text', 'Next player: X');
    cy.get('.square').eq(5).click();
    cy.get('.square').eq(5).should('have.text', 'X');
    cy.get('[data-testid="status"]').should('have.text', 'Next player: O');
    cy.get('.square').eq(8).click();
    cy.get('.square').eq(8).should('have.text', 'O');
    cy.get('[data-testid="status"]').should('have.text', 'Next player: X');

  });

  it('should declare winner', () => {
    cy.get('.square').eq(0).click(); //x
    cy.get('.square').eq(1).click();// 0
    cy.get('.square').eq(3).click();// x
    cy.get('.square').eq(4).click();// 0
    cy.get('.square').eq(6).click();// x
    cy.get('[data-testid="status"]').should('have.text', 'Winner: X');
  });

  it('Should game reset', () => {
    cy.get('.square').eq(0).click(); //x
    cy.get('.square').eq(1).click();// 0
    cy.get('.square').eq(3).click();// x
    cy.get('.square').eq(4).click();// 0
    cy.get('.square').eq(6).click();// x
    cy.get('[data-testid="status"]').should('have.text', 'Winner: X');
    cy.contains('Reset Game').click();
    cy.get('.square').each($square => {
      cy.wrap($square).should('be.empty');
    });
    cy.get('[data-testid="status"]').should('have.text', 'Next player: X');
  });
})