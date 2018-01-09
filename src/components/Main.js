import React, { Component } from 'react'

import Card from './Card'
import Jumbotron from './Jumbotron'
import CurrencyConverter from './CurrencyConverter';
import { getPosts } from '../services/data'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = { search: '', posts: [] }
    this.search = this.search.bind(this)
  }

  componentWillMount() {
    getPosts().then((posts) => {
      this.setState({ posts })
    })
  }

  search(event) {
    let search = event.target.value
    this.setState({ search })
    getPosts(search).then((posts) => {
      this.setState({ posts })
    })
  }

  render() {
    let search = this.state.search
    let posts = this.state.posts.map((post) => <Card key={post.id} title={post.title} text={post.body.substr(0, 160) + ' ...'} />)
    return (
      <div className="container" id="main">
        <Jumbotron />
        <CurrencyConverter />
        <div className="container" id="search-div">
          <div className="row">
            <input type="text" className="form-control col-xs-12" placeholder="Search" id="txtSearch" onChange={this.search} />
          </div>
        </div>
        <div className="row text-center">
          {posts}
        </div>
      </div>
    );
  }
}

export default Main