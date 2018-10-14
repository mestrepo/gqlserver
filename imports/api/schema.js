import { gql } from 'apollo-server-express'

// The GraphQL schema
const typeDefs = gql`
  type Query {
    author(firstName: String, lastName: String): Author
    allAuthors: [Author]
    getFortuneCookie: String # we'll use this later
  }
  type Author {
    id: Int
    firstName: String
    lastName: String
    posts: [Post]
  }
  type Post {
    id: Int
    title: String
    text: String
    views: Int
    author: Author
  }
`;

export default typeDefs;