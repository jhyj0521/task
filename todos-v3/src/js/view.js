const $todoList = document.querySelector('.todo-list');
const $main = document.querySelector('.main');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $clearCompleted = document.querySelector('.clear-completed');

const render = (todos, filter) => {
  const _todos = todos.filter(todo =>
    filter === 'active' ? !todo.completed : filter === 'completed' ? todo.completed : true
  );

  $todoList.innerHTML = _todos
    .map(
      ({ id, content, completed }) => `
        <li data-id="${id}">
          <div class="view">
            <input type="checkbox" class="toggle" ${completed ? 'checked' : ''} />
            <label>${content}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${content}" />
        </li>`
    )
    .join('');

  [$main, $footer].forEach($el => {
    $el.classList.toggle('hidden', todos.length === 0);
  });

  const activeTodos = todos.filter(todo => !todo.completed);
  $todoCount.textContent =
    activeTodos.length > 1 ? `${activeTodos.length} items left` : `${activeTodos.length} item left`;

  const completedTodos = todos.filter(todo => todo.completed);
  $clearCompleted.classList.toggle('hidden', completedTodos.length === 0);
};

export { render };
