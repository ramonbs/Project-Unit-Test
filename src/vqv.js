const verifyingIfValueIsUndefined = (name, age) => {
  if (name.length === 0 || age.length === 0) {
    return undefined;
  }
};

const vqv = (name, age) => {
  try {
    verifyingIfValueIsUndefined(name, age);
    const paragraph = `Oi, meu nome é ${name}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;

    return paragraph;
  } catch (e) {
    console.log(e.message);
    
    return undefined;
  }
};

module.exports = vqv;
