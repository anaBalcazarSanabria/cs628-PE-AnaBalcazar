# Input
We are building a react web app using Javascript, HTML and CSS. We use npm as a package manager to import node which runs a web server.
I used the Material UI framework to add things like Boxes, buttons, inputs (https://mui.com/material-ui/)

The input files to the webpage were
- app.js (starting point)
  - This is the starting point of the application containing the root division
- List.jsx (list component)
  - This is the main list that we want to display.
- ListItem.css (list item component)
  - This is the individual list item that we are displaying. this contains a delete button.   


# Process
- We used npm to compile and run the web servier. The command used is:
  - npm start

This created a client folder which had the compiled code.

How the list works:
1. The List component has a state variable called tasks. This is an array of strings. Each item is the task description. Depending on the number of items in tasks, the number of boxes is displayed.
2. The input field ("Enter task description") populates another state variable called "description". When the "Add task" button is clicked, the current description is added to the end of the tasks array. This adds a task to the task list.
3. When the delete button on the ListItem is clicked, the corresponding task at the that index is deleted. This updates the task list and the new list is displayed.
  
# Output
The output is as seen in the word doc. It displays the content of the to do list with the buttons to add and delete each task.
