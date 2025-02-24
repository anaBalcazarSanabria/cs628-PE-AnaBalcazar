# Input
This is a react web app using Javascript, HTML and CSS. This app uses npm as a package manager to import node which runs a web server.

The input files to the webpage were
- app.js (starting point)
  - This is the starting point of the application containing the root division
- CitiesList.js (list component)
  - This is the main list of cities that we want to display.
- City.js
  - This is the city detail page  
- AddCity.js (Add city form component)
  - This shows a form to fill with city details such as name, population and country.   


# Process
- We used npm to compile and run the web servier. The command used is:
  - npm start

This created a client folder which had the compiled code.

How the app works:
1. This app uses the same concepts as the todo list exercise and the hos04 and hos06. the list is similar to the to do list. The form was built using concepts like react input and button as seen in hos04. the routing and navigation are similar to what was learned in hos06.
2. The parent component (App.js) contains a state variable called cities. This is passed down to the child components which can add or just display the cities.
3. CitiesList.js simply takes the list of cities and displays it. It is empty in the beginning and so the app shows no cities when it is launched.
4. AddCity.js uses a form to capture a new city's details as input. Then it adds this new city to the list of cities. This also redirects to the cities list page after the form is submitted.
5. City.js displays a city's details. It is nested under the cities list page. It uses the useParams hook to get the city id, and then displays the details of that particular city id.
  
# Output
The output is as seen in the word doc. It displays the content of the cities application.
