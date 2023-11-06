import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Roberto', age: 30 });
myDatabaseClassic.add({ name: 'Joana', age: 62 });
myDatabaseClassic.add({ name: 'Luiza', age: 61 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
