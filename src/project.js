export const Project = (name) => {
  let list = []
  const getID = () => createID()
  const getName = () => name
  const getList = () => list
  return {getID,
          getName, 
          getList,
          addTask(task) {
            list.push(task)
          },
          deleteTask(task) {
            list = list.filter(item => item !== task)
          }
        }
}

export const Task = (title, description, dueDate , priority) => {
  const getID = () => createID()
  const getTitle = () => title
  const getDescription = () => description
  const getDueDate = () => dueDate
  const getPriority = () => priority
  return {getID, getTitle, getDescription, getDueDate, getPriority}
}

export const ProjectList = () => {
  let projects = []
  
  const addProject = (project) => {
    projects.push(project)
  }
  const getProjectByName = (name) => {
    return projects.find(project => project.getName() === name || null)
  } 
  const getProjects = () => projects
  const removeProject = (project) => {
    projects = projects.filter(item => item !== project)
  }

  return {
    addProject,
    getProjectByName,
    getProjects,
    removeProject
  }
}

function createID() {
  return Math.random().toString(16).substring(2)
}
