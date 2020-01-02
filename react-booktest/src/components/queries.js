import gql from "graphql-tag"

export const MAIN_PAGE = gql`
  query {
    books {
      id
      title
      author
      thumbnail
    }
  }
`
