import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    let options = this.props.authors.map(a => <option value={a.id} key={a.id}>{a.name}</option>)
    options = [<option value='' key={0}>Select Author</option>].concat(options)
    let dropdownStyle = {
      paddingLeft: 10
    }
    return (
      <div className="container" id="search-div">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <input type="text" className="form-control col-xs-12" placeholder="Search" id="txtSearch" onChange={this.props.onChangeSearch} />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="row" style={dropdownStyle}>
              <select value={this.props.authorId} onChange={this.props.onChangeAuthor} className="form-control">
                {options}
              </select>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default SearchBar

