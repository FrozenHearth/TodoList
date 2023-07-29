import '@/styles/TodoItem.css';
import { Todo } from '@/types/Todos';

type TodoItemProps = {
  todo: Todo;
  toggleCompleted: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export default function TodoItem({
  todo,
  toggleCompleted,
  deleteTodo,
}: TodoItemProps) {
  const { done, text, id } = todo;
  return (
    <div className="todo-item">
      <input
        onChange={() => toggleCompleted(id)}
        className="toggle"
        type="checkbox"
        checked={done}
      />
      <label className={done ? 'todo-complete-label' : 'todo-text-label'}>
        {text}
      </label>
      <button onClick={() => deleteTodo(id)} className="delete-btn">
        X
      </button>
    </div>
  );
}
