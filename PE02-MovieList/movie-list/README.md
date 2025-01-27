# Input
We are building a react web app using Javascript, HTML and CSS. We use npm as a package manager to import node which runs a web server.
The input files to the webpage were
- app.js (starting point)
  - This is the starting point of the application containing the root division
- App.js and MovieList.jsx (movie list component)
  - This is the main content that we want to display. the MovieList component, create an array of movie objects. Each movie object have the following properties:
•	Title
•	Genre
•	ReleaseYear
- App.css (movie list component css)
  - This is the "makeup" for the movie list page. Things like background color, font, margins are controlled here.   


# Process
- We used npm to compile and run the web servier. The command used is:
  - npm start

This created a client folder which had the compiled code.
  
# Output
The output is a list in dropdown select element that contains all the unique genres from the movies list. When the user selects a genre from the dropdown, filter the movies based on the selected genre and display only the movies that match the selected genre. When the user selects "All Genres" from the dropdown, display all the movies


