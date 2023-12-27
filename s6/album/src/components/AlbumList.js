import AlbumShow from "./AlbumShow"

// creates a list of alumn objects and recieve any other props from the parent
function AlbumList( {albums, onDelete, onEdit} ) {
    const renderAlbums = albums.map((album) => {
        return <AlbumShow onEdit={onEdit} onDelete={onDelete} key={album.id} 
                                                            album={album}/>
    })

    return <div className="book-list">{renderAlbums}</div>
}

export default AlbumList