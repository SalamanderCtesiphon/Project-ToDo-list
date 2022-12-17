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
  selectProject.addEventListener('click', () => {
      if (body.firstChild) {
        body.removeChild(body.firstChild);
        body.appendChild(createToDoForm(newProject));
      } else {
        body.appendChild(createToDoForm(newProject));
      }

  });
}

function createToDoForm(project) {
  const projectTitle = document.createElement('div');
  projectTitle.textContent = project.name;
  const formTitle = document.createElement('div');
  formTitle.textContent = 'Create New To Do';
  const form = document.createElement('form');
  const name = document.createElement('input');
  const dueDate = document.createElement('input');
  const priority = document.createElement('input');
  const notes = document.createElement('input');
  const submit = document.createElement('button');

  form.appendChild(projectTitle);
  form.appendChild(formTitle);
  form.appendChild(name);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(notes);
  form.appendChild(submit);

  name.placeholder = 'Name';
  dueDate.placeholder = 'Due Date';
  priority.placeholder = 'Priority';
  notes.placeholder = 'Notes';
  submit.textContent = 'Submit';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newToDo = new ToDo(
      name.value,
      dueDate.value,
      priority.value,
      notes.value
    );
    const body = document.querySelector('.body');
    project.toDoList.push(newToDo);

    document.createElement('div').textContent = ` name: ${newToDo.name}`;
    document.createElement('div').textContent = ` dueDate: ${newToDo.dueDate}`;
    document.createElement('div').textContent = ` priority: ${newToDo.priority}`;
    document.createElement('div').textContent = ` notes: ${newToDo.notes}`;
    body.appendChild(form);

  });

  return form;
    
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
