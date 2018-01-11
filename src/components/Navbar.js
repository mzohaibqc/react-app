import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'

class Navbar extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">NBS Posts</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" >
                <NavLink  to="/">Home</NavLink>
              </li>
              <li className="nav-item" >
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="nav-item" >
                <NavLink to="/career">Career</NavLink>
              </li>
              <li className="nav-item" >
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar