/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n// google symbol link to html head\nvar link = document.createElement('link');\nlink.rel = 'stylesheet';\nlink.href = \"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0\";\ndocument.head.appendChild(link);\ndocument.body.appendChild((0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.createUI)());\n\n//# sourceURL=webpack://todo-list/./src/app.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"ProjectList\": () => (/* binding */ ProjectList),\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\nvar Project = function Project(name) {\n  var list = [];\n  var getID = function getID() {\n    return (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  };\n  var getName = function getName() {\n    return name;\n  };\n  var getList = function getList() {\n    return list;\n  };\n  return {\n    getID: getID,\n    getName: getName,\n    getList: getList,\n    addTask: function addTask(task) {\n      list.push(task);\n    },\n    deleteTask: function deleteTask(task) {\n      list = list.filter(function (item) {\n        return item !== task;\n      });\n    }\n  };\n};\nvar Task = function Task(title, description, dueDate, priority) {\n  var getID = function getID() {\n    return (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  };\n  var getTitle = function getTitle() {\n    return title;\n  };\n  var getDescription = function getDescription() {\n    return description;\n  };\n  var getDueDate = function getDueDate() {\n    return dueDate;\n  };\n  var getPriority = function getPriority() {\n    return priority;\n  };\n  return {\n    getID: getID,\n    getTitle: getTitle,\n    getDescription: getDescription,\n    getDueDate: getDueDate,\n    getPriority: getPriority\n  };\n};\nvar ProjectList = function ProjectList() {\n  var projects = [];\n  var addProject = function addProject(project) {\n    projects.push(project);\n  };\n  var getProjectByName = function getProjectByName(name) {\n    return projects.find(function (project) {\n      return project.getName() === name || null;\n    });\n  };\n  var getProjects = function getProjects() {\n    return projects;\n  };\n  var removeProject = function removeProject(project) {\n    projects = projects.filter(function (item) {\n      return item !== project;\n    });\n  };\n  return {\n    addProject: addProject,\n    getProjectByName: getProjectByName,\n    getProjects: getProjects,\n    removeProject: removeProject\n  };\n};\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUI\": () => (/* binding */ createUI)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\nvar createUI = function createUI() {\n  // container\n  var container = document.createElement('div');\n  container.classList.add('container');\n  // create instance of ProjectList\n  var projectList = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList)();\n  // header\n  var header = document.createElement('div');\n  header.classList.add('header');\n  header.innerText = 'Todo App';\n  // sidebar\n  var sideBar = document.createElement('div');\n  sideBar.classList.add('side-bar');\n  var projectTitleContainer = document.createElement('div');\n  projectTitleContainer.classList.add('project-title-container');\n  var projectButton = document.createElement('button');\n  projectButton.classList.add('add-project-btn');\n  projectButton.innerText = 'Add Project';\n  projectButton.addEventListener('click', function () {\n    if (removeProjectContainer()) {\n      return;\n    }\n    var addProjectContainer = document.createElement('div');\n    addProjectContainer.classList.add('add-project-container');\n    var projectInput = document.createElement('input');\n    projectInput.classList.add('project-input');\n    projectInput.placeholder = 'Enter project';\n    var projectSumbit = document.createElement('button');\n    projectSumbit.classList.add('submit-btn');\n    projectSumbit.innerText = 'Submit';\n    projectSumbit.addEventListener('click', function (event) {\n      var projectName = projectInput.value;\n      if (!projectName) return;\n      createProject(projectName, projectList, event);\n    });\n    var projectCancel = document.createElement('button');\n    projectCancel.classList.add('cancel-btn');\n    projectCancel.innerText = 'Cancel';\n    projectCancel.addEventListener('click', function () {\n      if (removeProjectContainer()) {\n        return;\n      }\n    });\n    addProjectContainer.appendChild(projectInput);\n    addProjectContainer.appendChild(projectSumbit);\n    addProjectContainer.appendChild(projectCancel);\n    sideBar.appendChild(addProjectContainer);\n  });\n  sideBar.appendChild(projectButton);\n  sideBar.appendChild(projectTitleContainer);\n  // task container\n  var taskContainer = document.createElement('div');\n  taskContainer.classList.add('display-container');\n  var taskTilesContainer = document.createElement('div');\n  taskTilesContainer.classList.add('task-display-container');\n  var taskHeading = document.createElement('div');\n  taskHeading.classList.add('task-heading');\n  var taskTitle = document.createElement('div');\n  taskTitle.classList.add('project-title');\n  taskTitle.innerText = 'List';\n  var addTaskBtn = document.createElement('button');\n  addTaskBtn.classList.add('add-task');\n  addTaskBtn.innerHTML = '<span class=\"material-symbols-outlined\">add</span>';\n  addTaskBtn.addEventListener('click', function () {\n    var projectName = taskTitle.innerText;\n    var project = projectList.getProjectByName(projectName);\n    if (!project) {\n      var makeProjectMSG = document.createElement('div');\n      makeProjectMSG.innerText = \"Add a project\";\n      makeProjectMSG.classList.add('add-project-message');\n      taskContainer.appendChild(makeProjectMSG);\n      setTimeout(function () {\n        makeProjectMSG.style.display = 'none';\n      }, 2000);\n      return;\n    }\n    addTask(project);\n  });\n  taskHeading.appendChild(taskTitle);\n  taskHeading.appendChild(addTaskBtn);\n  taskContainer.appendChild(taskHeading);\n  taskContainer.appendChild(taskTilesContainer);\n  // append elements\n  container.appendChild(header);\n  container.appendChild(sideBar);\n  container.appendChild(taskContainer);\n  return container;\n};\nvar removeProjectContainer = function removeProjectContainer() {\n  var checkForContainer = document.querySelector('.add-project-container');\n  if (checkForContainer) {\n    checkForContainer.remove();\n    return true;\n  }\n  return false;\n};\nvar createProject = function createProject(name, projectList) {\n  var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  if (event) {\n    event.preventDefault();\n  }\n  var project = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.Project)(name);\n  removeProjectContainer();\n  projectList.addProject(project);\n  projectOnSidebar(projectList);\n};\nvar projectOnSidebar = function projectOnSidebar(projectList) {\n  var projects = projectList.getProjects();\n  var projectTitleContainer = document.querySelector('.project-title-container');\n  projectTitleContainer.innerHTML = \"\";\n  var _loop = function _loop() {\n    var project = projects[projectId];\n    var projectBox = document.createElement('div');\n    projectBox.classList.add('project-box');\n    var projectButton = document.createElement('button');\n    projectButton.classList.add('project-btn');\n    projectButton.innerText = project.getName();\n    projectButton.addEventListener('click', function () {\n      displayList(project);\n    });\n    projectBox.appendChild(projectButton);\n    var deleteProjectBtn = document.createElement('button');\n    deleteProjectBtn.classList.add('delete-button');\n    deleteProjectBtn.innerHTML = \"<span class='material-symbols-outlined'>close</span>\";\n    deleteProjectBtn.addEventListener('click', function () {\n      projectList.removeProject(project);\n      projectOnSidebar(projectList);\n      displayList(project);\n    });\n    projectBox.appendChild(deleteProjectBtn);\n    projectTitleContainer.appendChild(projectBox);\n  };\n  for (var projectId in projects) {\n    _loop();\n  }\n};\nvar displayList = function displayList(project) {\n  var header = document.querySelector('.project-title');\n  var displayContainer = document.querySelector('.task-display-container');\n  displayContainer.innerHTML = \"\";\n  header.innerText = project.getName();\n  var tasks = project.getList();\n  var _loop2 = function _loop2() {\n    var task = tasks[taskId];\n    var taskBox = document.createElement('div');\n    taskBox.classList.add('task-box');\n    // task title\n    var titleHeading = document.createElement('div');\n    titleHeading.innerText = \"Title:\";\n    titleHeading.classList.add('task-title');\n    var titleItem = document.createElement('div');\n    titleItem.innerText = task.getTitle();\n    titleItem.classList.add('task-item');\n    titleItem.classList.add('title-item');\n    // delete task button\n    var deleteTaskBtn = document.createElement('button');\n    deleteTaskBtn.innerHTML = \"<span class='material-symbols-outlined'>close</span>\";\n    deleteTaskBtn.classList.add(\"delete-button\");\n    deleteTaskBtn.addEventListener('click', function () {\n      project.deleteTask(task);\n      displayList(project);\n    });\n    titleItem.appendChild(deleteTaskBtn);\n    // task description\n    var descriptionHeading = document.createElement('div');\n    descriptionHeading.innerText = \"Description:\";\n    descriptionHeading.classList.add('task-title');\n    var descriptionItem = document.createElement('div');\n    descriptionItem.innerText = task.getDescription();\n    descriptionItem.classList.add('task-item');\n    // date\n    var dateHeading = document.createElement('div');\n    dateHeading.innerText = \"Date:\";\n    dateHeading.classList.add('task-title');\n    var dateItem = document.createElement('div');\n    dateItem.innerText = task.getDueDate();\n    dateItem.classList.add('task-item');\n    // priority\n    if (task.getPriority() === \"High\") {\n      taskBox.style.border = \"5px solid #FA1304\";\n    } else if (task.getPriority() === \"Medium\") {\n      taskBox.style.border = \"5px solid orange\";\n    } else {\n      taskBox.style.border = \"5px solid yellow\";\n    }\n    taskBox.appendChild(titleHeading);\n    taskBox.appendChild(titleItem);\n    taskBox.appendChild(descriptionHeading);\n    taskBox.appendChild(descriptionItem);\n    taskBox.appendChild(dateHeading);\n    taskBox.appendChild(dateItem);\n    displayContainer.appendChild(taskBox);\n  };\n  for (var taskId in tasks) {\n    _loop2();\n  }\n};\nvar addTask = function addTask(project) {\n  if (removeTaskInputContainer()) {\n    return;\n  }\n  var displayContainer = document.querySelector('.task-display-container');\n  var addTaskContainer = document.createElement('div');\n  addTaskContainer.classList.add('task-input-container');\n  // title\n  var titleLabel = document.createElement('label');\n  titleLabel.innerText = 'Title: ';\n  titleLabel.classList.add('task-label');\n  var titleInput = document.createElement('input');\n  titleInput.classList.add('task-input');\n  // description\n  var descriptionLabel = document.createElement('label');\n  descriptionLabel.innerText = 'Description: ';\n  descriptionLabel.classList.add('task-label');\n  var descriptionInput = document.createElement('textarea');\n  descriptionInput.classList.add('task-input');\n  // date \n  var dateLabel = document.createElement('label');\n  dateLabel.innerText = 'Date: ';\n  dateLabel.classList.add('task-label');\n  var dateInput = document.createElement('input');\n  dateInput.classList.add('task-input');\n  dateInput.type = 'date';\n  // priority\n  var priority = \"Low\";\n  var priorityLabel = document.createElement('label');\n  priorityLabel.innerText = 'Priority: ';\n  priorityLabel.classList.add('task-label');\n  var priorityInputContainer = document.createElement('div');\n  priorityInputContainer.classList.add('task-input');\n  priorityInputContainer.classList.add('task-input-radio');\n  var priorityLowLabel = document.createElement('label');\n  priorityLowLabel.innerText = 'Low:';\n  priorityLowLabel.classList.add('priority-label');\n  priorityLowLabel.htmlFor = \"low-priority\";\n  var priorityInputLow = document.createElement('input');\n  priorityInputLow.type = 'radio';\n  priorityInputLow.id = 'low-priority';\n  priorityInputLow.name = 'priority';\n  priorityInputLow.addEventListener('change', function () {\n    if (priorityInputLow.checked) {\n      priority = \"Low\";\n    }\n  });\n  priorityInputLow.classList.add('radio');\n  var priorityMedLabel = document.createElement('label');\n  priorityMedLabel.classList.add('priority-label');\n  priorityMedLabel.innerText = 'Medium:';\n  priorityMedLabel.htmlFor = \"medium-priority\";\n  var priorityInputMedium = document.createElement('input');\n  priorityInputMedium.type = 'radio';\n  priorityInputMedium.classList.add('radio');\n  priorityInputMedium.id = 'medium-priority';\n  priorityInputMedium.name = 'priority';\n  priorityInputMedium.addEventListener('change', function () {\n    if (priorityInputMedium.checked) {\n      priority = \"Medium\";\n    }\n  });\n  var priorityHighLabel = document.createElement('label');\n  priorityHighLabel.classList.add('priority-label');\n  priorityHighLabel.innerText = 'High:';\n  priorityHighLabel.htmlFor = \"high-priority\";\n  var priorityInputHigh = document.createElement('input');\n  priorityInputHigh.type = 'radio';\n  priorityInputHigh.classList.add('radio');\n  priorityInputHigh.id = 'high-priority';\n  priorityInputHigh.name = 'priority';\n  priorityInputHigh.addEventListener('change', function () {\n    if (priorityInputHigh.checked) {\n      priority = \"High\";\n    }\n  });\n  priorityInputContainer.appendChild(priorityLowLabel);\n  priorityInputContainer.appendChild(priorityInputLow);\n  priorityInputContainer.appendChild(priorityMedLabel);\n  priorityInputContainer.appendChild(priorityInputMedium);\n  priorityInputContainer.appendChild(priorityHighLabel);\n  priorityInputContainer.appendChild(priorityInputHigh);\n  // buttons\n  var taskBtnContainer = document.createElement('div');\n  taskBtnContainer.classList.add('task-btn-container');\n  var taskSmbtBtn = document.createElement('button');\n  taskSmbtBtn.classList.add('submit-btn');\n  taskSmbtBtn.innerText = 'Submit';\n  taskSmbtBtn.addEventListener('click', function () {\n    var title = titleInput.value;\n    var description = descriptionInput.value;\n    var date = dateInput.value;\n    var task = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.Task)(title, description, date, priority);\n    project.addTask(task);\n    removeTaskInputContainer();\n    displayList(project);\n  });\n  var taskCnclBtn = document.createElement('button');\n  taskCnclBtn.classList.add('cancel-btn');\n  taskCnclBtn.innerText = 'Cancel';\n  taskCnclBtn.addEventListener('click', removeTaskInputContainer);\n  taskBtnContainer.appendChild(taskSmbtBtn);\n  taskBtnContainer.appendChild(taskCnclBtn);\n  addTaskContainer.appendChild(titleLabel);\n  addTaskContainer.appendChild(titleInput);\n  addTaskContainer.appendChild(descriptionLabel);\n  addTaskContainer.appendChild(descriptionInput);\n  addTaskContainer.appendChild(dateLabel);\n  addTaskContainer.appendChild(dateInput);\n  addTaskContainer.appendChild(priorityLabel);\n  addTaskContainer.appendChild(priorityInputContainer);\n  addTaskContainer.appendChild(taskBtnContainer);\n  displayContainer.appendChild(addTaskContainer);\n};\nvar removeTaskInputContainer = function removeTaskInputContainer() {\n  var container = document.querySelector('.task-input-container');\n  if (container) {\n    container.remove();\n    return true;\n  }\n  return false;\n};\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\n  --white: #fbfbfb;\\n  --turquoise: #b9e1dc;\\n  --red: #f38181;\\n  --gray: #756c83;\\n}\\n\\n*, *::before, *::after{box-sizing: inherit;}\\n\\n*{\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Roboto', sans-serif;\\n}\\n\\n.container{\\n  display: grid;\\n  min-height: 100vh;\\n  grid-template-columns: minmax(10vw, 150px) minmax(200px, 90vw);\\n  grid-template-rows: 1fr 8fr;\\n}\\n\\n/* header */\\n.header{\\n  grid-column: 1/3;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 2rem;\\n  background: var(--red);\\n}\\n\\n/* side-bar */\\n.side-bar{\\n  display: flex;\\n  flex-direction: column;\\n  background: var(--gray);\\n  padding: 2vh .5vw;\\n  gap: 2vh;\\n}\\n.add-project-btn, .project-box{\\n  padding: 1vh 1vw;\\n  border-radius: 1vh;\\n  border: none;\\n  height: 3vh;\\n}\\n.add-project-btn:hover, .project-box:hover{\\n  background: var(--white);\\n  cursor: pointer;\\n}\\n.project-btn{\\n  background: transparent;\\n  border: none;\\n  cursor: pointer;\\n  flex: 3;\\n}\\n.project-box{\\n  display: flex;\\n}\\n.add-project-container{\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n  gap: .5vh;\\n  padding-top: 1vh;\\n}\\n.project-input{\\n  grid-column: 1/3;\\n  padding: 1vh;\\n}\\n.submit-btn, .cancel-btn{\\n  border-radius: 1vh;\\n  color: white;\\n  cursor: pointer;\\n  flex: 1;\\n}\\n.submit-btn{\\n  background: green;\\n}\\n.cancel-btn{\\n  background: red;\\n}\\n.project-box{\\n  background: var(--turquoise);\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.project-title-container{\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1vh;\\n}\\n/* task container */\\n.display-container{\\n  background: var(--white);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-top: 5vh;\\n  font-size: 1.5rem;\\n}\\n\\n.task-heading{\\n  width: 80%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  border-bottom: 2px solid var(--gray);\\n  padding-bottom: 1vh;\\n}\\n\\n.add-task{\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 15px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border: none;\\n  background: var(--gray);\\n  color: var(--white);\\n  cursor: pointer;\\n}\\n.add-task:hover{\\n  background: rgba(0, 0, 0, 0.7);\\n  transition: 0.2s;\\n}\\n/* task input container */\\n.task-input-container{\\n  display: grid;\\n  grid-template-columns: 1fr 2fr;\\n  background: var(--gray);\\n  color: white;\\n  padding: 2vh 1vw;\\n  position: absolute;\\n  top: 30%;\\n  left: 45%;\\n  border-radius: 2vh;\\n  gap: 1vh;\\n  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.3);\\n}\\n.task-input-container > :nth-child(n+9) {\\n  grid-column: span 2;\\n}\\n.task-btn-container{\\n  display: flex;\\n  gap: 1vw;\\n  height: 4vh;\\n}\\n.task-label{\\n  font-size: 1rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.task-input{\\n  padding: 1vh 0;\\n  min-width: 1vw;\\n}\\n.add-project-message, .task-box{\\n  background: var(--gray);\\n  font-size: 1rem;\\n  color: white;\\n  padding: 1vw;\\n  border-radius: 2vw;\\n}\\n.add-project-message{\\n  position:absolute;\\n  top: 30%;\\n}\\n.task-input-radio{\\n  display: flex;\\n  gap: 1vw;\\n}\\n.radio{\\n  cursor: pointer;\\n}\\n.priority-label{\\n  font-size: 0.7rem;\\n}\\n/* task display */\\n.task-display-container{\\n  height: 100%;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.task-box{\\n  display: grid;\\n  grid-template-columns: 1fr 2fr;\\n  column-gap: 1vh;\\n  margin-top: 2vh;\\n  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.3);\\n}\\n.task-title{\\n  font-size: 0.7rem;\\n}\\n.task-title, .task-item{\\n  display: flex;\\n  align-items: center;\\n}\\n.title-item{\\n  font-size: 1.4rem;\\n}\\n.delete-button{\\n  color: red;\\n  background: transparent;\\n  border: none;\\n  width: 30%;\\n  border-radius: 2vw;\\n  cursor: pointer;\\n  font-weight: 700;\\n  cursor: pointer;\\n}\\n.title-item{\\n  display: flex;\\n  justify-content: space-between;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"unsafeStringify\": () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;