import React, { Component } from 'react'

import Navbar from './Navbar'

class About extends Component {
  render() {
    return (
      <div>
       <Navbar path="/about" />
        <h1>About</h1>
      </div>
    )
  }
}

export default About