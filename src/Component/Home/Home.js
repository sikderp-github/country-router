import React, { useState } from 'react';
import { useEffect } from 'react';
import Countries from '../Countries/Countries';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            {
                countries.map(country => <Countries country={country}></Countries>)
            }
        </div>
    );
};

export default Home;