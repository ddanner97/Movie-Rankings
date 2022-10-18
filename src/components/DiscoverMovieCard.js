import React from 'react'

function DiscoverMovieCard(props) {
  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/original/${props.poster}`}></img>
    </div>
  )
}

export default DiscoverMovieCard