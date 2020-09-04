import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Countries = (props) => {
    const { name, capital } = props.country;
    let history = useHistory();
    const handleClick = (countryName) => {
        const url = `/country/${countryName}`
        history.push(url);
    }
    const countryStyle = {
        border: '2px solid blue',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={countryStyle}>
            <h1>{name}</h1>
            <h4>Capital : {capital}</h4>
            <p>numericCode:<Link to={`/country/${name}`}>Show detail about {name}</Link> </p>
            <button onClick={() => handleClick(name)}>Click me</button>
        </div>
    );
};

export default Countries;