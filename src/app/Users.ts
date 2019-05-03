interface Expenses{
    date: Date;
    description: string;
    amount: number;
    category: string;
}
export class Users{
    id: number;
    name: string;
    username: string;
    password: string;
    expenses: Expenses[];
}