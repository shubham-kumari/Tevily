import React from 'react'
import './Offers.css'
import { MdKingBed } from 'react-icons/md'
import { MdBathtub } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { MdAirportShuttle } from 'react-icons/md'
import { MdLocationOn } from 'react-icons/md'
import { BsArrowRightShort } from 'react-icons/bs'

//lets impost images
import img from '../../Assets/hotel2.jpg'
import img1 from '../../Assets/hotel2.jpg'
import img2 from '../../Assets/hotel2.jpg'
import img3 from '../../Assets/hotel2.jpg'

//higher order array method
const Offer = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'machi picchu',
        location: 'peru',
        price: '$1000',
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'machi picchu',
        location: 'Peru',
        price: '$4400',
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Angkor Wat',
        location: 'Combodia',
        price: '$1800',
    },

    {
        id: 4,
        imgSrc: img,
        destTitle: 'Taj Mahal',
        location: 'India',
        price: '$5000',
    },
]

const Offers = () => {
    return (
        <section className='offer container section'>
            <div className="secContainer">

                <div className="secIntro">
                    <h2 className="secTitle">Special Offers</h2>
                    <p>
                        From historical cities to natural spectaculars, come see the best of the world!
                    </p>
                </div>

                <div className="mainContent grid">
                    {
                        Offer.map(({id,imgSrc,destTitle,location,price}) => {
                            return (
                                <div className="singleOffer">
                                    <div className="destImage">
                                        <img src={imgSrc} alt="Image Name" />
                                        <span className='discount'>
                                            30% off
                                        </span>
                                    </div>

                                    <div className="offerBody">
                                        <div className="price flex">
                                            <h4>{price}</h4>
                                            <span className="status">
                                                For Rent
                                            </span>
                                        </div>

                                        <div className="amenities flex">
                                            <div className="singleAmenity flex">
                                                <MdKingBed className="icon" />
                                                <small>2 Beds</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <MdBathtub className="icon" />
                                                <small>1 Bath</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <FaWifi className="icon" />
                                                <small>Wi-Fi</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <MdAirportShuttle className="icon" />
                                                <small>Shuttle</small>
                                            </div>
                                        </div>

                                        <div className="location flex">
                                            <MdLocationOn className="icon" />
                                            <small>450 Vine #310, {} </small>
                                        </div>

                                        <button className="btn flex">
                                            View Details
                                            <BsArrowRightShort className="icon" />
                                        </button>
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

export default Offers