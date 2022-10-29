const verifyingIsNumber = (param) => {
  if (param.length === 0) {
    throw new Error('undefined');
  }
  for (let i = 0; i < param.length; i += 1) {
    if (typeof param[i] !== 'number') {
      throw new Error('undefined');
    }
  }
};

const average = (param) => {
  try {
    verifyingIsNumber(param);
    const initial = 0;
    const sum = param.reduce((previous, current) => previous + current, initial);
    const result = sum / param.length;

    return Math.round(result);
  } catch (e) {
    console.log(e.message);
    
    return undefined;
  }
};

average([1, 2, 3, '4', 5]);

module.exports = average;
