import React from 'react'
import './Footer.css'
import { SiYourtraveldottv } from 'react-icons/si'
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">

          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className="flex"><SiYourtraveldottv className="icon" />Tevily</h1>
            </a>
          </div>

          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>

        </div>

        

        <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Helpful Links
          </span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Contact Us
          </span>
          <span className='phone'>+444 555 666</span>
          <span className='email'>123@gmail.com</span>
        </div>

      </div>
    </div>
  )
}

export default Footer