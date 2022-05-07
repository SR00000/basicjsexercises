// spread
const person ={
  name: 'Sam'
};

const newPerson = {
  ...person,
  age:34
}

console.log(newPerson)

// rest
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));
