import header from './header'
import './styles/style.css'
import menu from './menu'
import link from './google-link'
import title from './title'

//create elements
const container = document.createElement('div')
container.classList.add('container')

// append elements
container.appendChild(header())
container.appendChild(menu())
document.head.appendChild(link())
document.body.appendChild(container)

// elements
const addButton = document.querySelector('.add-button')

// functions
function removeTitleInput() {
  const titleContainer = document.querySelector('.title-container')
  titleContainer.remove()
  return
}
function getTitleInput() {
  const inputTitle = document.getElementById('title')
  if(inputTitle) {
    removeTitleInput()
    return
  }
  title()
}


// listeners
addButton.addEventListener('click', getTitleInput)
