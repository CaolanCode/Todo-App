const addProject = () => {
  const addButton = document.createElement('button')
  addButton.classList.add('project')
  addButton.classList.add('add-project')
  addButton.innerHTML = '<span class="material-symbols-outlined">add</span><p>Add Projects</p>'
  return addButton
}

export default addProject