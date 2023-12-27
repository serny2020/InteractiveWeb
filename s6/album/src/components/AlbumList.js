import AlbumShow from "./AlbumShow"

// creates a list of alumn objects
function AlbumList( {albums} ) {
    const renderAlbums = albums.map((album) => {
        return <AlbumShow key={album.id} album={album}/>
    })

    return <div className="book-list">{renderAlbums}</div>
}

export default AlbumList