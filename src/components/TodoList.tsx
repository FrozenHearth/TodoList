import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import Footer from './Footer';
import { Todo } from '@/types/Todos';

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
    } else {
      localStorage.removeItem('todos');
    }
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
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

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  let filteredTodos: Todo[] = [];
  if (todosToShow === 'all' && activeTodo === 'allButton') {
    filteredTodos = todos;
  } else if (todosToShow === 'active' && activeTodo === 'activeButton') {
    filteredTodos = todos.filter((todo) => !todo.done);
  } else if (todosToShow === 'complete' && activeTodo === 'completeButton') {
    filteredTodos = todos.filter((todo) => todo.done);
  }

  const remaining = todos.filter((todo) => !todo.done).length;

  return (
    <main>
      <TodoInput onSubmit={addTodo} />
      {todos.length > 0 && (
        <ul className="bg-todo-white mx-auto w-[55rem] flex flex-col items-center shadow-[0_1px_1px_rgba(0,0,0,0.2),0_8px_0_-3px_#f6f6f6,0_9px_1px_-3px_rgba(0,0,0,0.2),0_16px_0_-6px_#f6f6f6,0_17px_2px_-6px_rgba(0,0,0,0.2)]">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleCompleted={() => toggleCompleted(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
              editTodo={editTodo}
            />
          ))}
          <Footer
            updateTodoToShow={updateTodoToShow}
            remaining={remaining}
            activeTodo={activeTodo}
          />
        </ul>
      )}
    </main>
  );
}
