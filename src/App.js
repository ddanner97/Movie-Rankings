import React, { useEffect, useState } from 'react';
import { readData } from './jsonBinUtils';
import './main.css'

//Components
import DiscoverScreen from './screens/DiscoverScreen';
import ListScreen from './screens/ListScreen';
import BottomNav from './components/BottomNav';

function App() {
  const [screen, setScreen] = useState(true)
  const [movieList, setMovieList] = useState([])
  const [movieListDetails, setMovieListDetails] = useState([])

  //Load in users Movie List
  useEffect(() => {
    readData()
      .then(res => setMovieList(res.record))
  }, [])

  //Make calls to TMBD to get movie details
  useEffect(() => {
    //Empty array and remove first element from MovieList [with JSON bin db]
    setMovieListDetails([])
    const movieArray = movieList.slice(1)

    //loop through MovieList
    movieArray.forEach(element => {
      //fetch data for specific element
      fetch(
        `https://api.themoviedb.org/3/movie/${element.tmbd_id}?api_key=${process.env.REACT_APP_api_key}`
      )
      .then(res => res.json())
      .then(response => {
        //Add user_rating to object 
        response["user_rating"] = element.rating
        setMovieListDetails(movieListDetails => [...movieListDetails, response])
      })
    })

  }, [movieList])

  return (
    <div className='movie-app font-poppins bg-primary min-h-screen'>

      <div className='main-container relative flex flex-column relative text-white bg-secondary w-full lg:max-w-screen-lg mx-auto min-h-screen'>
        <div className='parent-screen-containers grow px-4 pt-4'>
          {screen ? <ListScreen movieListDetails={movieListDetails} /> : <DiscoverScreen /> }
        </div>

        <BottomNav setScreen={setScreen} />    
      </div>

    </div>
  );
}

export default App;
