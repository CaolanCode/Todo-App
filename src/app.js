import header from './header'
import './styles/style.css'

//create elements
const container = document.createElement('div')
container.classList.add('container')

// append elements
container.appendChild(header())
document.body.appendChild(container)
