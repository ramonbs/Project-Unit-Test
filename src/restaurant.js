const createMenu = (objetoPassadoPorParametro) => { 
  const fetchMenu = () => objetoPassadoPorParametro;
  const consumption = [];

  const obj = {
    fetchMenu,
    consumption,
    order: (request) => {
      consumption.push(request);
    },
    pay: () => {
      let soma = 0;
      consumption.forEach((element) => {
       soma += objetoPassadoPorParametro.food[element] || objetoPassadoPorParametro.drink[element];
      });
      return Math.round(soma * 1.1);
    },
  };

  return obj;
};

module.exports = createMenu;
