import React, { Component } from 'react'


import Jumbotron from './Jumbotron'
import CurrencyConverter from './CurrencyConverter';
import SearchBar from './SearchBar';
import Posts from './Posts';
import { getPosts, getAllData } from '../services/data'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = { search: '', authorId: '', posts: [], authors: [] }
    this.onChangeSearch = this.onChangeSearch.bind(this)
    this.onChangeAuthor = this.onChangeAuthor.bind(this)
  }

  componentWillMount() {
    getAllData(this.state.search, this.state.authorId).then((data) => {
      this.setState({ posts: data.posts || [], authors: data.users || [] })
    })
  }

  onChangeSearch(event) {
    let search = event.target.value
    this.setState({ search })
    getPosts(search, this.state.authorId).then((posts) => {
      this.setState({ posts })
    })
  }

  onChangeAuthor(event) {
    let authorId = event.target.value
    this.setState({ authorId })
    getPosts(this.state.search, authorId).then((posts) => {
      this.setState({ posts })
    })
  }

  render() {
    
    return (
      <div className="container" id="main">
        <Jumbotron />
        <CurrencyConverter />
        <SearchBar
          search={this.state.search}
          authors={this.state.authors}
          authorId={this.state.authorId}
          onChangeSearch={this.onChangeSearch}
          onChangeAuthor={this.onChangeAuthor} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default Main