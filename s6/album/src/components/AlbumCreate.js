// use state to keep track of the user input with a control component
import { useState } from "react"

import './index.css'
// use html form to capture the user input, this input is then handled by an 
// event handler. User input is treated by a control component
function AlbumCreate( {onCreate} ) {
    {/*wire up state and event change to the input element */}
    const [title, setTitle] = useState('');
    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(title)
        {/*empty out the input after submit the form*/}
        setTitle('')
    }

    {/*form onSubmit event will be triggered if user press enter or click the
       button,  */}
    return (
    <div className="book-create">
        <h3>Add an Album</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button">Create</button>
        </form>
    </div>)
}

export default AlbumCreate