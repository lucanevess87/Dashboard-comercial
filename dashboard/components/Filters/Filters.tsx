import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

import { StatusOportunidades } from '../../MOCK_OPORTUNIDADES';
import { EstagioProcessos, StatusProcessos, TipoProcessos } from '../../MOCK_PROCESSOS';

import Checkboxes from './Checkboxes';

import { FilterSelect } from '@/components/common/FilterSelect';

const allCategories = {
  status: ['All', ...StatusProcessos],
  estagio: ['All', ...EstagioProcessos],
  tipo: ['All', ...TipoProcessos],
  oportunidades: ['All', ...StatusOportunidades],
};

const Filters = ({ setActiveFilters, activeFilters }) => {
  const [categories] = useState(allCategories);

  const filtersBar = (
    <Box display="flex" justifyContent="space-between" width="fit-content">
      <FilterSelect title="Data de entrega" defaultValue={categories.status}>
        <Checkboxes
          type="status"
          categories={categories.status}
          setActivateFilters={setActiveFilters}
          activeFilters={activeFilters}
        />
      </FilterSelect>
      <FilterSelect title="Tag experiência" defaultValue={categories.estagio}>
        <Checkboxes
          type="estagio"
          categories={categories.estagio}
          setActivateFilters={setActiveFilters}
          activeFilters={activeFilters}
        />
      </FilterSelect>
      <FilterSelect title="Tipo de demanda" defaultValue={categories.tipo}>
        <Checkboxes
          type="tipo"
          categories={categories.tipo}
          setActivateFilters={setActiveFilters}
          activeFilters={activeFilters}
        />
      </FilterSelect>
      <FilterSelect title="Diretoria" defaultValue={categories.oportunidades}>
        <Checkboxes
          type="oportunidades"
          categories={categories.oportunidades}
          setActivateFilters={setActiveFilters}
          activeFilters={activeFilters}
        />
      </FilterSelect>
    </Box>
  );
  return <>{filtersBar}</>;
};

export default Filters;
