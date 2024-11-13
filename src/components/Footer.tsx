type FooterProps = {
  remaining: number;
  activeTodo: string;
  updateTodoToShow: (todo: string, active: string) => void;
};

export default function Footer({
  remaining,
  activeTodo,
  updateTodoToShow,
}: FooterProps) {
  const baseButtonClasses =
    'mt-[0.4rem] mr-0 mb-0 ml-[1.2rem] cursor-pointer text-[1.4rem] font-light py-[0.4rem] px-[0.8rem] text-todo-btn-color hover:rounded-[3px] hover:border hover:border-todo-dark-brown';
  const activeButtonClasses =
    'rounded-[3px] border border-todo-btn-darker-brown';

  return (
    <footer className="flex w-full justify-center items-center pt-4 pb-4 px-[1.6rem]">
      <p className="text-[1.4rem] mr-auto">
        {remaining !== 1 ? `${remaining} items left` : `${remaining} item left`}
      </p>
      <ul className="list-none flex">
        <li
          className={`${baseButtonClasses} ${
            activeTodo === 'allButton' ? activeButtonClasses : ''
          }`}
          onClick={() => updateTodoToShow('all', 'allButton')}
        >
          All
        </li>
        <li
          className={`${baseButtonClasses} ${
            activeTodo === 'activeButton' ? activeButtonClasses : ''
          }`}
          onClick={() => updateTodoToShow('active', 'activeButton')}
        >
          Active
        </li>
        <li
          className={`${baseButtonClasses} ${
            activeTodo === 'completeButton' ? activeButtonClasses : ''
          }`}
          onClick={() => updateTodoToShow('complete', 'completeButton')}
        >
          Completed
        </li>
      </ul>
    </footer>
  );
}
