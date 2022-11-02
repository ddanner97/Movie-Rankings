import React from 'react'

function ListMovieCard(props) {
  return (
    <div className='list-card-container'>
        <img className='max-h-32 ' src={`https://image.tmdb.org/t/p/original/${props.poster}`}></img>
        <div className="rating-container">
            <h3>Rating {props.rating}</h3>
        </div>
    </div>
  )
}

export default ListMovieCard