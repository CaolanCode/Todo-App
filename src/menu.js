const menu = () => {
  const panel = document.createElement('div')
  panel.classList.add('menu-container')
  const addButton = document.createElement('button')
  addButton.classList.add('add-button')
  addButton.innerHTML = '<span class="material-symbols-outlined">add</span>'
  panel.appendChild(addButton)
  return panel
}

export default menu