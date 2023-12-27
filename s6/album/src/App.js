// import state to keep track of the book status
import { useState } from "react"

import AlbumCreate from "./components/AlbumCreate"
import AlbumList from "./components/AlbumList"

// app function pass an event handler to the child component (AlbumCreate) and 
// update the piece of state based on the props received from the AlbumCreate
function App() {
    const [albums, setAlbums] = useState([])

    //function that takes the user input and creates a new list of albums
    const editBookById = (id, newTitle) => {
        const updatedAlbums = albums.map((album) => {
            if (album.id === id) {
                return {...album, title: newTitle}
            }
            return album
        })
        // update the state
        setAlbums(updatedAlbums)
    }

    //create a call back function that creates a new list with the designated 
    //id of album deleted 
    const deleteAlbumById = (id) => {
        const updatedAlbums = albums.filter((album) => {
            return album.id != id
        })

        //update the control system
        setAlbums(updatedAlbums)
    }

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
        <h1>Play List</h1>
        <AlbumList onEdit={editBookById} albums={albums} 
                                    onDelete={deleteAlbumById}/>
        <AlbumCreate onCreate={createAlbum}/>
    </div>)
}

export default App