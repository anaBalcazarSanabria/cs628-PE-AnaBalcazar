import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function AddRecipe() {
    const [form, setForm] = useState({
        name: "",
        ingredients: "",
        instructions: "",
        otherDetails: "",
    });

    const navigate = useNavigate();
    const backendUrl = "https://legendary-winner-5gq6xpvqggvp3xqp-5050.app.github.dev/recipes"

    function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
 async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newRecipe = { ...form };
  
    await fetch(`${backendUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ name: "", ingredients: "", instructions: "", otherDetails: "" });
    navigate("/");
  }


    return (
   <div>
     <h3>Create New Recipe</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="ingredients">Ingredients: </label>
         <input
           type="text"
           className="form-control"
           id="ingredients"
           value={form.ingredients}
           onChange={(e) => updateForm({ ingredients: e.target.value })}
         />
        </div>
        <div className="form-group">
            <label htmlFor="instructions">Cooking Instructions: </label>
            <input
                type="text"
                className="form-control"
                id="instructions"
                value={form.instructions}
                onChange={(e) => updateForm({ instructions: e.target.value })}
            />
        </div>
        <div className="form-group">
            <label htmlFor="otherDetails">Other Details: </label>
            <input
                type="text"
                className="form-control"
                id="otherDetails"
                value={form.otherDetails}
                onChange={(e) => updateForm({ otherDetails: e.target.value })}
            />
        </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create Recipe"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
};