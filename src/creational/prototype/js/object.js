const personPrototype = {
  firstName: 'Augusto',
  lastName: 'Vedana',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson.fullName());
