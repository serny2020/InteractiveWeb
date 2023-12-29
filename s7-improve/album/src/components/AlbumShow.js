// display the props that passed to each album object from the AlbumList

import { useState } from "react"
import AlbumEdit from "./AlbumEdit"
import useAlbumsContext from "../hooks/use-albums-context"

function AlbumShow({album}) {
 
    const [showEdit, setShowEdit] = useState(false)
    const {deleteAlbumById} = useAlbumsContext()
    // handleDelete calls the call back function from app, 
    // which delete the album with id
    const handleDelete = () => {
        deleteAlbumById(album.id)
    }
    // change the state value when user click on the edit mode
    const handleEdit = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = () => {
        setShowEdit(false)
    }

    let content = <h3>{album.title}</h3>
    if (showEdit) {
        // pass the albums props down to the AlbumEdit component
        content = <AlbumEdit  onSubmit={handleSubmit} album={album}/>
    }

    return (<div className="book-show">
        <img 
            alt="title"
            src={`https://picsum.photos/seed/${album.id}/300/200`}
        />
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