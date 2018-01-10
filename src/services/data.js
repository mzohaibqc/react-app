import gql from 'graphql-tag';
import client from './graphql-client'


export function getPosts(title='', authorId) {
  let query = "";
  if (title) {
    query = `title: "${title}"`;
  }
  if (authorId) {
    query += ` userId: ${authorId}`
  }
  if (query) {
    query = `(${query})`
  }

  return client.query({
    query: gql`
      query Posts {
        posts ${query} {
          id
          title
          body
          user {
            id
            name
          }
        }
      }
    `,
  })
    .then(res => res.data.posts)
    .catch(error => {
      console.error(error)
      return []
    })
}

export function getAllData(title, authorId) {
  return client.query({
    query: gql`
      query Posts {
        posts (title: "${title}") {
          id
          title
          body
          user {
            id
            name
          }
        }
        users {
          id
          name
        }
      }
    `,
  })
    .then(res => res.data)
    .catch(error => {
      console.error(error)
      return {}
    })
}