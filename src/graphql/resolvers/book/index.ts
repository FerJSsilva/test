import data from '../../../data/mock-data.json';
import { Book } from '../../../types/Book';

const getAll = ():Book[] => data.books;

export const book = {
  getAll,
};
