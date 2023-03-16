import {Project, Task, ProjectList} from './project.js'

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
  projectButton.addEventListener('click', () => {
    if(removeProjectContainer()) {
      return
    }
    const addProjectContainer = document.createElement('div')
    addProjectContainer.classList.add('add-project-container')
    const projectInput = document.createElement('input')
    projectInput.classList.add('project-input')
    projectInput.placeholder = 'Enter project'
    const projectSumbit = document.createElement('button')
    projectSumbit.classList.add('submit-btn')
    projectSumbit.innerText = 'Submit'
    projectSumbit.addEventListener('click', createProject)
    const projectCancel = document.createElement('button')
    projectCancel.classList.add('cancel-btn')
    projectCancel.innerText = 'Cancel'
    projectCancel.addEventListener('click', () => {
      if(removeProjectContainer()) {
        return
      }
    })
    addProjectContainer.appendChild(projectInput)
    addProjectContainer.appendChild(projectSumbit)
    addProjectContainer.appendChild(projectCancel)
    sideBar.appendChild(addProjectContainer)
  })
  sideBar.appendChild(projectButton)
  // task container
  const taskContainer = document.createElement('div')
  taskContainer.classList.add('task-container')
  const taskHeading = document.createElement('div')
  taskHeading.classList.add('task-heading')
  taskHeading.innerText = 'List'
  const addTask = document.createElement('button')
  addTask.classList.add('add-task')
  addTask.innerHTML = '<span class="material-symbols-outlined">add</span>'
  taskHeading.appendChild(addTask)
  taskContainer.appendChild(taskHeading)
  // append elements
  container.appendChild(header)
  container.appendChild(sideBar)
  container.appendChild(taskContainer)
  
  return container
}

const removeProjectContainer = (() => {
  const checkForContainer = document.querySelector('.add-project-container')
  if(checkForContainer) {
    checkForContainer.remove()
    return true
  }
  return false
})

const createProject = (event) => {
  event.preventDefault()
  const projectList = ProjectList()
  const input = document.querySelector('.project-input')
  const projectName = input.value
  const project = Project(projectName)
  removeProjectContainer()
  projectList.addProject(project)
  projectOnSidebar(projectList)
}

const projectOnSidebar = (projectList) => {
  const projects = projectList.getProjects()
  const sidebar = document.querySelector('.side-bar')
  for(const projectId in projects) {
    const project = projects[projectId]
    const projectBox = document.createElement('div')
    projectBox.innerText = project.getName()
    projectBox.classList.add('project-box')
    sidebar.appendChild(projectBox)
  }
}