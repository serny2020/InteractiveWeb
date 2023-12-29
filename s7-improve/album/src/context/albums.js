import {createContext, useState} from 'react'
import axios from 'axios'

const AlbumsContext = createContext()

function Provider({children}) {
    const [count, setCount] = useState(5)

    const valueToShare = {
        count,
        incrementCount: () => {
            setCount(count + 1)
        },
    }
    const [albums, setAlbums] = useState([])

    //get data from the server
    const fetchRequest = async () => {
        const response = await axios.get('http://localhost:3001/albums')
        setAlbums(response.data)
    }
    //function that takes the user input and creates a new list of albums
    const editAlbumById = async (id, newTitle) => {
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
    // function reference to share
    const shareData = {
        albums,
        deleteAlbumById,
        editAlbumById,
        createAlbum,
        fetchRequest
    }

    return <AlbumsContext.Provider value={shareData}>
        {children}
    </AlbumsContext.Provider>}

// export the name reference Provider to uses in other files
export {Provider}
export default AlbumsContext