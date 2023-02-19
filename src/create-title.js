const createTitle = () => {
  const titleContainer = document.querySelector('.title-container')
  const projectContainer = document.createElement('div')
  projectContainer.classList.add('project')
  const titleValue = document.getElementById('title-input').value
  projectContainer.innerText = titleValue
  // exit button
  const projectButton = document.createElement('button')
  projectButton.classList.add('delete-project')
  projectButton.innerHTML = '<span class="material-symbols-outlined">close</span>'
  projectContainer.appendChild(projectButton)
  titleContainer.appendChild(projectContainer)
}

export default createTitle