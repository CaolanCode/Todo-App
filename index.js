const Project = (name) => {
  const list = []
  const getID = () => createID()
  const getName = () => name
  const getList = () => list
  return {getID,
          getName, 
          getList,
          addTask(task) {
            list.push(task)
          }}
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
