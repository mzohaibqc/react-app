import React, { Component } from 'react'

import Card from './Card'

class Posts extends Component {

  createPost (post) {
    return <Card key={post.id} title={post.title} author={post.user} text={post.body.substr(0, 160) + ' ...'} />
  }
  render() {
    return (
      <div className="row text-center">
        {this.props.posts.map(post => this.createPost(post))}
      </div>
    );
  }
}

export default Posts

