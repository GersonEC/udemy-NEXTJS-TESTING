import { generateNewBand } from '../../../__tests__/__mocks__/fakeData/newBand';
import { generateRandomId } from '../../../lib/features/reservations/utils';

it('displays correct heading when navigating to shows route', () => {
  cy.visit('/');
  cy.findByRole('button', { name: /shows/i }).click();
  cy.findByText(/upcoming shows/i).should('exist');
});

it.only('displays correct heading when navigating to bands route', () => {
  cy.visit('/');
  cy.findByRole('button', { name: /bands/i }).click();
  cy.findByText(/our illustrious Performers/i).should('exist');
});

it('displays correct band name for band route that existed at build time', () => {});

it('displays error for band not in db', () => {});

it('displays name for band that was not present at build time', () => {});
