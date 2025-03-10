# Input
This is a full stack web application containing backend and frontend. 
The frontend is a react web app using Javascript, HTML and CSS. This app uses npm as a package manager to import node which runs a web server.
The backend is a node server running express and Mongo DB.


The input files to the webpage were
- app.js (starting point)
  - This is the starting point of the application containing the root division
- RecipesList.js (list component)
  - This is the main list of recipies that we want to display.
- Recipe.js
  - This is the main recipe details component  
- AddRecipe.js (Add recipe form component)
  - This shows a form to fill with city details such as name, population and country.   


# Process
- We used npm to compile and run the web servier. The command used is:
  - npm start
- We used node to start the backend express server. The command used is:
  - node server.mjs

This created a client folder which had the compiled code.

How the app works:
1. This web app uses the same concepts as the previous PEs and the HOS 09. The list is similar to the persons list in HOS08. The form was built using concepts like form group and submit button as seen in HOS08. the routing and navigation are similar to what was learned in hos06.
2. The backend uses similar concepts as HOS09. There are endpoints exposed which GET, DELETE, create (POST) and edit (PUT) a recipe object in the DB.
3. RecipesList.js simply fetches the list of recipes and displays it. When the app is launced, it fetches and displays the recipes that are present in the DB
4. AddRecipe.js uses a form to capture a new recipe's details as input. Then it adds this new recipe to the backend DB. Then it redirects to the recipes list page after the form is submitted.
5. Recipe.js displays a city's details. It is used in the home page. It displays the details of that particular recipe in a tabular form.
6. The table also has a delete button at the end of each row, which allow the user to delete a recipe entry from the DB.
  
# Output
The output is as seen in the word doc. It displays the content of the recipes application.
