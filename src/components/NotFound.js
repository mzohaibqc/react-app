import React, { Component } from 'react'

import Navbar from './Navbar'

class NotFound extends Component {
  render() {
    return (
      <div>
       <Navbar path="/about" />
        <h1 style={{fontSize: 100}}>Not Found</h1>
      </div>
    )
  }
}

export default NotFound