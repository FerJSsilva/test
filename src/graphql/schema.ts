import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    books: [Book]
    users: [User]
    loans: [Loan]
  }

  type Book {
    id: String
    name: String
    owner: User
  }

  type User {
    id: String
    name: String
    email: String
    books: [Book]
  }

  type Loan {
    id: String
    book_id: String
    lender: User
    loan_date: String
    devolution_deadline: String
    devolution_date: String
    is_returned: Boolean
  }
`;

export default typeDefs;
