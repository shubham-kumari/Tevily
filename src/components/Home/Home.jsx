import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className="secContainer container">
        <div className="homeText">

          <h1 className="title">Plan Your Trip With Tevily</h1>

          <p className="subTitle">
            Travel to your favourite city with respectful of the enviornment!
          </p>

          <button className='btn'>
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">

          <div className="locationDiv">
            <label htmlFor="location">Location </label>
            <input type="text" placeholder='Dream Destination' />
          </div>

          <div className="distDiv">
            <label htmlFor="distance">Location </label>
            <input type="text" placeholder='11/meters' />
          </div>

          <div className="priceDiv">
            <label htmlFor="price">Location </label>
            <input type="text" placeholder='$140-$500' />
          </div>

          <button className='btn'>Search</button>

        </div>
      </div>
    </section>
  )
}

export default Home