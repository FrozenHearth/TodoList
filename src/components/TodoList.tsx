import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import '../styles/TodoList.css';
import Footer from './Footer';
import { Todo } from '../types/Todos';

export default function TodoList() {
  const [todos, setTodos] = useState([] as Todo[]);
  const [todosToShow, setTodosToShow] = useState('all');
  const [activeTodo, setActiveTodo] = useState('allButton');

  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const toggleCompleted = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const updateTodoToShow = (todo: string, active: string) => {
    setTodosToShow(todo);
    setActiveTodo(active);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  let filteredTodos: Todo[] = [];
  if (todosToShow === 'all' && activeTodo === 'allButton') {
    filteredTodos = todos;
  } else if (todosToShow === 'active' && activeTodo === 'activeButton') {
    filteredTodos = todos.filter((todo) => !todo.done);
  } else if (todosToShow === 'complete' && activeTodo === 'completeButton') {
    filteredTodos = todos.filter((todo) => todo.done);
  }
  console.log('filteredTodos', filteredTodos);

  const remaining = todos.filter((todo) => !todo.done).length;

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
