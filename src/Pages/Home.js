import React from 'react';
import './../styles/global-styles.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='App-header'>
      <p className='principal-title'>Infinity Human art</p>
      <Link
        to="/list"
        className="App-link"
        rel="noopener noreferrer"
      >
        Let's go
      </Link>
    </div>
  )
}

export default Home
