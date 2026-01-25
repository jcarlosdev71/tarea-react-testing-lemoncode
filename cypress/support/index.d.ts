import { Project } from "../../src/pods/project-list/api/project-list.api-model";

declare global {
    namespace Cypress {
        interface Chainable {
            loadAndVistitProjectListPage(projectList: Project[]): Chainable<Element>;
        }
    }
}