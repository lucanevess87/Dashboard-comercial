import { Box } from '@chakra-ui/react';
import { useState } from 'react';

import ChartsContainer from '../components/ChartsContainer/ChartsContainer';
import Filters from '../components/Filters/Filters';
import Oportunities from '../components/Opportunities/Oportunities';
import { StatusOportunidades } from '../MOCK_OPORTUNIDADES';
import { EstagioProcessos, StatusProcessos, TipoProcessos } from '../MOCK_PROCESSOS';

import dashboard from '@/assets/dashboard.svg';
import * as LC from '@/components/LC';
import { Page } from '@/components/Page';

export interface IData {
  id: string;
  value: number;
}

const activeFiltersInitial = {
  status: [...StatusProcessos],
  estagio: [...EstagioProcessos],
  tipo: [...TipoProcessos],
  oportunidades: [...StatusOportunidades],
};

export const Dashboard = () => {
  const [activeFilters, setActiveFilters] = useState(activeFiltersInitial);

  return (
    <Page
      title="Dashboard"
      filters={<Filters setActiveFilters={setActiveFilters} activeFilters={activeFilters} />}
      icon={<img src={dashboard} alt="bell" width="30rem" />}
    >
      <LC.Horizontal spaceBetween>
        <Box
          display="grid"
          gridTemplateColumns="1.4fr 0.6fr"
          gridTemplateRows="1.5fr"
          gridGap="20px 35px"
          marginTop="0.8rem"
        >
          <Box
            display="grid"
            gridTemplateColumns="1.4fr 0.6fr"
            gridTemplateRows="1fr 1fr"
            gridGap="20px"
          >
            <ChartsContainer activeFilters={activeFilters} />
          </Box>
          <Oportunities />
        </Box>
      </LC.Horizontal>
    </Page>
  );
};
