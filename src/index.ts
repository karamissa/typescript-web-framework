import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });
console.log(user);

user.set({ name: 'Karam', age: 21 });
console.log(user);
