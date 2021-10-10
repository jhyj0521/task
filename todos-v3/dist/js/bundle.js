/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/store.js":
/*!*************************!*\
  !*** ./src/js/store.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setFilter": () => (/* binding */ setFilter),
/* harmony export */   "fetchTodos": () => (/* binding */ fetchTodos),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "toggleAllTodosCompleted": () => (/* binding */ toggleAllTodosCompleted),
/* harmony export */   "toggleTodoCompleted": () => (/* binding */ toggleTodoCompleted),
/* harmony export */   "updateTodoContent": () => (/* binding */ updateTodoContent),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo),
/* harmony export */   "removeAllCompletedTodos": () => (/* binding */ removeAllCompletedTodos)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/js/view.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var todos = [];
var filter = 'all';

var setTodos = function setTodos(newTodos) {
  todos = newTodos;
  console.log(todos);
  (0,_view__WEBPACK_IMPORTED_MODULE_0__.render)(todos, filter);
};

var setFilter = function setFilter(newFilter) {
  filter = newFilter;
  (0,_view__WEBPACK_IMPORTED_MODULE_0__.render)(todos, filter);
};

var fetchTodos = function fetchTodos() {
  setTodos([{
    id: 3,
    content: 'JavaScript',
    completed: false
  }, {
    id: 2,
    content: 'CSS',
    completed: true
  }, {
    id: 1,
    content: 'HTML',
    completed: false
  }]);
};

var generateTodoId = function generateTodoId() {
  return Math.max.apply(Math, _toConsumableArray(todos.map(function (todo) {
    return todo.id;
  })).concat([0])) + 1;
};

var addTodo = function addTodo(content) {
  setTodos([{
    id: generateTodoId(),
    content: content,
    completed: false
  }].concat(_toConsumableArray(todos)));
};

var toggleAllTodosCompleted = function toggleAllTodosCompleted(completed) {
  setTodos(todos.map(function (todo) {
    return _objectSpread(_objectSpread({}, todo), {}, {
      completed: completed
    });
  }));
};

var toggleTodoCompleted = function toggleTodoCompleted(id) {
  setTodos(todos.map(function (todo) {
    return todo.id === +id ? _objectSpread(_objectSpread({}, todo), {}, {
      completed: !todo.completed
    }) : todo;
  }));
};

var updateTodoContent = function updateTodoContent(id, content) {
  setTodos(todos.map(function (todo) {
    return todo.id === +id ? _objectSpread(_objectSpread({}, todo), {}, {
      content: content
    }) : todo;
  }));
};

var removeTodo = function removeTodo(id) {
  setTodos(todos.filter(function (todo) {
    return todo.id !== +id;
  }));
};

var removeAllCompletedTodos = function removeAllCompletedTodos() {
  setTodos(todos.filter(function (todo) {
    return !todo.completed;
  }));
};



/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
var $todoList = document.querySelector('.todo-list');
var $main = document.querySelector('.main');
var $footer = document.querySelector('.footer');
var $todoCount = document.querySelector('.todo-count');
var $clearCompleted = document.querySelector('.clear-completed');

var render = function render(todos, filter) {
  var _todos = todos.filter(function (todo) {
    return filter === 'active' ? !todo.completed : filter === 'completed' ? todo.completed : true;
  });

  $todoList.innerHTML = _todos.map(function (_ref) {
    var id = _ref.id,
        content = _ref.content,
        completed = _ref.completed;
    return "\n        <li data-id=\"".concat(id, "\">\n          <div class=\"view\">\n            <input type=\"checkbox\" class=\"toggle\" ").concat(completed ? 'checked' : '', " />\n            <label>").concat(content, "</label>\n            <button class=\"destroy\"></button>\n          </div>\n          <input class=\"edit\" value=\"").concat(content, "\" />\n        </li>");
  }).join('');
  [$main, $footer].forEach(function ($el) {
    $el.classList.toggle('hidden', todos.length === 0);
  });
  var activeTodos = todos.filter(function (todo) {
    return !todo.completed;
  });
  $todoCount.textContent = activeTodos.length > 1 ? "".concat(activeTodos.length, " items left") : "".concat(activeTodos.length, " item left");
  var completedTodos = todos.filter(function (todo) {
    return todo.completed;
  });
  $clearCompleted.classList.toggle('hidden', completedTodos.length === 0);
};



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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/js/store.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var $newTodo = document.querySelector('.new-todo');
var $toggleAll = document.querySelector('.toggle-all');
var $todoList = document.querySelector('.todo-list');
var $filters = document.querySelector('.filters');
var $clearCompleted = document.querySelector('.clear-completed'); // event handler

window.addEventListener('DOMContentLoaded', _store_js__WEBPACK_IMPORTED_MODULE_0__.fetchTodos);

$newTodo.onkeyup = function (e) {
  if (e.key !== 'Enter') return;
  var content = e.target.value.trim();
  if (content) (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)(content);
  e.target.value = '';
};

$toggleAll.onchange = function () {
  (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.toggleAllTodosCompleted)($toggleAll.checked);
};

$todoList.onchange = function (e) {
  if (!e.target.classList.contains('toggle')) return;
  (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.toggleTodoCompleted)(e.target.closest('li').dataset.id);
};

$todoList.ondblclick = function (e) {
  if (!e.target.matches('.view > label')) return;
  e.target.closest('li').classList.add('editing');
};

$todoList.onkeyup = function (e) {
  if (e.key !== 'Enter') return;
  (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoContent)(e.target.closest('li').dataset.id, e.target.value);
};

$todoList.onclick = function (e) {
  if (!e.target.classList.contains('destroy')) return;
  (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(e.target.closest('li').dataset.id);
};

$filters.onclick = function (e) {
  if (!e.target.matches('.filters > li > a')) return;

  _toConsumableArray($filters.querySelectorAll('a')).forEach(function ($a) {
    $a.classList.toggle('selected', $a.id === e.target.id);
  });

  (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.setFilter)(e.target.id);
};

$clearCompleted.onclick = _store_js__WEBPACK_IMPORTED_MODULE_0__.removeAllCompletedTodos;
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map