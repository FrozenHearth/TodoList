import React from 'react';
import '../styles/TodoItem.css';

export default function TodoItem({ todo, toggleCompleted, deleteTodo }) {
  const { complete, text, id } = todo;
  return (
    <div className="todo-item">
      <input
        onChange={() => toggleCompleted(id)}
        className="toggle"
        type="checkbox"
        checked={complete}
      />
      <label className={complete ? 'todo-complete-label' : 'todo-text-label'}>
        {text}
      </label>
      <button onClick={() => deleteTodo(id)} className="delete-btn">
        X
      </button>
    </div>
  );
}
