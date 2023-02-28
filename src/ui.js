export const createUI = () => {
  // container
  const container = document.createElement('div')
  container.classList.add('container')
  // header
  const header = document.createElement('div')
  header.classList.add('header')
  header.innerText = 'Todo App'
  // sidebar
  const sideBar = document.createElement('div')
  sideBar.classList.add('side-bar')
  const projectButton = document.createElement('button')
  projectButton.classList.add('add-project-btn')
  projectButton.innerText = 'Add Project'
  sideBar.appendChild(projectButton)
  // task container
  const taskContainer = document.createElement('div')
  taskContainer.classList.add('task-container')
  // append elements
  container.appendChild(header)
  container.appendChild(sideBar)
  container.appendChild(taskContainer)
  
  return container
}

