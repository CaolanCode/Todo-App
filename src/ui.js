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
  const taskTitle = document.createElement('div')
  taskTitle.classList.add('project-title')
  taskTitle.innerText = 'List'
  const addTaskBtn = document.createElement('button')
  addTaskBtn.classList.add('add-task')
  addTaskBtn.innerHTML = '<span class="material-symbols-outlined">add</span>'
  addTaskBtn.addEventListener('click', addTask)
  taskHeading.appendChild(taskTitle)
  taskHeading.appendChild(addTaskBtn)
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
    projectBox.addEventListener('click', () => {
      displayList(project)
    })
    sidebar.appendChild(projectBox)
  }
}

const displayList = (project) => {
  const header = document.querySelector('.project-title')
  const mainContainer = document.querySelector('.task-container')
  header.innerText = project.getName()
  const tasks = project.getList()
  for(const taskId in tasks) {
    const task = tasks[taskId]
    const taskBox = document.createElement('div')
    taskBox.classList.add('task-box')
    // task title
    const title = document.createElement('div')
    title.innerText = task.getTitle()
    title.classList.add('task-name')
    // task description
    const description = document.createElement('div')
    description.innerText = task.getDescription()
    description.classList.add('task-description')
    taskBox.appendChild(title)
    taskBox.appendChild(description)
    mainContainer.appendChild(taskBox)
  }
}

const addTask = () => {
  const mainContainer = document.querySelector('.task-container')
  const addTaskContainer = document.createElement('div')
  addTaskContainer.classList.add('task-input-container')
  // title
  const titleLabel = document.createElement('label')
  titleLabel.innerText = 'Title: '
  titleLabel.classList.add('task-label')
  const titleInput = document.createElement('input')
  titleInput.classList.add('task-input')
  // description
  const descriptionLabel = document.createElement('label')
  descriptionLabel.innerText = 'Description: '
  descriptionLabel.classList.add('task-label')
  const descriptionInput = document.createElement('textarea')
  descriptionInput.classList.add('task-input')
  // date 
  const dateLabel = document.createElement('label')
  dateLabel.innerText = 'Date: '
  dateLabel.classList.add('task-label')
  const dateInput = document.createElement('input')
  dateInput.classList.add('task-input')
  dateInput.type = 'date'
  // priority
  const priorityLabel = document.createElement('label')
  priorityLabel.innerText = 'Priority: '
  priorityLabel.classList.add('task-label')
  const priorityInput = document.createElement('input')
  priorityInput.classList.add('task-input')
  // buttons
  const taskBtnContainer = document.createElement('div')
  taskBtnContainer.classList.add('task-btn-container')
  const taskSmbtBtn = document.createElement('button')
  taskSmbtBtn.classList.add('submit-btn')
  taskSmbtBtn.innerText = 'Submit'
  const taskCnclBtn = document.createElement('button')
  taskCnclBtn.classList.add('cancel-btn')
  taskCnclBtn.innerText = 'Cancel'
  taskBtnContainer.appendChild(taskSmbtBtn)
  taskBtnContainer.appendChild(taskCnclBtn)
  addTaskContainer.appendChild(titleLabel)
  addTaskContainer.appendChild(titleInput)
  addTaskContainer.appendChild(descriptionLabel)
  addTaskContainer.appendChild(descriptionInput)
  addTaskContainer.appendChild(dateLabel)
  addTaskContainer.appendChild(dateInput)
  addTaskContainer.appendChild(priorityLabel)
  addTaskContainer.appendChild(priorityInput)
  addTaskContainer.appendChild(taskBtnContainer)
  mainContainer.appendChild(addTaskContainer)
}


