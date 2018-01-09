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
            <a href="" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card