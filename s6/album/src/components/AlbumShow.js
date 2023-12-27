// display the props that passed to each album object from the AlbumList

function AlbumShow({album, onDelete}) {
    // handleDelete calls the call back function from app, 
    // which delete the album with id
    const handleDelete = () => {
        onDelete(album.id)
    }


    return (<div className="book-show">
        {album.title}
        <div className="actions">
            <button className="delete" onClick={handleDelete}>
                Delete
            </button>
        </div>
        </div>)
}

export default AlbumShow