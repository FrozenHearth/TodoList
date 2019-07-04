import React from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todosToShow: 'all',
    activeTodo: 'allButton'
  };
  addTodo = todo => {
    const newTodos = [...this.state.todos, todo];
    this.setState({
      todos: newTodos
    });
  };

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  updateTodoToShow = (todo, activeTodo) => {
    this.setState({
      todosToShow: todo,
      activeTodo: activeTodo
    });
  };
  render() {
    let todos = [];
    if (
      this.state.todosToShow === 'all' &&
      this.state.activeTodo === 'allButton'
    ) {
      todos = this.state.todos;
    } else if (
      this.state.todosToShow === 'active' &&
      this.state.activeTodo === 'activeButton'
    ) {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (
      this.state.todosToShow === 'complete' &&
      this.state.activeTodo === 'completeButton'
    ) {
      todos = this.state.todos.filter(todo => todo.complete);
    }
    return (
      <div>
        <h1 className="header-text">todos</h1>
        <TodoInput onSubmit={this.addTodo} />
        {this.state.todos.length > 0 && (
          <div className="todo-list">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                toggleCompleted={() => this.toggleCompleted(todo.id)}
                todo={todo}
              />
            ))}
            <footer className="footer-container">
              <p className="todos-count">
                {this.state.todos.filter(todo => !todo.complete).length} items
                left
              </p>
              <div className="filters">
                <button
                  style={{
                    borderColor:
                      this.state.activeTodo === 'allButton' ? '#96373778' : null
                  }}
                  className="all-btn"
                  onClick={() => this.updateTodoToShow('all', 'allButton')}
                >
                  All
                </button>
                <button
                  style={{
                    borderColor:
                      this.state.activeTodo === 'activeButton'
                        ? '#96373778'
                        : null
                  }}
                  className="active-btn"
                  onClick={() =>
                    this.updateTodoToShow('active', 'activeButton')
                  }
                >
                  Active
                </button>
                <button
                  style={{
                    borderColor:
                      this.state.activeTodo === 'completeButton'
                        ? '#96373778'
                        : null
                  }}
                  className="complete-btn"
                  onClick={() =>
                    this.updateTodoToShow('complete', 'completeButton')
                  }
                >
                  Completed
                </button>
              </div>
            </footer>
          </div>
        )}
      </div>
    );
  }
}
