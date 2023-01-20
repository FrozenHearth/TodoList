import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import '../styles/TodoList.css';
import Footer from './Footer';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todosToShow, setTodosToShow] = useState('all');
  const [activeTodo, setActiveTodo] = useState('allButton');

  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const updateTodoToShow = (todo, active) => {
    setTodosToShow(todo);
    setActiveTodo(active);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  let filteredTodos = [];
  if (todosToShow === 'all' && activeTodo === 'allButton') {
    filteredTodos = todos;
  } else if (todosToShow === 'active' && activeTodo === 'activeButton') {
    filteredTodos = todos.filter((todo) => !todo.complete);
  } else if (todosToShow === 'complete' && activeTodo === 'completeButton') {
    filteredTodos = todos.filter((todo) => todo.complete);
  }

  const remaining = todos.filter((todo) => !todo.complete).length;

  return (
    <>
      <TodoInput onSubmit={addTodo} />
      {todos.length > 0 && (
        <div className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              toggleCompleted={() => toggleCompleted(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
              todo={todo}
            />
          ))}
          <Footer
            updateTodoToShow={updateTodoToShow}
            remaining={remaining}
            activeTodo={activeTodo}
          />
        </div>
      )}
    </>
  );
}
