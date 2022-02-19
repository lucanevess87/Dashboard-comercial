import React from 'react';

import { MOCK_PROCESSOS } from '../../MOCK_PROCESSOS';
import { ExpensesChart } from '../ExpensesChart/ExpensesChart';
import { IncomesChart } from '../IncomesChart/IncomesChart';

const filterByProp = (nameProp, prop) => {
  return MOCK_PROCESSOS.filter((item) => item[nameProp] === prop);
};

const ChartsContainer = ({ activeFilters }) => {
  const filteredData = {
    status: [],
    estagio: [],
    tipo: [],
  };

  Object.keys(activeFilters).forEach((key) => {
    const dataFormat: any[] = [];
    activeFilters[key].forEach((status) => {
      dataFormat.push({
        id: status,
        value: filterByProp(key, status).length,
      });
    });
    filteredData[key] = dataFormat;
  });
  return (
    <>
      {/* //map */}

      <ExpensesChart
        width={650}
        height={380}
        label={'Número de processos'}
        data={filteredData.status}
      />
      <ExpensesChart
        width={320}
        height={380}
        label={'Processos de funil'}
        data={filteredData.estagio}
      />
      <IncomesChart width={650} height={380} label={'Forecast oportunidades'} />
      <ExpensesChart
        width={320}
        height={380}
        label={'Proce. por tag de experiência'}
        data={filteredData.tipo}
      />
    </>
  );
};

export default ChartsContainer;
