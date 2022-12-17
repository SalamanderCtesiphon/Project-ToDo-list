import _ from 'lodash';
import './style.css';
import { component } from './loadPage';

component();


class Project {
  constructor(name) {
    this.name = name;
    this.toDoList = [];
  }
}

document.querySelector('.projectsBtn').addEventListener('click', createProject);

function createProject() {
  const projectName = prompt('Enter a project name');
  const newProject = new Project(projectName);
  const sidebar = document.querySelector('.sidebar');
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  const button = document.createElement('button');
  const selectProject = document.createElement('button');
  const body = document.querySelector('.body');

  selectProject.textContent = 'Select Project';
  projectList.push(newProject);
  sidebar.appendChild(ul);
  ul.appendChild(li);
  li.textContent = newProject.name;
  li.appendChild(button);
  li.appendChild(selectProject);
  button.textContent = 'Delete Project';
  button.addEventListener('click', () => {
    ul.removeChild(li);
    projectList.splice(projectList.indexOf(newProject), 1);
  });
}


class ToDo {
  constructor(name, dueDate, priority, notes) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

const projectList = [];
