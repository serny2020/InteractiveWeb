# Design of Accordion
- To add some cascating effect of the accordion component requirs both the 
event handler and the state system.
    - state system helps to reflect the changes on the screen
    - event handler helps to toggle the changes when user provided some inputs
- Since the prop system is not very suitable for sharing information between 
syblings, it is better to define the props in App which pass the props to its
children. If the props is only used in one particular component then it can be 
defined inside that component. 
- use the logic operator to help control the toggle list
    - `||` in js gives back the first value that is true
    - `&&` gives the first false value or the last true value

## Variation on Event Handlers
- use anonymous function to handle click (for readability, use this only if 
handler has 1 line of code)
- move the anonymous function outside the mapping function so that the logic 
flow within the mapping is clear enough
- event handler usually takes the event object by default. If pass in a 
parameter explicitly, then it can handle the parameter manually
    
      onClick = {handleClick};

      const handleClick = (event) => {};

     Compare to

      onClick = {() => handleClick(parameter)}

      const handleClick = (parameter) => {}


