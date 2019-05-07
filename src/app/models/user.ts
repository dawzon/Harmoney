export interface Expenses{
    date: string;
    description: string;
    amount: number;
    category: string;
  }
  export interface Users{
    id?: number;
    name?: string;
    username?: string;
    password?: string;
    expenses?: Expenses[];
  }