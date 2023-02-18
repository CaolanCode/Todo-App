const menu = () => {
  const panel = document.createElement('div')
  panel.classList.add('menu-container')
  const title = document.createElement('div')
  title.classList.add('project-title')
  title.innerText = 'Projects'
  const addButton = document.createElement('button')
  addButton.classList.add('add-button')
  addButton.innerHTML = '<span class="material-symbols-outlined">add</span><p>Add Project</p>'
  panel.appendChild(title)
  panel.appendChild(addButton)
  return panel
}

export default menu