import React from 'react';
import './App.css';
import ToDoList from './ToDoList';

export default class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : null,
      todo: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    
    const randNumber = Math.floor(Math.random() * 9999);

    const newToDo = {
      inputValue: this.state.inputValue,
      id: randNumber
    }

    this.setState( state => ({
      todo:[...this.state.todo, newToDo],
      inputValue: null
    }));
  }
  render(){
    return(
      <div>
        <h1>TO DO APP</h1>
          <ToDoList todo={this.state.todo} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="newToDo">Please, add a new task!</label>
              <input
                id="newToDo"
                onChange={this.handleChange}
                value={this.state.inputValue}
              />
              <button>ADD</button>
          </form>
      </div>
    )
  }
}
