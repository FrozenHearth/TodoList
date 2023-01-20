import { useState } from 'react';
import { nanoid } from 'nanoid';
import '../styles/TodoInput.css';

const TodoInput = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length > 0) {
      onSubmit({ text, completed: false, id: nanoid() });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-container">
      <input
        className="todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default TodoInput;
