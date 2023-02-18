import header from './header'
import './styles/style.css'
import menu from './menu'
import link from './google-link'
import title from './title'
import createTitle from './create-title'
import removeTitleInput from './remove-title-input'

//create elements
const container = document.createElement('div')
container.classList.add('container')

// append elements
container.appendChild(header())
container.appendChild(menu())
document.head.appendChild(link())
document.body.appendChild(container)

// elements
const addProjectButton = document.querySelector('.add-project')

// functions

function getTitleInput() {
  const inputTitle = document.getElementById('title-input')
  if(inputTitle) {
    removeTitleInput()
    return
  }
  title()
  const sumbitButton = document.querySelector('.submit-button')
  sumbitButton.addEventListener('click', function(){
    createTitle()
    removeTitleInput()
  })
  const cancelButton = document.querySelector('.cancel-button')
  cancelButton.addEventListener('click', function(){
    removeTitleInput()
  })
}


// listeners
addProjectButton.addEventListener('click', getTitleInput)