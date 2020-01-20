import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isAuth: false,
            result: []

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        let params = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post(`http://nitin.com:5000/login`, params)
             .then((response) => {
                 console.log(response);
                 window.localStorage.setItem("token", response.data.token)
                 this.setState({
                     result: response.data,
                     isAuth: true
                 })
             })
             .then(() => this.props.history.push('/home'))
    }

    render() {
        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
}