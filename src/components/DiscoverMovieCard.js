import React from 'react'

function DiscoverMovieCard(props) {

  const release = new Date(props.release)

  return (
    <div className='discover-movie-card flex py-2 border-b-2 border-black-700'>
        <img className='max-h-32 ' src={`https://image.tmdb.org/t/p/original/${props.poster}`}></img>
        <div className="title-info grow ml-2">
            <h2 className=''>{props.title}</h2>
            <div className='flex relative'>
                <h2 className='grow '>{release.toDateString().split(' ').slice(1).join(' ')}</h2>
                <button className='absolute right-0 text-5xl border-2 border-yellow-500 text-yellow-500 rounded-md px-2'>+</button>
            </div>
        </div>
        
    </div>
  )
}

export default DiscoverMovieCard