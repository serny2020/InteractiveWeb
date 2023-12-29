// import state to keep track of the book status
import { useState, useEffect } from "react"
import axios from 'axios'
import AlbumCreate from "./components/AlbumCreate"
import AlbumList from "./components/AlbumList"

// app function pass an event handler to the child component (AlbumCreate) and 
// update the piece of state based on the props received from the AlbumCreate
function App() {
    const [albums, setAlbums] = useState([])

    //get data from the server
    const fetchRequest = async () => {
        const response = await axios.get('http://localhost:3001/albums')
        setAlbums(response.data)
    }

    //only allow the function to be called once
    useEffect(() => {
        fetchRequest()
    }, [])
    //function that takes the user input and creates a new list of albums
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/albums/${id}`, {
            title: newTitle
        })
        // console.log(response)
        // update the local data (need to update the whole album objects!!)
        const updatedAlbums = albums.map((album) => {
            if (album.id === id) {
                return {...album, ...response.data}
            }
            return album
        })
        // update the state
        setAlbums(updatedAlbums)
    }

    //create a call back function that creates a new list with the designated 
    //id of album deleted 
    const deleteAlbumById = async (id) => {
        await axios.delete(`http://localhost:3001/albums/${id}`)
        const updatedAlbums = albums.filter((album) => {
            return album.id != id
        })

        //update the control system
        setAlbums(updatedAlbums)
    }

    {/*create a new list */}
    const createAlbum = async (title) => {
        // add new request
        const response = await axios.post('http://localhost:3001/albums', {
            title
        })
        // console.log(response)
        const updatedAlbums = [...albums, response.data]
        setAlbums(updatedAlbums)
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