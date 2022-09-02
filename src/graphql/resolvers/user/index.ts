import data from '../../../data/mock-data.json';
import { Book } from '../../../types/Book';
import { User } from '../../../types/User';

const getAll = ():User[] => data.users;
const getById = (parent: Book): User => data.users.find((user) => user.id === parent?.id);

export const user = {
  getAll,
  getById,
};
