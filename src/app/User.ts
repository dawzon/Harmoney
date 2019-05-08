interface Expenses{
   date: Date;
   description: string;
   amount: number;
   category: string;
}

export class User {
   name: string
   password: string
   username: string 
   expenses: Expenses[]
}