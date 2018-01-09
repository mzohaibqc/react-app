import React, { Component } from 'react'

import CurrencyInput from './CurrencyInput'

class CurrencyConverter extends Component {
  constructor(props) {
    super(props)
    this.onChangeFirst = this.onChangeFirst.bind(this)
    this.onChangeSecond = this.onChangeSecond.bind(this)
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this)
    this.options = [
      {
        id: 1,
        first: 'USD',
        second: 'PKR',
        rate: 109
      },
      {
        id: 2,
        first: 'ERU',
        second: 'PKR',
        rate: 190
      },
      {
        id: 3,
        first: 'SAR',
        second: 'PKR',
        rate: 27
      }
    ]
    let option = this.options[0]
    this.state = {firstCurrency: option.first, secondCurrency: option.second, rate: option.rate, value: 1 }
  }

  onChangeFirst(event) {
    this.setState({ value: event.target.value })
  }

  onChangeSecond(event) {
    this.setState({ value: event.target.value / this.props.rate })
  }

  handleCurrencyChange(event) {
    console.log(event.target.value)
    let option = this.options.find(o => o.id === Number(event.target.value))
    this.setState({firstCurrency: option.first, secondCurrency: option.second, rate: option.rate })
  }

  render() {
    let options = this.options.map(o => <option value={o.id} key={o.id}>{o.first} -> {o.second}</option>)
    return (
      <div className="row">
        <div className="form-group col-xs-4 col-sm-4">
          Currency
          <select value onChange={this.handleCurrencyChange} className="form-control">
            {options}
          </select>
        </div>

        <CurrencyInput currency={this.state.firstCurrency} onChange={this.onChangeFirst} value={this.state.value} />
        <CurrencyInput currency={this.state.secondCurrency} onChange={this.onChangeSecond} value={this.state.value * this.state.rate} />

      </div>
    );
  }
}

export default CurrencyConverter