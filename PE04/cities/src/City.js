import React from 'react';
import { useParams } from 'react-router-dom';

const City = ({cities}) => {
    
    const { id } = useParams();
    const index = Number(id);
    return (
      <div>
        <h2>{cities[index].name} Details</h2>
        <p>Country: {cities[index].country}</p>
        <p>Population: {cities[index].population}</p>
      </div>
    );
}

export default City;