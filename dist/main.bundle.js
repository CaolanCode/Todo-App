/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("var Project = function Project(name) {\n  var list = [];\n  var getID = function getID() {\n    return createID();\n  };\n  var getName = function getName() {\n    return name;\n  };\n  var getList = function getList() {\n    return list;\n  };\n  return {\n    getID: getID,\n    getName: getName,\n    getList: getList,\n    addTask: function addTask(task) {\n      list.push(task);\n    }\n  };\n};\nvar Task = function Task(title, description, dueDate, priority) {\n  var getID = function getID() {\n    return createID();\n  };\n  var getTitle = function getTitle() {\n    return title;\n  };\n  var getDescription = function getDescription() {\n    return description;\n  };\n  var getDueDate = function getDueDate() {\n    return dueDate;\n  };\n  var getPriority = function getPriority() {\n    return priority;\n  };\n  return {\n    getID: getID,\n    getTitle: getTitle,\n    getDescription: getDescription,\n    getDueDate: getDueDate,\n    getPriority: getPriority\n  };\n};\nfunction createID() {\n  return Math.random().toString(16).substring(2);\n}\n\n//# sourceURL=webpack://todo-list/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;