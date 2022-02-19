import faker from 'faker';

export const StatusOportunidades = ['ganho', 'perdido'];
const MOCK_OPORTUNIDADES: any = [];

for (let i = 0; i < 30; i++) {
  MOCK_OPORTUNIDADES.push({
    id: faker.datatype.number(),
    nome: faker.random.words(2),
    status: faker.random.arrayElement(StatusOportunidades),
    numProcessos: faker.datatype.number({
      max: 20,
    }),
    valor: faker.datatype.number(),
    data: faker.date.between(new Date(2019, 0, 1), new Date(2019, 7, 30)),
  });
}

export default MOCK_OPORTUNIDADES;
