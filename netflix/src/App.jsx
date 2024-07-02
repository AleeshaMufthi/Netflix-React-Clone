import { useState } from 'react'
import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { Originals, action, horror, comedy, romantic, trend} from './Components/Urls'



function App() {

  return (
    <>

      <div className='App'>
        <NavBar />
        <Banner />
        <RowPost url={Originals} title='Netflix Originals' />
        <RowPost url={trend} title='Trending' isSmall />
        <RowPost url={comedy} title='Comedy Movies' isSmall />
        <RowPost url={action} title='Action Movies' isSmall />
        <RowPost url={horror} title='Horror Movies' isSmall />
        <RowPost url={romantic} title='Romantic Movies' isSmall />
      </div>
  
    </>
  )
}

export default App
