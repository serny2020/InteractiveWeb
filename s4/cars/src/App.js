// import the state system
import { useState } from "react";
import CarShow from "./CarShow";
// import style
import './App.css'

function getRandomCars() {
    const cars = ['ford', 'nissan', 'toyota', 'audi', 'honda', 'ferrari']
    return cars[Math.floor(Math.random() * cars.length)]
}

// console.log(getRandomCars());

function App() {
    const [cars, setCars] = useState([]);
    // create a new list with new item append to end
    const handleClick = () => {
        setCars([...cars, getRandomCars()]);
    }
    // transform function that maps a list of strings to a list of component 
    // instance
    // pass string car as props to instantiate the components 
    const renderedCars = cars.map((car, index) => {
        return <CarShow brand={car} key={index} /> 
    });

    return <div className="app">
             <button 
                onClick= 
                 {handleClick}>
                 Add Cars
             </button>
             <div className="car-list">{renderedCars}</div>
            </div>
}

export default App;