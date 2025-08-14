const { users, posts } = require('../data/sampleData');

const resolvers = {
  Query: {
    users: () => users,
    user: (_, args) => users.find(u => u.id === args.id),
    posts: () => posts
  },
  Mutation: {
    createUser: (_, { name, age }) => {
      const newUser = { id: String(users.length + 1), name, age };
      users.push(newUser);
      return newUser;
    },
    createPost: (_, { title, userId }) => {
      const newPost = { id: String(posts.length + 1), title, userId };
      posts.push(newPost);
      return newPost;
    }
  },
  User: {
    posts: (parent) => posts.filter(p => p.userId === parent.id)
  },
  Post: {
    author: (parent) => users.find(u => u.id === parent.userId)
  }
};

module.exports = resolvers;
