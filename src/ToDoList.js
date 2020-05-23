import React from 'react';
import './ToDoList.css';

export default class ToDoList extends React.Component {
    render(){
        return(
            <div>
                <ol>
                    {this.props.todo.map(todos => (
                        <li key={todos.id}>
                            {todos.inputValue}
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}
