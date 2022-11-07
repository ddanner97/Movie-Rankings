import React from 'react'

import ListMovieCard from '../components/ListMovieCard'

function ListScreen(props) {
  return (
    <div className='list-screen-container'>

        <h1 className='mx-auto text-align-center'>My Movies</h1>

        {!!props.movieListDetails.length &&

          <div className="movie-list-container grid">
            {/*render user movie list*/}
            {props.movieListDetails.map((movie, index) => 
              <ListMovieCard
                poster={movie.poster_path}
                rating={movie.user_rating}
                key={index} 
              />
            )}
          </div>
        }

    </div>
  )
}

export default ListScreen