import {mapProjectFromApiToVm} from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('./pods/project/project.mapper', () => {
    it('should return empty project when feeding null value', () => {
        // Arrange
        const project = null;

        // Act
        const result = mapProjectFromApiToVm(project);

        // Assert
        expect(result).toEqual(viewModel.createEmptyProject());
    });

    it('should return empty project when feeding undefined value', () => {
        // Arrange
        const project = undefined;

        // Act
        const result = mapProjectFromApiToVm(project);

        // Assert
        expect(result).toEqual(viewModel.createEmptyProject());
    });

    it('should return expected result but feeding null employee list', () => {
        // Arrange
        const project: apiModel.Project = {
            id: '1',
            name: 'Primer proyecto',
            isActive: true,
            comments: 'Comentario del proyecto',
            externalId: '1234',
            employees: null,
        };

        const expectedResult: viewModel.Project = {
            id: '1',
            name: 'Primer proyecto',
            isActive: true,
            comments: 'Comentario del proyecto',
            externalId: '1234',
            employees: [],
        };

        // Act
        const result = mapProjectFromApiToVm(project);

        // Assert
        expect(result).toEqual(expectedResult);
    });


    it('should return expected result but feeding undefined employee list', () => {
        // Arrange
        const project: apiModel.Project = {
            id: '1',
            name: 'Primer proyecto',
            isActive: true,
            comments: 'Comentario del proyecto',
            externalId: '1234',
            employees: undefined,
        };

        const expectedResult: viewModel.Project = {
            id: '1',
            name: 'Primer proyecto',
            isActive: true,
            comments: 'Comentario del proyecto',
            externalId: '1234',
            employees: [],
        };

        // Act
        const result = mapProjectFromApiToVm(project);

        // Assert
        expect(result).toEqual(expectedResult);
    });


  it('should return expected result feeding correct values', () => {
        // Arrange
        const project: apiModel.Project = {
            id: '1',
            name: 'Primer proyecto',
            isActive: true,
            comments: 'Comentario del proyecto',
            externalId: '1234',
            employees: [
                {
                    id: '1',
                    employeeName: 'Andrés Gomez',
                    isAssigned: true,
                },
                {
                    id: '2',
                    employeeName: 'Francisco Ruiz',
                    isAssigned: false,
                },
            ],
        };

        const expectedResult: viewModel.Project = {
            id: '1',
            name: 'Primer proyecto',
            isActive: true,
            comments: 'Comentario del proyecto',
            externalId: '1234',
            employees: [
                {
                    id: '1',
                    employeeName: 'Andrés Gomez',
                    isAssigned: true,
                },  
                {
                    id: '2',
                    employeeName: 'Francisco Ruiz',
                    isAssigned: false,
                },
            ],
        };

        // Act
        const result = mapProjectFromApiToVm(project);

        // Assert
        expect(result).toEqual(expectedResult);
    });
});