const title = () => {
  const menuContainer = document.querySelector('.menu-container')
  const inputContainer = document.createElement('div')
  inputContainer.classList.add('input-container')
  // input
  const input = document.createElement('input')
  input.type = 'text'
  input.name = 'title-input'
  input.id = 'title-input'
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
  inputContainer.appendChild(input)
  inputContainer.appendChild(buttonContainer)
  menuContainer.appendChild(inputContainer)
  return menuContainer
}

export default title