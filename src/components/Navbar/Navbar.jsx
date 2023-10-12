import React, {useState} from 'react'
import './Navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
// import './Navbar.scss'

const Navbar = () => {
  
  // code to toogle/shoe navbar
  const[active, setActive] = useState('navbar')
  const showNav = ()=>{
    setActive('navbar activeNavbar')
  }
  //code to remove navbar
  const removeNav = ()=>{
    setActive('navbar')
  }

  //code to agg background color to header
  const[transparent, setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrolly >= 10)
    {
      setTransparent('header activeHeader')
    }
    else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)
  return (
    <section className='navbarSection'>
        <div className={transparent}>
          <div className="logoDiv">
            <a href="#" className="logo">
              <h1 className='flex'><SiYourtraveldottv className="icon"/>Tevily</h1>
            </a>
          </div>
          <div className={active}>
            <ul className="navlists flex">
              <li className="navItem">
                <a href="#" className="navLink">Home</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Products</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Resources</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Contact</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Blog</a>
              </li>
              <div className="headrBtns flex">
                <button className='btn loginBtn'>
                  <a href="#">Log in</a>
                </button>
                <button className='btn'>
                  <a href="#">Sign Up</a>
                </button>
              </div>
            </ul>
            <div onClick={removeNav} className="closeNavbar">
              <AiFillCloseCircle className="icon"/>
            </div>
          </div>
          <div onClick={showNav} className="toogleNavbar">
            <TbGridDots className="icon"/>
          </div>
        </div>
    </section>
  )
}

export default Navbar