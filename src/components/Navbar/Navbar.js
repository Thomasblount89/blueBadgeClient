import {useState} from 'react'



const search_API = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=`

const Navbar = props => {
    const [searchTerm, setSearchTerm] = useState('')

const handleOnSubmit= (e) => {
    e.preventDefault();

    fetch(search_API + searchTerm)
    .then((res) => res.json())
    .then((data) => {
        props.setMovies(data.results)
        
    })
}

const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
}


    return(
        <header>
        <h3 className='nav' >Home</h3>
        <form onSubmit={handleOnSubmit}>
        <input className='search' placeholder='Search Movie' value={searchTerm} onChange={handleOnChange} />
        </form>
        <h3 className='nav'>Login</h3>
        </header>
    )
}

export default Navbar;