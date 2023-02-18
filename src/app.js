import header from './header'
import './styles/style.css'
import menu from './menu'
import link from './google-link'

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
const menuContainer = document.querySelector('.menu-container')

function getTitle() {
  const titleContainer = document.createElement('div')
  titleContainer.classList.add('title-container')
  // input
  const input = document.createElement('input')
  input.type = 'text'
  input.name = 'title'
  input.id = 'title'
  input.placeholder = 'Enter title'
  // buttons
  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('button-container')
  const sumbitButton = document.createElement('button')
  sumbitButton.classList.add('submit-button')
  sumbitButton.innerText = 'Submit'
  const cancelButton = document.createElement('button')
  cancelButton.classList.add('cancel-button')
  cancelButton.innerText = 'Cancel'
  buttonContainer.appendChild(sumbitButton)
  buttonContainer.appendChild(cancelButton)
  // append
  titleContainer.appendChild(input)
  titleContainer.appendChild(buttonContainer)
  menuContainer.appendChild(titleContainer)
}


// listeners
addButton.addEventListener('click', getTitle)
