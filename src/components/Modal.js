import React, { Component } from 'react'

class Modal extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary" data-toggle="modal" data-target={this.props.moadlId}>{this.props.buttonText}</button>
        <div className="modal fade bd-example-modal-lg" id={this.props.moadlId} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">{this.props.text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal
