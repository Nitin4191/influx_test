import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],

        }
    }

    componentDidMount() {
        axios.get(`http://nitin.com:5000/home`)
            .then((response) => {
                console.log(response);
                this.setState({
                    cars: response.data.data
                })
            })
    }

    handleClick = (e) => {
        e.preventDefault();
        let Id = this.props.match.params.id;
        axios.post(`http://nitin.com:5000/selectcars/${Id}`)
             .then((response) => {
                 console.log(response);
             })
    }

    render() {
        let cars = this.state.cars.map((e) => {
            return (
                <div className="card-group">
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{e.Make} {e.Car}</h5>
                            <p className="card-text">Type of Vehicle: {e.Type}</p>
                            <p className="card-text">Number of Seats: {e.Seats}</p>
                            <p className="card-text">Colour of Vehicle: {e.Colour}</p>
                            <button className="btn btn-primary" onClick={this.handleClick}>Book Vehicle</button>
                        </div>
                    </div>
                </div>
            );
        })
        return (
            <React.Fragment>
                {cars}
            </React.Fragment>
        );
    }
}