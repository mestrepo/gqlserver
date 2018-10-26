import { gql } from 'apollo-server-express'

// The GraphQL schema
const typeDefs = gql`
  scalar Date
  type Query {
    getOneAuthor(firstName: String, lastName: String): Author
    getAllAuthors: [Author]
    getOneTask(id: String!): Task
    getAllTasks: [Task]
    getIncompleteTasksCount: Int
    getFortuneCookie: String
  }
  type Mutation {
    addTask(text: String!): Task
    deleteTask(id: String!): String
    toggleChecked(id: String!): Task
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
    checked: Boolean
  }
`

export default typeDefs