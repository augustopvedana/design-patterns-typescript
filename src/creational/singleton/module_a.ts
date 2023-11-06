import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Augusto', age: 30 });
myDatabaseClassic.add({ name: 'Luiz', age: 62 });
myDatabaseClassic.add({ name: 'Ligia', age: 61 });

export { myDatabaseClassic };
