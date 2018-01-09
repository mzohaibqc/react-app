import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://u5omc9rr79.execute-api.us-east-1.amazonaws.com/dev/graphql' }),
  cache: new InMemoryCache()
});

export default client