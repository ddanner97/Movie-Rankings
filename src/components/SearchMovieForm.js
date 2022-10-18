import React, { useState } from 'react'

import SearchIcon from './icons/SearchIcon'

function SearchMovieForm(props) {

  const [movie, setMovie] = useState('')

  const handleSubmit = () => {
    fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_api_key}&query=${movie}`
    )
    .then(res => res.json())
    .then(resp => props.setSearchList(resp.results))
    .catch((error) => {
        console.error("there has been an issue", error)
    })

    setMovie('')
  }
    
  return (
    <div className='mx-auto max-w-screen-lg flex border-2 border-white'>
        <input className='bg-secondary border-r-2 grow px-4' type="text" placeholder="Search Movie" value={movie} onChange={(e) => setMovie(e.target.value)} />
        <button className='px-4 py-2' onClick={() => handleSubmit()}><SearchIcon/></button>
    </div>
  )
}

export default SearchMovieForm