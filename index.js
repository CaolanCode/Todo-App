const Project = (name) => {
  const id = createID()
  const getID = () => id
  const getName = () => name
  const getList = () => []
  return {getID, getName, getList}
}

function createID() {
  return Math.random().toString(16).substring(2)
}
