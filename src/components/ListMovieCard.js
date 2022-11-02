import React from 'react'

function ListMovieCard(props) {
  return (
    <div className='list-card-container'>
        <img className='max-h-32 ' src={`https://image.tmdb.org/t/p/original/${props.poster}`}></img>
        <div className="rating-container flex">
            <h3 className=''>{props.rating} / 10</h3>
            <button onClick={() => alert('edit feature will be added soon')}><i className="fa-solid fa-pen-to-square"></i></button>
        </div>
    </div>
  )
}

export default ListMovieCard