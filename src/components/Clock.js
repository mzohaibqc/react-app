import React, { Component } from 'react'

class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = {time: new Date()}
    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  tick () {
    this.setState({time: new Date()})
  }
  render() {
    return (
      <span id="clock"> {this.state.time.toLocaleTimeString()} </span>
    );
  }
}

export default Clock