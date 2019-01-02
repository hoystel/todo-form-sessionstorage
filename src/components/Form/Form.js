import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    return (
        // how do i get around having to wrap everything in blank elements?
        <div>
            <form>
                <input placeholder="item" type="text"></input>
                <button onClick={this.props.click}>update list</button>
            </form>
            <p>List is:</p>
        </div>
    );
  }
}

export default Form;