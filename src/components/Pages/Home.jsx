import React from 'react'
import HomeBanner from '../molecules/HomeBanner'
import ItermList from '../organisms/ItemList'
import RecommendationList from '../organisms/RecommendationList'
import './Home.css'

function Home() {
  return (
    <div>
        <HomeBanner/>
        <RecommendationList/>
        <ItermList />
    </div>
  )
}

export default Home