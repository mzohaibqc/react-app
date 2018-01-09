import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card" style={{height: 400}}>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.text}</p>
          </div>
          <div className="card-footer">
            Author : {this.props.author.name}
          </div>
        </div>
      </div>
    );
  }
}

export default Card