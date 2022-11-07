import React, { useState } from 'react'
import { updateData } from '../jsonBinUtils'

function RatingForm(props) {

  const [rating, setRating] = useState("")  

  const onAdd = () => {

    // throw error if rating is undefined
    if (rating === "") {
        return alert('Enter a rating please 🎥')
    }

    //create a new rating object and push it movieList
    let obj = {
       tmbd_id: props.movieId,
       rating: rating
    }

    // Set Movie list
    props.setMovieList((movieList) => ([...movieList, obj]))

    //Clear Form - Go back to home screen
    setRating("")
    props.setMovieId()
    props.setScreen(true)

  }

  return (
    <div className='rating-form fixed top-2/4 left-1/4 bg-white self-center text-black py-8 px-8 rounded-lg'>
        {/* form */}
        <input className='my-4 border-b-2' type="text" placeholder='Rate Movie' value={rating} onChange={(e) => setRating(e.target.value)}></input>

        <div className='buttons flex'>
            <button className='add-button grow border-r-2' onClick={() => onAdd()}>Add</button>
            <button className='cancel-button grow' onClick={() => props.setMovieId()}>Cancel</button>
        </div>

    </div>
  )
}

export default RatingForm