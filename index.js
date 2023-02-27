const Project = (name) => {
  const getID = () => createID()
  const getName = () => name
  const getList = () => []
  return {getID, getName, getList}
}

const Task = (title, description) => {
  const getID = () => createID()
  const getTitle = () => title
  const getDescription = () => description
  return {getID, getTitle, getDescription}
}

function createID() {
  return Math.random().toString(16).substring(2)
}
