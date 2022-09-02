import { book } from './book';
import { loan } from './loan';
import { user } from './user';

// (parent, args, context, info) resolver params

const resolvers = {
  Query: {
    books: book.getAll,
    users: user.getAll,
    loans: loan.getAll,
  },
  Book: {
    owner: user.getById,
  },
};

export default resolvers;
