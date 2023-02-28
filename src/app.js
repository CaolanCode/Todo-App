import {createUI} from './ui.js'
import './styles/style.css'


// google symbol link to html head
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0"
document.head.appendChild(link)

document.body.appendChild(createUI())