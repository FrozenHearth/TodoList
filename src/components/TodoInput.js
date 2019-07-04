import React from 'react';
import shortid from 'shortid';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const text = this.state.text.trim();
    if (text.length > 0) {
      this.props.onSubmit({
        text: this.state.text,
        completed: false,
        id: shortid.generate()
      });
      this.setState({
        text: ''
      });
    }
  };
  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <input
          className="todo-input"
          value={this.state.text}
          onChange={this.handleChange}
          name="text"
          type="text"
          placeholder="What do you wanna add?"
        />
      </form>
    );
  }
}
