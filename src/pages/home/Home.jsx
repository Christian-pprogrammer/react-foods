import React from 'react'
import './Home.css'
import HomeMain from '../../components/home-main/HomeMain'
import Services from '../../components/services/Services'

function Home() {
  return (
    <div className='home'>
        <HomeMain />
        <Services />
    </div>
  )
}

export default Home