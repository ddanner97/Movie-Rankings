import React, { useEffect, useState } from 'react'

import SearchMovieForm from '../components/SearchMovieForm'

import DiscoverMovieCard from '../components/DiscoverMovieCard'
import RatingForm from '../components/RatingForm'

function DiscoverScreen(props) {

  const [searchList, setSearchList] = useState([])
  const [movieId, setMovieId] = useState()

  return (
    <div className='discover-screen relative'>

        <SearchMovieForm setSearchList={setSearchList}/>

        <div className="search-list-container my-2">
            {/* Render tasks */}
            {searchList.map((movie, index) => 

                <DiscoverMovieCard 
                  poster={movie.poster_path} 
                  title={movie.title}
                  release={movie.release_date}
                  id={movie.id}
                  key={index}
                  setMovieId={setMovieId}
                />
                   
            )}
        </div>

        {/* Conditionally Render Rating Form */}
        {movieId !== undefined &&
          <RatingForm setMovieId={setMovieId} movieId={movieId} movieList={props.movieList} setMovieList={props.setMovieList} setScreen={props.setScreen}/>
        } 
        

    </div>
  )
}

export default DiscoverScreen