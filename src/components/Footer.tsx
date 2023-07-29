import '@/styles/footer.css';

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
  return (
    <footer className="footer-container">
      <p className="todos-count">
        {remaining !== 1 ? `${remaining} items left` : `${remaining} item left`}
      </p>
      <ul className="filters">
        <li
          className={`all-btn ${
            activeTodo === 'allButton' ? 'active-btn-border' : ''
          }`}
          onClick={() => updateTodoToShow('all', 'allButton')}
        >
          All
        </li>
        <li
          className={`active-todo-btn ${
            activeTodo === 'activeButton' ? 'active-btn-border' : ''
          }`}
          onClick={() => updateTodoToShow('active', 'activeButton')}
        >
          Active
        </li>
        <li
          className={`complete-btn ${
            activeTodo === 'completeButton' ? 'active-btn-border' : ''
          }`}
          onClick={() => updateTodoToShow('complete', 'completeButton')}
        >
          Completed
        </li>
      </ul>
    </footer>
  );
}
