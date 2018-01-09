import React, { Component } from 'react'

import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <Main posts={this.state.posts}/>
        <Footer />
      </div>
    )
  }
}

export default App