import React from 'react';
import './App.css';

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
      todo:[...this.state.todo, newToDo]
    }));
  }
  render(){
    return(
      <div>
        <h1>TO DO APP</h1>
          <form onSubmit={this.handleSubmit}>

          </form>
      </div>
    )
  }
}
