import React from 'react'

function BottomNav(props) {
  return (
    <div className='absolute bottom-0 w-full bg-black py-2 flex text-2xl font-medium'>
        <button onClick={() => props.setScreen(true)} className='grow border-r-2'>Movies</button>
            
        <button onClick={() => props.setScreen(false)} className='grow'>Discover</button>
    </div>
  )
}

export default BottomNav