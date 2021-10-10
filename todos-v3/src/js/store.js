import { render } from './view';

let todos = [];
let filter = 'all';

const setTodos = newTodos => {
  todos = newTodos;
  console.log(todos);

  render(todos, filter);
};

const setFilter = newFilter => {
  filter = newFilter;

  render(todos, filter);
};

const fetchTodos = () => {
  setTodos([
    { id: 3, content: 'JavaScript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false },
  ]);
};

const generateTodoId = () => {
  return Math.max(...todos.map(todo => todo.id), 0) + 1;
};

const addTodo = content => {
  setTodos([{ id: generateTodoId(), content, completed: false }, ...todos]);
};

const toggleAllTodosCompleted = completed => {
  setTodos(todos.map(todo => ({ ...todo, completed })));
};

const toggleTodoCompleted = id => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo)));
};

const updateTodoContent = (id, content) => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, content } : todo)));
};

const removeTodo = id => {
  setTodos(todos.filter(todo => todo.id !== +id));
};

const removeAllCompletedTodos = () => {
  setTodos(todos.filter(todo => !todo.completed));
};

export {
  setFilter,
  fetchTodos,
  addTodo,
  toggleAllTodosCompleted,
  toggleTodoCompleted,
  updateTodoContent,
  removeTodo,
  removeAllCompletedTodos,
};
