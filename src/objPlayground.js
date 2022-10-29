const sum = (number1, number2) => number1 + number2;
const mult = (number1, number2) => number1 * number2;
const div = (number1, number2) => Math.floor(number1 / number2);
const sub = (number1, number2) => number1 - number2;

const calculator = (number1, number2) => {
  const obj = {
    sum: sum(number1, number2),
    mult: mult(number1, number2),
    div: div(number1, number2),
    sub: sub(number1, number2),
  };
  return obj;
};

const arrayGenerator = (type, object) => {
  if (type === 'keys') {
    return Object.keys(object);
  } 
  if (type === 'values') {
    return Object.values(object);
  } 
  if (type === 'entries') {
    return Object.entries(object);
  }
};

module.exports = { calculator, arrayGenerator };
