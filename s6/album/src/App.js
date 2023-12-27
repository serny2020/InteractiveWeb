// import state to keep track of the book status
import { useState } from "react"

import AlbumCreate from "./components/AlbumCreate"
import AlbumList from "./components/AlbumList"

// app function pass an event handler to the child component (AlbumCreate) and 
// update the piece of state based on the props received from the AlbumCreate
function App() {
    const [albums, setAlbums] = useState([])

    {/*create a new list */}
    const createAlbum = (title) => {
        // console.log("need to add albumn with: ", title)
        const updateAlbums = [...albums, 
            {
                // create random and hopfully unique ids
                id: Math.round(Math.random() * 1000), 
                title
            }]
        setAlbums(updateAlbums)
    }

    return (
    <div className="app">
        {/* {albums.length} */}
        <AlbumList albums={albums}/>
        <AlbumCreate onCreate={createAlbum}/>
    </div>)
}

export default App