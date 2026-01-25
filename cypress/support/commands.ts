import { Project } from "../../src/pods/project-list/api/project-list.api-model";

Cypress.Commands.add('loadAndVistitProjectListPage', (projectList: Project[]) =>  {
    cy.intercept('GET', '/api/projects', projectList).as('getProjects');
    cy.visit('/#/projects');
    cy.wait('@getProjects');
});