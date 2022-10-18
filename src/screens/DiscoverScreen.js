import React, { useState } from 'react'

import SearchMovieForm from '../components/SearchMovieForm'

import DiscoverMovieCard from '../components/DiscoverMovieCard'

function DiscoverScreen() {

  const [searchList, setSearchList] = useState([])

  return (
    <div>

        <SearchMovieForm setSearchList={setSearchList}/>

        <div className="search-list-container">
            {/* Render tasks */}
            {searchList.map((movie, index) => 
                    <DiscoverMovieCard 
                      poster={movie.poster_path} 
                      title={movie.title}
                      id={movie.id}
                      key={index}
                    />
                  )}
        </div>

    </div>
  )
}

export default DiscoverScreen