// display the props that passed to each album object from the AlbumList

import { useState } from "react"
import AlbumEdit from "./AlbumEdit"

function AlbumShow({album, onDelete, onEdit}) {
    // add 
    const [showEdit, setShowEdit] = useState(false)

    // handleDelete calls the call back function from app, 
    // which delete the album with id
    const handleDelete = () => {
        onDelete(album.id)
    }
    // change the state value when user click on the edit mode
    const handleEdit = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false)
        onEdit(id, newTitle)
    }

    let content = <h3>{album.title}</h3>
    if (showEdit) {
        // pass the albums props down to the AlbumEdit component
        content = <AlbumEdit  onSubmit={handleSubmit} album={album}/>
    }

    return (<div className="book-show">
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEdit}>
                Edit
            </button>
            <button className="delete" onClick={handleDelete}>
                Delete
            </button>
        </div>
        </div>)
}

export default AlbumShow