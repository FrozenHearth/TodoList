import React from 'react';

export const Footer = props => {
  const { remainingItems, activeTodo, updateTodoToShow } = props;
  return (
    <footer className="footer-container">
      <p className="todos-count">
        {remainingItems !== 1 ? 'items left' : 'item left'}
      </p>
      <div className="filters">
        <button
          className={
            activeTodo === 'allButton' ? 'all-btn active-btn-border' : 'all-btn'
          }
          onClick={() => updateTodoToShow('all', 'allButton')}
        >
          All
        </button>
        <button
          className={
            activeTodo === 'activeButton'
              ? 'active-todo-btn active-btn-border'
              : 'active-todo-btn'
          }
          onClick={() => updateTodoToShow('active', 'activeButton')}
        >
          Active
        </button>
        <button
          className={
            activeTodo === 'completeButton'
              ? 'complete-btn active-btn-border'
              : 'complete-btn'
          }
          onClick={() => updateTodoToShow('complete', 'completeButton')}
        >
          Completed
        </button>
      </div>
    </footer>
  );
};
