// imnport child component
import SearchBar from './components/SearchBar';
// import api for calling the search
import searchImages from './api';
import { useState } from 'react';
import ImageList from './components/ImageList'

function App() {
    // create state that can be passed to the image list
    const [images, setImages] = useState([])

    const handleSubmit = async (term) => {
        // console.log('Do a search with', term)
        const result = await searchImages(term)

        setImages(result)
    }
    return (
        <div>
            <SearchBar onSubmit= {handleSubmit}/>
            <ImageList images = {images}/> {/*sending props*/}
        </div>
    )
}

export default App;