## Design a Drop Down Menu
### Events and State Design Process
1. identify what interaction the webstie should display aftering taking the user
input
2. group differet reaction into two categories (state or event handler)
3. generalize the steps with similar functionalities
4. write a simple text function to check if the props can work as intended
    - can simplify by removing the components that are not changing
    - then replace the remaining action with some text description
    - come up with an event handler function that can reflect on user input
5. figure out where to define the component by thinking about the props flow
6. add styling with the [tailwind](https://tailwindcss.com/docs) 
7. reuse component (panel styling):
    - panel acted as a reusable components in the prop system that passed from
    parent component to the child component 
    - use classNames to allow to merge other additional styles
    - can handle all the other events more than styling by using `{...rest}`
8. since react's useState doesn't rerender the browser instaniously when the 
state was changed, the capture event handler might casue some unexpected 
behaviors if the third argument to addEventListener is set to false.
    - three stages for handling an event
        1. capture
        2. target
        3. bubble
9. useRef to refer the the current DOM element which has many duplicate in
over the website as a component.