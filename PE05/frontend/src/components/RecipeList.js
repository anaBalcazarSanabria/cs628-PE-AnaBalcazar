import React, { useEffect, useState } from "react";

const backendUrl = "https://legendary-winner-5gq6xpvqggvp3xqp-5050.app.github.dev/recipes"

const Recipe = (props) => (
    <tr>
      <td>{props.recipe.name}</td>
      <td>{props.recipe.ingredients}</td>
      <td>{props.recipe.instructions}</td>
      <td>{props.recipe.otherDetails}</td>
      <td>
        <button className="btn btn-link"
          onClick={() => {
            props.deleteRecipe(props.recipe._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
   );

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecipes() {
            const response = await fetch(`${backendUrl}`);
        
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
        
            const recipes = await response.json();
            setRecipes(recipes);
        }
        
        getRecipes();
        return;
    }, [recipes.length]);

    async function deleteRecipe(id) {
        await fetch(`${backendUrl}/${id}`, {
          method: "DELETE"
        });
      
        const newRecipes = recipes.filter((el) => el._id !== id);
        setRecipes(newRecipes);
      }

    // This method will map out the records on the table
 function recipeList() {
    return recipes.map((recipe) => {
      return (
        <Recipe
          recipe={recipe}
          deleteRecipe={() => deleteRecipe(recipe._id)}
          key={recipe._id}
        />
      );
    });
  }

    return (
        <div>
            <h3>Recipe List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
                <tr>
                <th>Name</th>
                <th>Ingredients</th>
                <th>Cooking instructions</th>
                <th>Other Details</th>
                </tr>
            </thead>
            <tbody>{recipeList()}</tbody>
            </table>
        </div>
    )
};

export default RecipeList;