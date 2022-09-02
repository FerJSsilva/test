export interface Loan {
  id: string;
  book_id: string;
  lender_id: string;
  loan_date: string;
  devolution_deadline: string;
  devolution_date: string;
  is_returned: boolean;
}
