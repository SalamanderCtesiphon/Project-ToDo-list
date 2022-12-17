function component() {
    const content = document.createElement('div');
    const header = document.createElement('div');
    const sidebar = document.createElement('div');
    const sidebarHeader = document.createElement('div');
    const body = document.createElement('div');
    const footer = document.createElement('div');
    const projectsBtn = document.createElement('button');
    const toDoBtn = document.createElement('button');

    
    content.classList.add('content');
    header.classList.add('header');
    sidebar.classList.add('sidebar');
    body.classList.add('body');
    footer.classList.add('footer');
    projectsBtn.classList.add('projectsBtn');
    toDoBtn.classList.add('toDoBtn');
    sidebarHeader.classList.add('sidebarHeader');

    sidebar.appendChild(sidebarHeader);
    sidebar.appendChild(projectsBtn);
    body.appendChild(toDoBtn);

    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(body);
    content.appendChild(footer);

    header.textContent = 'To Do List';
    sidebarHeader.textContent = 'Projects';
    footer.textContent = `SeamusQuixote 2022`;
    projectsBtn.textContent = 'Add New Project';
    toDoBtn.textContent = 'Add New To Do';


    document.body.appendChild(content);
  }
  
  export { component}