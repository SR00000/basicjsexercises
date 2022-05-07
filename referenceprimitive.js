// primitive type (numbers, booleans)

const number = 1;
const num2 = number;

console.log(num2);

// reference type (objects, arrays)

const person = {
  name: 'Sam'
};

const secondPerson = person;

person.name = 'Saman';

console.log(secondPerson);

// a true copy that makes it immutable

const person = {
  name: 'Sam'
};

const secondPerson = {
  ...person
}

person.name = 'Saman';

console.log(secondPerson);
