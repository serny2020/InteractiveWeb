// import state to keep track of the book status
import { useState } from "react"

import AlbumCreate from "./components/AlbumCreate"

// app function pass an event handler to the child component (AlbumCreate) and 
// update the piece of state based on the props received from the AlbumCreate
function App() {
    const [albums, setAlbums] = useState([])

    const createAlbum = (title) => {
        console.log("need to add albumn with: ", title)
    }

    return (<div>
        <AlbumCreate onCreate={createAlbum}/>
    </div>)
}

export default App