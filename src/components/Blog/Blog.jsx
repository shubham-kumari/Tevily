import React from 'react'
import './Blog.css'
import { BsArrowRightShort } from 'react-icons/bs'

//images
import img from '../../Assets/image1.jpg'
import img2 from '../../Assets/image2.jpg'

//higher order array map method
const posts = [
  {
    id: 1,
    imgSrc: img,
    title: 'Beautiful MOrrocco, Let us travel!',
    desc: '20 Things Morocco Is Known And Famous For - Nomads Unveiled Morocco is Known for its uniquely rich culture centered on religion and tradition and abundance of beaches, mountains, ranges, and deserts, which makes it popular as “The Arab West.',
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Romantic moments under Eiffle Tower',
    desc: '15 essential things to know about the Eiffel TowerBeing the first tower to reach the height of 1,000 feet - twice as any structure previously erected- the Eiffel Tower remained the highest building in the world during 40 years'
  },

  {
    id: 3,
    imgSrc: img,
    title: 'Beautiful MOrrocco, Let us travel!',
    desc: '20 Things Morocco Is Known And Famous For - Nomads Unveiled Morocco is Known for its uniquely rich culture centered on religion and tradition and abundance of beaches, mountains, ranges, and deserts, which makes it popular as “The Arab West.',
  },

  {
    id: 4,
    imgSrc: img2,
    title: 'Beautiful MOrrocco, Let us travel!',
    desc: '20 Things Morocco Is Known And Famous For - Nomads Unveiled Morocco is Known for its uniquely rich culture centered on religion and tradition and abundance of beaches, mountains, ranges, and deserts, which makes it popular as “The Arab West.',
  },
]


const Blog = () => {
  return (
    <section className='blog container section'>
      <div className="secContainer">

        <div className="secIntro">
          <h2 className="secTitle">
            Our Besr Blog?
          </h2>
          <p>An insight to the ncredible experience in the world.</p>
        </div>

        <div className="mainContainer grid">
          {
            posts.map(({id, imgSrc, title, desc}) => {
              return (
                <div className="singlePost grid">
                  <div className="imgDiv">
                    <img src={imgSrc} alt={title} />
                  </div>

                  <div className="postDetails">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>

                  <a href="#" className='flex'>
                    
                    Read More
                    <BsArrowRightShort className="icon" />
                  </a>
                </div>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}

export default Blog