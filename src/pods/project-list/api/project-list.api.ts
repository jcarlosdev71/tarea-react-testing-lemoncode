import { Project } from './project-list.api-model';
import { mockProjectList } from './project-list.mock-data';

let projectList = [...mockProjectList];

export const getProjectList = async (): Promise<Project[]> => {
  try {
    const response = await fetch('/api/projects');
    if (!response.ok) {
      return mockProjectList;
    }
    return response.json();
  } catch (error) {
    return mockProjectList;
  }
};

export const deleteProject = async (id: string): Promise<boolean> => {
  projectList = projectList.filter(p => p.id !== id);
  return true;
};
