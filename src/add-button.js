const addButton = () => {
  const addButton = document.createElement('button')
  addButton.classList.add('button')
  addButton.classList.add('add-button')
  addButton.innerHTML = '<span class="material-symbols-outlined">add</span><p>Add Project</p>'
  return addButton
}

export default addButton