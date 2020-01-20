import React from 'react';
import { Link } from 'react-router-dom';

export default class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: true
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            isAuth: false,
        })
            (() => { window.localStorage.clear() })
            .then(() => this.props.history.push("/login"))
    }

    render() {
        return (
            <React.Fragment>
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Are You Sure You Want To Logout?</h5>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-danger" onClick={this.handleClick}>Logout</button>
                                <Link to="/home" className="btn btn-secondary">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}