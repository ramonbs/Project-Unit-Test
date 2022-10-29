const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(getCharacter()).toBe(undefined);
    // Teste se a função retorna o objeto correto para o parâmetro 'Arya',
    expect(getCharacter('Arya')).toEqual({
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.'],
    });
    // Teste se a função retorna o objeto correto para o parâmetro 'Brienne',
    expect(getCharacter('Brienne')).toEqual({
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: [
        'Im No Lady, Your Grace.',
        'I, Brienne Of Tarth, Sentence You To Die.',
      ],
    });
    // Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
    expect(getCharacter('Melissandre')).toEqual({
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: [
        'Death By Fire Is The Purest Death.',
        'For The Night Is Dark And Full Of Terrors.',
      ],
    });
    // Teste se o parâmetro não é Case Sensitive, ou seja, independente de conter letras maiúsculas ou minúsculas retorna o mesmo objeto relativo a ele.
    expect(getCharacter('aryA')).toEqual({
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.'],
    });
    expect(getCharacter('bRieNNe')).toEqual({
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: [
        'Im No Lady, Your Grace.',
        'I, Brienne Of Tarth, Sentence You To Die.',
      ],
    });
    expect(getCharacter('MeLiSSandrE')).toEqual({
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: [
        'Death By Fire Is The Purest Death.',
        'For The Night Is Dark And Full Of Terrors.',
      ],
    });
    // Teste se ao passar um nome que não está na tabela, a função retorna undefined.
    expect(getCharacter('Rémy')).toBe(undefined);
  });
});
