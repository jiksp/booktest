import ApolloClient from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:4000" }),
  cache: new InMemoryCache()
})

// const client = new ApolloClient({
//   link: createHttpLink({ uri: "https://movieql.now.sh" }),
//   cache: new InMemoryCache()
// })

export default client
