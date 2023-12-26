# Handle HTTP request to [API](https://unsplash.com/)
## Component design
There are four component in this project
- App component control and integrate all the others
- Search Bar component
- ImageList component creates a list of ImageShow
- ImageShow component controls a single image block

**index.js gives control to the react and render all the component
in the index.html**

## Making HTTP request
- send request to the unsplash server with axios
    - `npm install axios`

## Data Flow
- SearchBar component takes the user input and pass it to the parent
component (App) then App pass the input as props to display in the 
ImageList
    - parent component takes the user input and returns a child
    component that calles the **call back function** in the parent
    - the callback function that passed to the child component 
    from the parent is called only after the child call back 
    function is invoked


## Handle user input with form
- can detect submit event when user press the enter from the input
- disable the form request behavior
    - `event.preventDefault();` to prevent page reload
- use the react format to process the user input to take advantage
of the state system and call back function (react render the input
instantly when user type input)

## Rendering sequence
- image list state is initialized inside the App with state system.
- it is then passed as props to the ImageList component.
- whenever the user submit a new search, it update the state inside
the app.
- the new state is then passed as updated props to the ImageList
for next rendering.

## Display the Image
- when the result is created from the API, we get a list of objects
- pass that list of objects to the imageList component
- image list creates a list of imageShow object with map function
- ouput the rendered result to the browser



