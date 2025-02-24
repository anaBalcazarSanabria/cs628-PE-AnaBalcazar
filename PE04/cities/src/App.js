import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'; // import NavLink
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import City from './City';
import './App.css';

function App() {
  const [cities, setCities] = useState([]);

  return (
    <BrowserRouter>
    <h1>Cities Application</h1>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Cities List</NavLink>
            </li>
            <li>
              <NavLink to="/addcity" activeClassName="active">Add City</NavLink>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<CitiesList cities={cities}/>} >
              <Route path="city/:id" element={<City cities={cities}/>} />
            </Route>
            <Route path="/addcity" element={<AddCity cities={cities} setCities={setCities}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
