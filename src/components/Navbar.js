import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-home">
        <Link to="/" className="home">HOME</Link>
      </div>
      <div className="nav-components">
        <Link to="/genres">SEARCH BY GENRE</Link>
      </div>
    </nav>
  )
}

export default Navbar
