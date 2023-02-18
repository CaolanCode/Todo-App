import addButton from "./add-button"

const menu = () => {
  const panel = document.createElement('div')
  panel.classList.add('menu-container')
  const title = document.createElement('div')
  title.classList.add('project-title')
  title.innerText = 'Projects'
  panel.appendChild(title)
  panel.appendChild(addButton())
  return panel
}

export default menu