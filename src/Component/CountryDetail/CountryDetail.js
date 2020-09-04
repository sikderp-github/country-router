import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const CountryDetail = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <h3>Country details :{countryName} </h3>
            <hr />
            <div >
                {
                    country.map(c => <div style={{ margin: '2px solid orange' }}>
                        <h2> Name: {c.name}</h2>
                        <h3> Region: {c.region}</h3>
                        <p>Native name: {c.nativeName} </p>
                        <img style={{ width: '150px' }} src={c.flag} alt="" />
                    </div>)
                }
            </div>
        </div >
    );
};

export default CountryDetail;