import gql from 'graphql-tag';
import client from './graphql-client'


export function getPosts(title='') {
  return client.query({
    query: gql`
      query Posts {
        posts (title: "${title}") {
          id
          title
          body
          author {
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
