import { useState } from 'react';

type TodoInputProps = {
  onSubmit: (text: string) => void;
};

export default function TodoInput({ onSubmit }: TodoInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      event.preventDefault();
      onSubmit(inputValue);
      setInputValue('');
    }
  };

  return (
    <form className="w-[55rem] mb-[0.1rem] mx-auto shadow-[0_2px_4px_#0003,0_25px_50px_#0000001a]">
      <input
        type="text"
        className="w-full text-[2.4rem] font-light text-todo-default-color bg-todo-offwhite outline-none shadow-[0_-2px_1px_rgba(0,0,0,0.03)] py-[1.8rem] pl-[6rem] italic placeholder-opacity-20"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
}
