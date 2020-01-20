import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            dob: '',
            password: '',
            street: '',
            city: '',
            pincode: '',
            result: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        let params = {
            username: this.state.username,
            email: this.state.email,
            dob: this.state.dob,
            password: this.state.password,
            street: this.state.street,
            city: this.state.city,
            pincode: this.state.pincode
        }
        axios.post(`http://nitin.com:5000/register`, params)
            .then((response) => {
                console.log(response);
                this.setState({
                    result: response.data
                })
            })
            .then(() => this.props.history.push('/login'))
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid col-sm-12 col-md-12 col-lg-10 bg-primary" style={{ marginTop: "200px", border: "5px solid black" }}>
                    <p className="text-center h1 mt-3 mb-2"><u><strong>Register</strong></u></p>
                    <div className="form-row mt-3">
                        <div className="form-group col-md-6">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" className="form-control" name="dob" value={this.state.dob} onChange={(e) => this.handleChange(e)} />
                        </div>
                    </div>
                    <div className="form-row">

                        <div className="form-group col-md-12">
                            <label htmlFor="street">Address</label>
                            <input type="text" className="form-control" name="street" value={this.state.street} onChange={(e) => this.handleChange(e)} placeholder="1234 Main St" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="City">City</label>
                            <input type="text" className="form-control" name="city" value={this.state.city} onChange={(e) => this.handleChange(e)} />
                        </div>

                        <div className="form-group offset-md-3 col-md-3">
                            <label htmlFor="inputZip">Pincode</label>
                            <input type="number" className="form-control" name="pincode" value={this.state.pincode} onChange={(e) => this.handleChange(e)} />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg mb-3" onClick={(e) => this.handleClick(e)}>Sign in</button>

                    <h3 className="mt-5 text-center">{this.state.result}</h3>
                </div >
            </React.Fragment>
        );
    }
}