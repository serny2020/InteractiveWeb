# React Polymorphism with Prop System

## The Prop
- child component can receive a prop from parent with customized messages
in the `{children}` and display in the underlying html/js components
- use props as boolean for the styling
- use [prop-types](https://www.npmjs.com/package/prop-types) 
(similar to type script) to add styling rules
    - add customize validation function to prop-type
    - A customized function that can take props and check if they are meshed 
    together in a correct and valid way.
- [classnames](https://www.npmjs.com/package/classnames) library to bundle all
the props and styling
    - function takes a key-value pair and returns a string of keys if the value
    is true
    - later pairs can overwrite the earlier one
    - the className could overwrite the className passed from parent, add 
    `rest.className` as one of the declaration to the classname function.


## Styling
- use [tailwind](https://tailwindcss.com/docs) to customize styling
- use [react icons](https://react-icons.github.io/react-icons/) to add icons to 
the button icons