import honda from './svg/Honda.svg'
import audi from './svg/Audi.svg'
import nissan from './svg/Nissan.svg'
import ferrari from './svg/Ferrari.svg'
import toyota from './svg/Toyota.svg'
import ford from './svg/Ford.svg'
import thumbs from './svg/thumbs-up.svg'

import './CarShow.css'

import { useState } from 'react'

const svgMap = {
    honda,
    audi,
    nissan,
    ferrari,
    toyota,
    ford
}

// create the car show component
function CarShow({brand}) {
    const [clicks, setClicks] = useState(0)

    // increase the thumbs size when user click on the div
    const handleClick = () => {
        setClicks(clicks + 1)
    }

    return (
    <div className="car-show" onClick={handleClick}>
        <img className="car-list" alt="brand" src={svgMap[brand]}/>  
        <img className="thumbs" alt="thumbs" src={thumbs}
            style={{width: 10 + 10 * clicks + 'px'}}
        />
    </div>
    );
}

export default CarShow;