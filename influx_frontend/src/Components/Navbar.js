import React from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/home"><i class="fa fa-car" aria-hidden="true"></i>
                        Prohire</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/bookings">Booking</Link>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <Link to="/register" className="btn btn-outline-success my-2 my-sm-0 ml-3">Register</Link>
                            <Link to="/logout" className="btn btn-danger my-2 my-sm-0 ml-3">Logout</Link>
                            <Link to="/login" className="btn btn-success my-2 my-sm-0 ml-3">Login</Link>
                        </form>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}