import {Project, Task, ProjectList} from './project.js'
import {format} from 'date-fns'

export const createUI = () => {
  // container
  const container = document.createElement('div')
  container.classList.add('container')
  // create instance of ProjectList
  const projectList = ProjectList()
  // header
  const header = document.createElement('div')
  header.classList.add('header')
  header.innerText = 'Todo App'
  // sidebar
  const sideBar = document.createElement('div')
  sideBar.classList.add('side-bar')
  const projectTitleContainer = document.createElement('div')
  projectTitleContainer.classList.add('project-title-container')
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
    projectSumbit.addEventListener('click', (event) => {
      const projectName = projectInput.value
      if(!projectName) return
      createProject(projectName, projectList, event)
    })
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
  sideBar.appendChild(projectTitleContainer)
  // task container
  const taskContainer = document.createElement('div')
  taskContainer.classList.add('display-container')
  const taskTilesContainer = document.createElement('div')
  taskTilesContainer.classList.add('task-display-container')
  const taskHeading = document.createElement('div')
  taskHeading.classList.add('task-heading')
  const taskTitle = document.createElement('div')
  taskTitle.classList.add('project-title')
  taskTitle.innerText = 'List'
  const addTaskBtn = document.createElement('button')
  addTaskBtn.classList.add('add-task')
  addTaskBtn.innerHTML = '<span class="material-symbols-outlined">add</span>'
  addTaskBtn.addEventListener('click', () => {
    const projectName = taskTitle.innerText
    const project = projectList.getProjectByName(projectName)
    if(!project) {
      const makeProjectMSG = document.createElement('div')
      makeProjectMSG.innerText = "Add a project"
      makeProjectMSG.classList.add('add-project-message')
      taskContainer.appendChild(makeProjectMSG)
      setTimeout(() => {
        makeProjectMSG.style.display = 'none'
      }, 2000)
      return
    }
    addTask(project)
  })
  taskHeading.appendChild(taskTitle)
  taskHeading.appendChild(addTaskBtn)
  taskContainer.appendChild(taskHeading)
  taskContainer.appendChild(taskTilesContainer)
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

const createProject = (name, projectList, event = null) => {
  if(event) {
    event.preventDefault()
  }
  const project = Project(name)
  removeProjectContainer()
  projectList.addProject(project)
  projectOnSidebar(projectList)
}

const projectOnSidebar = (projectList) => {
  const projects = projectList.getProjects()
  const projectTitleContainer = document.querySelector('.project-title-container')
  projectTitleContainer.innerHTML = ""
  for(const projectId in projects) {
    const project = projects[projectId]
    const projectBox = document.createElement('div')
    projectBox.classList.add('project-box')
    const projectButton = document.createElement('button')
    projectButton.classList.add('project-btn')
    projectButton.innerText = project.getName()
    projectButton.addEventListener('click', () => {
      displayList(project)
    })
    projectBox.appendChild(projectButton)
    const deleteProjectBtn = document.createElement('button')
    deleteProjectBtn.classList.add('delete-button')
    deleteProjectBtn.innerHTML = "<span class='material-symbols-outlined'>close</span>"
    deleteProjectBtn.addEventListener('click', () => {
      projectList.removeProject(project)
      projectOnSidebar(projectList)
      clearTasks()
    })
    projectBox.appendChild(deleteProjectBtn)
    projectTitleContainer.appendChild(projectBox)
  }
}

const displayList = (project) => {
  const header = document.querySelector('.project-title')
  const displayContainer = document.querySelector('.task-display-container')
  displayContainer.innerHTML = ""
  header.innerText = project.getName()
  const tasks = project.getList()
  for(const taskId in tasks) {
    const task = tasks[taskId]
    const taskBox = document.createElement('div')
    taskBox.classList.add('task-box')
    // task title
    const titleHeading = document.createElement('div')
    titleHeading.innerText = "Title:"
    titleHeading.classList.add('task-title')
    const titleItem = document.createElement('div')
    titleItem.innerText = task.getTitle()
    titleItem.classList.add('task-item')
    titleItem.classList.add('title-item')
    // delete task button
    const deleteTaskBtn = document.createElement('button')
    deleteTaskBtn.innerHTML = "<span class='material-symbols-outlined'>close</span>"
    deleteTaskBtn.classList.add("delete-button")
    deleteTaskBtn.addEventListener('click', () => {
      project.deleteTask(task)
      displayList(project)
    })
    titleItem.appendChild(deleteTaskBtn)
    // task description
    const descriptionHeading = document.createElement('div')
    descriptionHeading.innerText = "Description:"
    descriptionHeading.classList.add('task-title')
    const descriptionItem = document.createElement('div')
    descriptionItem.innerText = task.getDescription()
    descriptionItem.classList.add('task-item')
    // date
    const dateHeading = document.createElement('div')
    dateHeading.innerText = "Date:"
    dateHeading.classList.add('task-title')
    const dateItem = document.createElement('div')
    dateItem.innerText = task.getDueDate()
    dateItem.classList.add('task-item')
    // priority
    if(task.getPriority() === "High") {
      taskBox.style.border = "5px solid #FA1304"
    } else if(task.getPriority() === "Medium") {
      taskBox.style.border = "5px solid orange"
    } else {
      taskBox.style.border = "5px solid yellow"
    }
    taskBox.appendChild(titleHeading)
    taskBox.appendChild(titleItem)
    taskBox.appendChild(descriptionHeading)
    taskBox.appendChild(descriptionItem)
    taskBox.appendChild(dateHeading)
    taskBox.appendChild(dateItem)
    displayContainer.appendChild(taskBox)
  }
}

const addTask = (project) => {
  if(removeTaskInputContainer()) {
    return
  }
  const displayContainer = document.querySelector('.task-display-container')
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
  let priority = "Low"
  const priorityLabel = document.createElement('label')
  priorityLabel.innerText = 'Priority: '
  priorityLabel.classList.add('task-label')
  const priorityInputContainer = document.createElement('div')
  priorityInputContainer.classList.add('task-input')
  priorityInputContainer.classList.add('task-input-radio')
  const priorityLowLabel = document.createElement('label')
  priorityLowLabel.innerText = 'Low:'
  priorityLowLabel.classList.add('priority-label')
  priorityLowLabel.htmlFor = "low-priority"
  const priorityInputLow = document.createElement('input')
  priorityInputLow.type = 'radio'
  priorityInputLow.id = 'low-priority'
  priorityInputLow.name = 'priority'
  priorityInputLow.addEventListener('change', () => {
    if(priorityInputLow.checked) {
      priority = "Low"
    }
  })
  priorityInputLow.classList.add('radio')
  const priorityMedLabel = document.createElement('label')
  priorityMedLabel.classList.add('priority-label')
  priorityMedLabel.innerText = 'Medium:'
  priorityMedLabel.htmlFor = "medium-priority"
  const priorityInputMedium = document.createElement('input')
  priorityInputMedium.type = 'radio'
  priorityInputMedium.classList.add('radio')
  priorityInputMedium.id = 'medium-priority'
  priorityInputMedium.name = 'priority'
  priorityInputMedium.addEventListener('change', () => {
    if(priorityInputMedium.checked) {
      priority = "Medium"
    }
  })
  const priorityHighLabel = document.createElement('label')
  priorityHighLabel.classList.add('priority-label')
  priorityHighLabel.innerText = 'High:'
  priorityHighLabel.htmlFor = "high-priority"
  const priorityInputHigh = document.createElement('input')
  priorityInputHigh.type = 'radio'
  priorityInputHigh.classList.add('radio')
  priorityInputHigh.id = 'high-priority'
  priorityInputHigh.name = 'priority'
  priorityInputHigh.addEventListener('change', () => {
    if(priorityInputHigh.checked) {
      priority = "High"
    }
  })
  priorityInputContainer.appendChild(priorityLowLabel)
  priorityInputContainer.appendChild(priorityInputLow)
  priorityInputContainer.appendChild(priorityMedLabel)
  priorityInputContainer.appendChild(priorityInputMedium)
  priorityInputContainer.appendChild(priorityHighLabel)
  priorityInputContainer.appendChild(priorityInputHigh)
  // buttons
  const taskBtnContainer = document.createElement('div')
  taskBtnContainer.classList.add('task-btn-container')
  const taskSmbtBtn = document.createElement('button')
  taskSmbtBtn.classList.add('submit-btn')
  taskSmbtBtn.innerText = 'Submit'
  taskSmbtBtn.addEventListener('click', () => {
    const title = titleInput.value
    const description = descriptionInput.value
    const formattedDate = format(new Date(dateInput.value), 'dd/MM/yyyy')
    const task = Task(title, description, formattedDate, priority)
    project.addTask(task)
    removeTaskInputContainer()
    displayList(project)
  })
  const taskCnclBtn = document.createElement('button')
  taskCnclBtn.classList.add('cancel-btn')
  taskCnclBtn.innerText = 'Cancel'
  taskCnclBtn.addEventListener('click', removeTaskInputContainer)
  taskBtnContainer.appendChild(taskSmbtBtn)
  taskBtnContainer.appendChild(taskCnclBtn)
  addTaskContainer.appendChild(titleLabel)
  addTaskContainer.appendChild(titleInput)
  addTaskContainer.appendChild(descriptionLabel)
  addTaskContainer.appendChild(descriptionInput)
  addTaskContainer.appendChild(dateLabel)
  addTaskContainer.appendChild(dateInput)
  addTaskContainer.appendChild(priorityLabel)
  addTaskContainer.appendChild(priorityInputContainer)
  addTaskContainer.appendChild(taskBtnContainer)
  displayContainer.appendChild(addTaskContainer)
}

const removeTaskInputContainer = () => {
  const container = document.querySelector('.task-input-container')
  if(container) {
    container.remove()
    return true
  }
  return false
}

const clearTasks = () => {
  const header = document.querySelector('.project-title')
  const displayContainer = document.querySelector('.task-display-container')
  displayContainer.innerHTML = ""
  header.innerText = 'List' 
}
