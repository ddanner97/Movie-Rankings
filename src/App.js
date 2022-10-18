import React, { useState } from 'react';
import './main.css'

//Components
import DiscoverScreen from './screens/DiscoverScreen';
import ListScreen from './screens/ListScreen';
import BottomNav from './components/BottomNav';

function App() {
  const [screen, setScreen] = useState(true)

  return (
    <div className='movie-app font-poppins bg-primary min-h-screen'>

      <div className='main-container flex flex-column relative text-white bg-secondary w-full lg:max-w-screen-lg mx-auto min-h-screen'>
        <div className='grow px-4 pt-4'>
          {screen ? <ListScreen/> : <DiscoverScreen/> }
        </div>

        <BottomNav setScreen={setScreen} />    
      </div>

    </div>
  );
}

export default App;
