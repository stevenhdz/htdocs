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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\r\n    const htmlContainer = document.getElementById('htmlContainer');\r\n\r\n    if (htmlContainer) {\r\n        fetch('index.html')\r\n            .then(response => response.text())\r\n            .then(htmlContent => {\r\n                htmlContainer.innerHTML = htmlContent;\r\n                const sum = () => {\r\n                    result.innerHTML = 2\r\n                }\r\n                sum()\r\n            })\r\n            .catch(error => console.error('Error al cargar el HTML:', error));\r\n    } else {\r\n        console.error('El elemento con ID \"htmlContainer\" no se encontró en el documento.');\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;