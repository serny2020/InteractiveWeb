# Event and State System

## Handling Events
- html system trigger the event handler function and carry out the function
result
- list of [events names](https://legacy.reactjs.org/docs/events.html) 
- call back function (event handler) is passed as a prop.
- call back function is called only when the user trigger the event, so pass
the function name to the props instead of the function itself (with parentheses)
    - function name is the reference

## Update State System
- update and reflect the change of state on the screen
- use of js array destructuring feature to initialize the state and the setter
function
- calling the setter function with update info. inside the event hanlder to 
update the state


## State Design
1. add car will pick a random car from the array pool of cars strings
3. event handler will return a new list of car strings with the new car append
to the end (not us push function since this will modify the piece of state)
2. the map functon transforms each element inside the list and pass them as 
props and returns a list of component (transformation function)
    - map function calls from a list and returns a new list of objects


## Styling the output
- App.css
- CarShow.css