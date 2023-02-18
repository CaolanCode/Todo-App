import addProject from "./add-project"

const menu = () => {
  const panel = document.createElement('div')
  panel.classList.add('menu-container')
  const title = document.createElement('div')
  title.classList.add('project-title')
  title.innerText = 'Projects'
  const titleContainer = document.createElement('div')
  titleContainer.classList.add('title-container')
  panel.appendChild(title)
  panel.appendChild(addProject())
  panel.appendChild(titleContainer)
  return panel
}

export default menu