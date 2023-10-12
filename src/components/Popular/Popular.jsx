import React from 'react'
import './Popular.css'
import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'

//import images
import img from '../../Assets/home.jpg'
import img1 from '../../Assets/home.jpg'
import img2 from '../../Assets/home.jpg'
import img3 from '../../Assets/home.jpg'
import img4 from '../../Assets/home.jpg'

// so noe we are going touse a higher order array method to display 
// allthe destination using map. To do so we need to list all the destination
// in one array "Data" and later we shall call each destination 
// index/id.

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'machi picchu',
    location: 'peru',
    grade: 'CULTURAL RELAX',
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'machi picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Angkor Wat',
    location: 'Combodia',
    grade: 'CULTURAL RELAX',
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
  },
]


const Popular = () => {
  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>From historical cities to natural spectulars, come see the best of the world!</p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>

        </div>

        <div className="mainContent grid">
          {
            Data.map(({id,imgSrc,destTitle,location,grade}) => {
              return (
                <div className="singleDestination">
                  <div className="destImage">
                    <img src={imgSrc} alt="Image" />

                    <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                      <p>{location}</p>

                      <BsArrowRightShort className="icon" />
                    </div>
                  </div>

                  <div className="destFooter">
                    <div className="number">0{id}</div>
                    <div className="destText flex">
                      <h6>{location}</h6>
                      <span className='flex'>
                        <span className="dot">
                          <BsDot className="icon" />
                          Dot
                        </span>
                      </span>
                    </div>
                  </div>

                </div>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}

export default Popular