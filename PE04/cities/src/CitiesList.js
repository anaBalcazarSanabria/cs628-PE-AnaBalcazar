import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function CitiesList({cities}) {
    
    const CitiesList = [];
    for (var i = 0; i < cities.length; i++) {
        CitiesList.push(
          <div key={i}>
            <Link to={"/city/" + i}>{cities[i].name}</Link>
            <br/>
          </div>
        )
    }
    
    let navigate = useNavigate();

    function redirectToHome() {
        navigate('/')
    }

  function goBack() {
    navigate(-1)
  }
  return (
    <div>
      <h2>Cities List</h2>
      <div>
          {CitiesList}
        <br/>
        <br/>
        <button onClick={redirectToHome}>Redirect to Home</button>
        <br/>
        <br/>
        <button onClick={goBack}>Go Back</button>

      </div>
      <Outlet />
    </div>
  );
}

export default CitiesList;