import React, { useEffect, useState } from 'react'

import SearchMovieForm from '../components/SearchMovieForm'

import DiscoverMovieCard from '../components/DiscoverMovieCard'

function DiscoverScreen() {

  const [searchList, setSearchList] = useState([])

  return (
    <div className='discover-screen'>

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
                />
                   
            )}
        </div>

    </div>
  )
}

export default DiscoverScreen