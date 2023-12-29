import AlbumShow from "./AlbumShow"
// use context as props
import useAlbumsContext from "../hooks/use-albums-context"


// creates a list of alumn objects and recieve any other props from the parent
function AlbumList() {
    // destructruing the object with exactly the same name!
    // the hook imported should be used as a function call!
    const {albums} = useAlbumsContext()

    const renderAlbums = albums.map((album) => {
        // still pass album object as props to AlbumShow
        return <AlbumShow key={album.id} album={album}/>
    })

    return (
    <div className="book-list">

        {renderAlbums}
    </div>)
}

export default AlbumList