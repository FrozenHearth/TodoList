import { useState } from 'react';

type TodoItemProps = {
  todo: { id: string; text: string; done: boolean };
  toggleCompleted: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
};

export default function TodoItem({
  todo,
  toggleCompleted,
  deleteTodo,
  editTodo,
}: TodoItemProps) {
  const { done, text, id } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    if (editText.trim() && editText !== text) {
      editTodo(id, editText);
    } else {
      setEditText(text);
    }
  };

  return (
    <li className="flex justify-start items-center px-4 w-full border-b border-todo-dark-white text-todo-default-color">
      <input
        type="checkbox"
        checked={done}
        onChange={() => toggleCompleted(id)}
        className="w-16 h-16 opacity-0 cursor-pointer bg-none border-none"
        aria-label="Toggle completion"
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          className="text-[2.4rem] ml-[-4.2rem] p-[1.5rem_1.5rem_1.5rem_6rem] leading-[1.2] transition-colors duration-400 bg-todo-offwhite text-todo-default-color outline-none"
          autoFocus
        />
      ) : (
        <label
          onDoubleClick={handleEdit}
          className={`text-[2.4rem] ml-[-4.2rem] p-[1.5rem_1.5rem_1.5rem_6rem] leading-[1.2] transition-colors duration-400 bg-no-repeat bg-left ${
            done
              ? "text-todo-checkbox-default line-through bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nLTEwIC0xOCAxMDAgMTM1Jz48Y2lyY2xlIGN4PSc1MCcgY3k9JzUwJyByPSc1MCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjYmRkYWQ1JyBzdHJva2Utd2lkdGg9JzMnLz48cGF0aCBmaWxsPScjNWRjMmFmJyBkPSdNNzIgMjVMNDIgNzEgMjcgNTZsLTQgNCAyMCAyMCAzNC01MnonLz48L3N2Zz4=')]"
              : "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nLTEwIC0xOCAxMDAgMTM1Jz48Y2lyY2xlIGN4PSc1MCcgY3k9JzUwJyByPSc1MCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjZWRlZGVkJyBzdHJva2Utd2lkdGg9JzMnLz48L3N2Zz4=')]"
          }`}
        >
          {text}
        </label>
      )}

      <button
        onClick={() => deleteTodo(id)}
        className="ml-auto bg-none pr-12 outline-none text-todo-dark-brown cursor-pointer border-none text-[2rem] hover:text-todo-darker-brown active:text-todo-darker-brown"
        aria-label="Delete todo"
      >
        X
      </button>
    </li>
  );
}
