import { Author, FortuneCookie } from './connectors';

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    author(_, args) {
      return Author.find({ where: args });
    },
    allAuthors(_, args) {
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
      // return View.findOne({ postId: post.id }).then(view => view.views);
    }
  }
};

export default resolvers;