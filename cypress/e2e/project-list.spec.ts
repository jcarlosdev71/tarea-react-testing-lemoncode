import { Project } from '../../src/pods/project-list/api/project-list.api-model';

describe('Project list specs', () => {
  it('should fetch two projects and display them in the list', () => {
    // Arrange
    const projectList: Project[] = [
      {
        id: '1',
        isActive: true,
        code: '23212',
        name: 'Bankia',
        lastDateIncurred: '02/02/2020',
        creationDate: '01/08/2018',
      },
      {
        id: '2',
        isActive: true,
        code: '4323',
        name: 'Mapfre',
        lastDateIncurred: '05/02/2020',
        creationDate: '01/04/2018',
      },
    ];

    // Act
    cy.loadAndVistitProjectListPage(projectList);
    
    // Assert
    cy.get('tbody tr').should('have.length', 2);
  });
});

