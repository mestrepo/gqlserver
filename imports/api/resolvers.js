import { Author, FortuneCookie } from './connectors';
import { Views } from './tasks';

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    author(_, args) {
      return Author.find({ where: args });
    },
    allAuthors() {
      return Author.findAll();
    },
    getFortuneCookie() {
      return FortuneCookie.getOne();
    }
  },
  Author: {
    posts(author) {
      return author.getPosts();
    }
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
    views(post) {
      return Views.rawCollection().findOne({ postId: post.id }).then(view => view.views);
    }
  }
};

export default resolvers;