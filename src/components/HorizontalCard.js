import React, { Component } from 'react'

class HorizontalCard extends Component {
  render() {
    return (
      <div className="container py-3">
        <div className="card">
          <div className="row ">
            <div className="col-md-4">
              <img src="https://placeholdit.imgix.net/~text?txtsize=18&txt=200%C3%97200&w=200&h=200" className="w-100" />
            </div>
            <div className="col-md-8 px-3">
              <div className="card-block px-3">
                <h4 className="card-title">{this.props.title}</h4>
                <p className="card-text">{this.props.text} </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalCard