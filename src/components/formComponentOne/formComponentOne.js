import React, { Component } from 'react';
//creating a CONTROLLED COMPONENT

class FormComponentOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            registration: "",
            vehicleMake: "",
            vehicleModel: ""
        }
    }

    handleChange = (event) => {
        const stateItem =  event.target.name;
        this.setState({ [stateItem]: event.target.value.toUpperCase() });
    } 

    handleSubmit = (event) => {
        event.preventDefault();
        // have to convert state object into a json string to put in storage
        const formData = JSON.stringify(this.state);
        sessionStorage.setItem('FormComponentOne', `${formData}`);
        window.location.href = "/form-two";
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Form page 1</h3>
                <label>Registration:</label>
                <input type="text" name="registration" onChange={this.handleChange}/><br/>
                <label>Vehicle Make:</label>
                <input type="text" name="vehicleMake" onChange={this.handleChange}/><br/>
                <label>Vehicle Model:</label>
                <input type="text" name="vehicleModel" onChange={this.handleChange}/><br/>
                <input type="submit" value="Submit" />
            </form>
        )
    };
};

export default FormComponentOne;