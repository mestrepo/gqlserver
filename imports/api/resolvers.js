import { Author, FortuneCookie } from './connectors'
import { Views, Tasks } from './tasks'

// A map of functions which return data for the schema.
const resolvers = {
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
    getFortuneCookie() {
      return FortuneCookie.getOne()
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