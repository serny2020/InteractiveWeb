# React as a package
Start up
------------------------------------------------
Three step for rendering react
1. find the div with id in html
2. tell react to take control of that element 
3. tell react to get JSX fro mthe app component, turn it into HTML, and show it
in the root

- Files on the server: index.html + boundle.js (contains all the js files)

- useState is the state system in react (controling the function state)

- use google translate API to perform the actual translation

Generating a Project
----------------------------------------------
- `npx create-react-app <project name>`
- run with `npm start`
- open browser and goto localhost:3000
- control + C to stop

Printing 
----------------------------------------------
- return with a string or a number from the component
- return a boolean, an array, or an object is not allowed

Props
----------------------------------------------
- use jsx props in html to customize an element
- it is allowed to pass an object to props but not in printing
- object in jsx is things inside curly braces

HTML to JSX
----------------------------------------------
1. use camel case for attribute
2. use curly brace for numbers 
3. class attribute is writen with className
4. in-line styles are provided as objects

Module System
---------------------------------------------
- connect components between different files
- default export components can be renamed in import file
- name export and import cann't be renamed