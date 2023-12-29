// import state to keep track of the book status
import { useEffect, useContext } from "react"

import AlbumCreate from "./components/AlbumCreate"
import AlbumList from "./components/AlbumList"
import AlbumsContext from "./context/albums"

// app function pass an event handler to the child component (AlbumCreate) and 
// update the piece of state based on the props received from the AlbumCreate
function App() {
    // get the album object from the server
    const {fetchRequest} = useContext(AlbumsContext)
    //only allow the function to be called once
    useEffect(() => {
        fetchRequest()
    }, [])

    return (
    <div className="app">
        {/* {albums.length} */}
        <h1>Play List</h1>
        <AlbumList/>
        <AlbumCreate/>
    </div>)
}

export default App