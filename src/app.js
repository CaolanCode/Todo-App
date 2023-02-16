import header from './header'
import './styles/style.css'
import menu from './menu'

//create elements
const container = document.createElement('div')
container.classList.add('container')

// append elements
container.appendChild(header())
container.appendChild(menu())
document.body.appendChild(container)
