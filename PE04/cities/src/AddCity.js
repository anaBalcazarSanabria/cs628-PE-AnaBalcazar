import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddCity = ({cities}) => {
    const [name, setName] = useState();
    const [country, setCountry] = useState();
    const [population, setPopulation] = useState();

    const changeName = (e) => {
        setName(e.target.value);
    }
    const changeCountry = (e) => {
        setCountry(e.target.value);
    }
    const changePopulation = (e) => {
        setPopulation(e.target.value);
    }
    let navigate = useNavigate();
    
    function redirectToHome() {
        navigate('/');
    }

    const addCity = () => {
        cities.push({
            name: name,
            country: country,
            population: population
        });
        redirectToHome();
    }

    return (
        <div>
            Name: <input placeholder="Enter city name" onChange={changeName}></input>
            <br/>
            Country: <input placeholder="Enter country" onChange={changeCountry}></input>
            <br/>
            Population: <input placeholder="Enter population" onChange={changePopulation}></input>
            <br/>
            <button onClick={addCity}>add city</button>
        </div>
    )
}

export default AddCity;