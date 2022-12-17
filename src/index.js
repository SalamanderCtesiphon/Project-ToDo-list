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

  class ToDo {
    constructor(name, dueDate, priority, notes) {
      this.name = name;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
    }
  }

  const projectList = [];
