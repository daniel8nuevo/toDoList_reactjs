import React from 'react';
import './ToDoList.css';

export default class ToDoList extends React.Component {

    render(){
        return(
            <div>
                <ol>
                    {this.props.todo.map(todos => (
                        <div >
                            <li className='todoBox' key={todos.id}
                            onClick={() => {this.props.deleteTodo(todos.id)}}>
                                {todos.inputValue}
                            </li>
                        </div>
                    ))}
                </ol>
            </div>
        );
    }
}
