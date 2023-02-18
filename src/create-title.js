const createTitle = () => {
  const titleContainer = document.querySelector('.title-container')
  const project = document.createElement('button')
  project.classList.add('project')
  const titleValue = document.getElementById('title-input').value
  project.innerHTML = titleValue + '<span class="material-symbols-outlined">close</span>'
  titleContainer.appendChild(project)
}

export default createTitle