const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {

    expect(createMenu({})).toHaveProperty(['fetchMenu']);

    expect(createMenu({ food: {}, drink: {} }).fetchMenu()).toMatchObject({
      food: {},
      drink: {},
    });
    
    const objetoQualquer = { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} };
    const createMenuDeObjeto = createMenu(objetoQualquer);
    expect(createMenuDeObjeto.fetchMenu()).toMatchObject(objetoQualquer);

    expect(createMenu({}).consumption).toEqual([]);

    const objetoRetornado = createMenu(objetoQualquer);
    objetoRetornado.order('coxinha');
    expect(objetoRetornado.consumption).toEqual(['coxinha']);

    objetoRetornado.order("agua");
    objetoRetornado.order("sopa");
    objetoRetornado.order("sashimi");

    expect(objetoRetornado.consumption).toEqual(['coxinha', 'agua', 'sopa', 'sashimi']);

    const objectNew = createMenu(objetoQualquer);
    objectNew.order('coxinha');
    objectNew.order('agua');
    objectNew.order('coxinha');
    expect(objectNew.consumption).toEqual(['coxinha', 'agua', 'coxinha']);

    const objetoRetornado2 = createMenu(objetoQualquer);
    objetoRetornado2.order('coxinha');
    objetoRetornado2.order('agua');
    objetoRetornado2.order('coxinha');
    expect(objetoRetornado2.pay()).toEqual(13);
  });
});
