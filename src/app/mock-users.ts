import { User } from './User';
//import { Expenses } from './Users';

export const USERS: User[] = [
    {
        name: 'Keenan',
        username: 'keenan.kaufman',
        password: 'admin',
        expenses: [{
                    //var myDate = new Date('2019-5-2T00:00:00');
                    date: new Date('2019-5-2T00:00:00'),
                    description: 'Electric Bill',
                    amount: 42,
                    category: 'Utilites'
        

        },
        {
                    date: new Date('2019-5-2T00:00:00'),
                    description: 'Rent',
                    amount: 350,
                    category: 'Rent' 
        }]
    },
    {
        name: 'Test User',
        username: 'asdf',
        password: 'qwer',
        expenses: []
    }
    
];