import React, { Component } from 'react'

import Navbar from './Navbar'
import Main from './Main'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (

      <div>
        <Navbar path="/" />
        <Main posts={this.state.posts}/>
      </div>
    )
  }
}

export default Home