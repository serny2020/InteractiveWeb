
import { useState } from "react"
// this function display the user edit mode when the user clicked on the edit
// button
function AlbumEdit({album, onSubmit}) {
    const [title, setTitle] = useState(album.title)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    // call back function that change back to the display mode when user 
    // submit the form (enter or submit the form)
    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('new title is ', title)
        onSubmit(album.id, title)
    }

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">
                Save
            </button>
        </form>
    )
}

export default AlbumEdit