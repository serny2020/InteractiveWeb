// 1. Import the react and reactDOM (for diff devices) libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2. Get a reference to the div with ID root
const el = document.getElementById('root');

// 3. Give element control to react
const root = ReactDOM.createRoot(el);

// 4. Create a component
function App() {
    var text = "Head!";
    if (Math.random() > 0.5) {
        text = "Tail!"
        }
    return  (<div>
                <div>You tossed a coin and get {text}</div>
                <div>
                    Current time: {new Date().toLocaleTimeString()}
                </div>
                <div>
                    {/* printing props with an object inside */}
                    <input style={{border: '3px solid red'}} type = "number"/>
                </div>
                <br/>
                Comments:<br/>
                <textarea autoFocus={true} spellCheck></textarea>
            </div>);
}

// 5. Show the component on the screen
root.render(<App />)

