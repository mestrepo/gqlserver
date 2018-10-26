import { GraphQLDateTime } from 'graphql-iso-date'
import { Author, FortuneCookie } from './connectors'
import { Views, Tasks } from './tasks'

// A map of functions which return data for the schema.
const resolvers = {
  Date: GraphQLDateTime,
  Query: {
    getOneAuthor(_, args) {
      return Author.find({ where: args })
    },
    getAllAuthors() {
      return Author.findAll()
    },
    getOneTask(_, args){
      return Tasks.findOne(args.id)
    },
    getAllTasks() {
      return Tasks.find({}).fetch()
    },
    getIncompleteTasksCount() {
      return Tasks.find({ checked: { $ne: true } }).count();
    },
    getFortuneCookie() {
      return FortuneCookie.getOne()
    },
  },
  Mutation: {
    addTask(_, args) {
      let id = Tasks.insert({ text: args.text, createdAt: new Date() })
      return Tasks.findOne(id)
    },
    deleteTask(_, args) {
      Tasks.remove(args.id)
      return args.id
    },
    toggleChecked(_, args) {
      let task = Tasks.findOne(args.id)
      Tasks.update(args.id, {
        $set: { checked: ! task.checked },
      })
      return Tasks.findOne(args.id)
    },
  },
  Author: {
    posts(author) {
      return author.getPosts()
    }
  },
  Post: {
    author(post) {
      return post.getAuthor()
    },
    views(post) {
      return Views.rawCollection().findOne({ postId: post.id }).then(view => view.views)
    }
  }
}

export default resolvers