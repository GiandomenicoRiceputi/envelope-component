import React from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import './index.css';

const toPerson = {
    name: "Giando",
    address: "123 Fake St.",
    city: "Boston, MA 02118"
}

const fromPerson = {
    name: "Iris",
    address: "123 Fake St.",
    city: "Los Angeles, MA 02118"
}

function ToPerson({toPerson: {name, address, city}}) {
    return (
        <div className="gridItem2">
            <h3>{name}</h3>
            <h4>{address}</h4>
            <h4>{city}</h4>
        </div>
    )
}

toPerson.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
}

function FromPerson({fromPerson: {name, address, city}}) {
    return (
        <div className="gridItem1">
            <h3>{name}</h3>
            <h4>{address}</h4>
            <h4>{city}</h4>
        </div>
    )
}

FromPerson.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
}

function Stamp() {
    return (
        <div className="gridItem3">
               <p>Stamp</p>
        </div>
    )
}

function App() {
    return (
        <div className="container">
            <div className="card">
                <FromPerson fromPerson={fromPerson}/>
                <ToPerson toPerson={toPerson}/>
                <Stamp/>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


