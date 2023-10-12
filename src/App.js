// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Popular from "./components/Popular/Popular";
import Offers from "./components/Offers/Offers";
import About from "./components/About/About"
import Blog from "./components/Blog/Blog"
import Footer from "./components/Footer/Footer"


const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Popular/>
      <Offers/>
      <About/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App

