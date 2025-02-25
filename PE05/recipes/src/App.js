import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'; // import NavLink
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';
import Recipe from './Recipe';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <h1>Recipe Application</h1>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Recipe List</NavLink>
            </li>
            <li>
              <NavLink to="/addrecipe" activeClassName="active">Add Recipe</NavLink>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
          <Route path="/" element={<RecipeList/>} >
              <Route path="recipe/:id" element={<Recipe/>} />
            </Route>
            <Route path="/addrecipe" element={<AddRecipe/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
