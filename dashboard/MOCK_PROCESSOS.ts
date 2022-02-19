import faker from 'faker';

export const ChartTitles = [
  'Número de processos',
  'Processos de funil',
  'Processos por tag de experiência',
];

export const StatusProcessos = ['Declinados', 'Ganhos', 'Abertos', 'Perdidos'];

export const EstagioProcessos = [
  'Análise Técnica',
  'Análise Comercial',
  'Concluído',
  'Elaboração',
  'Suspenso',
  'Entregue',
];

export const TipoProcessos = [
  'Regularização Fundiária',
  'Social',
  'Pesquisa Social',
  'Sustentável',
  'Saneamento',
  'Outros',
];

export const Processos = [StatusProcessos, EstagioProcessos, TipoProcessos];

export const MOCK_PROCESSOS: any[] = [];

for (let i = 0; i < 50; i++) {
  MOCK_PROCESSOS.push({
    id: faker.datatype.number(),
    codigo: faker.datatype.number(),
    status: faker.random.arrayElement(StatusProcessos),
    estagio: faker.random.arrayElement(EstagioProcessos),
    tipo: faker.random.arrayElement(TipoProcessos),
    nome: faker.random.word(),
  });
}
