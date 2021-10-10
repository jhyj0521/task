import {
  setFilter,
  fetchTodos,
  addTodo,
  toggleAllTodosCompleted,
  toggleTodoCompleted,
  updateTodoContent,
  removeTodo,
  removeAllCompletedTodos,
} from './store.js';

const $newTodo = document.querySelector('.new-todo');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

// event handler
window.addEventListener('DOMContentLoaded', fetchTodos);

$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;

  const content = e.target.value.trim();
  if (content) addTodo(content);

  e.target.value = '';
};

$toggleAll.onchange = () => {
  toggleAllTodosCompleted($toggleAll.checked);
};

$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;

  toggleTodoCompleted(e.target.closest('li').dataset.id);
};

$todoList.ondblclick = e => {
  if (!e.target.matches('.view > label')) return;

  e.target.closest('li').classList.add('editing');
};

$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;

  updateTodoContent(e.target.closest('li').dataset.id, e.target.value);
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;

  removeTodo(e.target.closest('li').dataset.id);
};

$filters.onclick = e => {
  if (!e.target.matches('.filters > li > a')) return;

  [...$filters.querySelectorAll('a')].forEach($a => {
    $a.classList.toggle('selected', $a.id === e.target.id);
  });

  setFilter(e.target.id);
};

$clearCompleted.onclick = removeAllCompletedTodos;
