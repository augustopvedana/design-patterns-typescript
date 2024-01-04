export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('Rua Bebedouro', 80);
const person1 = new Person('Guga', 30);
person1.addAddress(address1);
const person2 = person1.clone();

person2.name = 'Janete';
console.log(person2);
console.log(person2.name);
console.log(person1.addresses);
