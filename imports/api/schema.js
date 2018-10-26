import { gql } from 'apollo-server-express'

// The GraphQL schema
const typeDefs = gql`
  scalar Date
  type Query {
    getOneAuthor(firstName: String, lastName: String): Author
    getAllAuthors: [Author]
    getOneTask(id: String!): Task
    getAllTasks: [Task]
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
  type Task {
    _id: String
    text: String
    createdAt: Date
  }
`

export default typeDefs