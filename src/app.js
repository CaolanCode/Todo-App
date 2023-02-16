import header from './header'

//create elements
const container = document.createElement('div')
container.classList.add('container')

// append elements
container.appendChild(header())
document.appendChild(container)
