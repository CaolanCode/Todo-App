const title = () => {
  const menuContainer = document.querySelector('.menu-container')
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
  cancelButton.addEventListener('click', function(){
    const titleContainer = document.querySelector('.title-container')
    titleContainer.remove()
  })
  buttonContainer.appendChild(sumbitButton)
  buttonContainer.appendChild(cancelButton)
  // append
  titleContainer.appendChild(input)
  titleContainer.appendChild(buttonContainer)
  menuContainer.appendChild(titleContainer)
  return menuContainer
}

export default title