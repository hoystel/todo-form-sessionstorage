import React, { Component } from 'react';
import Form from '../Form/Form';

class Todo extends Component {
    state = {
        todoItem: ['wash car', 'build lego kit', 'learn angular']
    }

    updateList = this.updateList.bind(this);
    finalElements = [];

    componentDidUpdate() {
        console.log('list updated');
    }

    updateList(e) {
        e.preventDefault();
        const newItem = document.querySelector('input').value;
        const lastState = [...this.state.todoItem];
        lastState.push(newItem);
        //clear input value before re render
        document.querySelector('input').value = "";
        this.setState({ todoItem: lastState });
    }
    
    render() {
        const todos = this.state.todoItem;

        return(
            <div>
                <Form click={this.updateList}/>
                <ul>
                {todos.map((item, index) => {
                    return(
                        <li key={index}>{item}</li>
                    )
                })}
                </ul>
                
            </div>
        );
    }
    
}

export default Todo;