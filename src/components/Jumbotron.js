import React, { Component } from 'react'

import Clock from './Clock'

class Jumbotron extends Component {
  render() {
    return (
      <header className="jumbotron my-4">
        <h2 className="display-3">A Warm Welcome!<Clock /></h2>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
      </header>
    );
  }
}

export default Jumbotron