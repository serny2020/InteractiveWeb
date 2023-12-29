// use state to keep track of the user input with a control component
import { useState } from "react"
import useAlbumsContext from "../hooks/use-albums-context";

// use html form to capture the user input, this input is then handled by an 
// event handler. User input is treated by a control component
function AlbumCreate() {
    //wire up state and event change to the input element 
    const [title, setTitle] = useState('');
    // get the function reference
    const { createAlbum } = useAlbumsContext()

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createAlbum(title)
        //empty out the input after submit the form
        setTitle('')
    }

    // form onSubmit event will be triggered if user press enter or click the
    //  button,
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