import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//creating a CONTROLLED COMPONENT

class FormComponentTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            registration: "",
            vehicleMake: "",
            vehicleModel: "",
            error: ""
        }
    }

    componentWillMount() {
        const pulledData = sessionStorage.getItem('FormComponentOne');
        
        if(pulledData) {
            const newData = JSON.parse(pulledData);
            this.setState({
                registration: newData.registration,
                vehicleMake: newData.vehicleMake,
                vehicleModel: newData.vehicleModel
            })
        } else {
            this.setState({ error: "Please enter some data on form one to proceed."});
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
        sessionStorage.setItem('FormComponentTwo', `${formData}`);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Form page 2</h3>
                <p className="error">{this.state.error}</p>
                <label>Registration:</label>
                <input type="text" name="registration" value={this.state.registration} onChange={this.handleChange}/><br/>
                <label>Vehicle Make:</label>
                <input type="text" name="vehicleMake" value={this.state.vehicleMake} onChange={this.handleChange}/><br/>
                <label>Vehicle Model:</label>
                <input type="text" name="vehicleModel" value={this.state.vehicleModel} onChange={this.handleChange}/><br/>
                <hr />
                <input type="submit" value="Submit" />
                <Link to="/">back</Link>
            </form>
        )
    };
};

export default FormComponentTwo;