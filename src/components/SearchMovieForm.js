import React, { useState } from 'react'

import SearchIcon from './icons/SearchIcon'

function SearchMovieForm(props) {

  const [movie, setMovie] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_api_key}&query=${movie}`
    )
    .then(res => res.json())
    .then(resp => resp.results.filter(movie => movie.poster_path != null)) //Filter out movies without a poster
    .then(response => props.setSearchList(response)) 
    .catch((error) => {
        console.error("there has been an issue", error)
    })

    setMovie('')
  }
    
  return (
    <form className='mx-auto max-w-screen-lg flex border-2 border-white' onSubmit={handleSubmit}>
        <input className='bg-secondary border-r-2 grow px-4' type="text" placeholder="Search Movie" value={movie} onChange={(e) => setMovie(e.target.value)} />
        <button className='px-4 py-2' type='submit' value='submit'><SearchIcon/></button>
    </form>
  )
}

export default SearchMovieForm