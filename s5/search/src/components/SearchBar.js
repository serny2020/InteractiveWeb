// import the state system to capture use input
import { useState } from 'react';
import './SearchBar.css'

function SearchBar( {onSubmit} ) {
    // to capture user input
    const [term, setTerm] = useState('')
    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onSubmit(term)
        // console.log("hello")
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Enter to Search</label>
                <input value={term} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default SearchBar;