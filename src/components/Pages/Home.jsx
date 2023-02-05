import React from 'react'
import HomeBanner from '../molecules/HomeBanner'
import ItermList from '../organisms/ItemList'
import './Home.css'

function Home() {
  return (
    <div>
        <HomeBanner/>
        <ItermList />
    </div>
  )
}

export default Home