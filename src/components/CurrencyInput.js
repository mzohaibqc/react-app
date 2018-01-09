import React, { Component } from 'react'

class CurrencyInput extends Component { 
  render() {
    return (
      <div className="form-group col-xs-4 col-sm-4" style={{marginBottom: 20}}>
        {this.props.currency} <input className="form-control" type="text" value={this.props.value} onChange={this.props.onChange}/>
      </div>
    );
  }
}

export default CurrencyInput