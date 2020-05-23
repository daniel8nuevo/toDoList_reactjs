import React from 'react';
import './App.css';

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : null,
      toDo: []
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

  }
  render(){
    
  }
}
