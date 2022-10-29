const myCounter = () => {
  const myArray = [];
  for (let i = 0; i <= 3; i += 1) {
    myArray.push(i);
    for (let j = 2; j <= 3; j += 1) {
      myArray.push(j);
    }
  }
  return myArray;
};

module.exports = myCounter;
