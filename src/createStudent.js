const feedback = () => 'Eita pessoa boa!';

const createStudent = (string) => {
  const name = string;

  return {
   name,
   feedback,
  };
};

module.exports = createStudent;
