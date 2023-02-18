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
