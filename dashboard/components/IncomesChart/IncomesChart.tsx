import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import MOCK_OPORTUNIDADES from '../../MOCK_OPORTUNIDADES';

import BigBump from './IncomesLegend/BigBump';

import BumpChart from '@/components/Charts/BumpChart';

type IncomesChartProps = {
  width: number;
  height: number;
  label: string;
};

export interface DataXY {
  x: string;
  y: number;
}

export interface IDataIncome {
  id: string;
  data: DataXY[];
}

export const IncomesChart = ({ width, height, label }: IncomesChartProps) => {
  //const incomesQuery = useIncomes({});
  const [data, setData] = useState<IDataIncome[]>([] as IDataIncome[]);

  useEffect(() => {
    handleDataFake();
  }, []);

  const handleDataFake = () => {
    setData([
      {
        id: 'Ganho',
        data: [
          {
            x: 'out/19',
            y: MOCK_OPORTUNIDADES[0].numProcessos,
          },
          {
            x: 'nov/19',
            y: MOCK_OPORTUNIDADES[1].numProcessos,
          },
          {
            x: 'dez/19',
            y: MOCK_OPORTUNIDADES[2].numProcessos,
          },
          {
            x: 'jan/20',
            y: MOCK_OPORTUNIDADES[3].numProcessos,
          },
          {
            x: 'fev/20',
            y: MOCK_OPORTUNIDADES[4].numProcessos,
          },
          {
            x: 'mar/20',
            y: MOCK_OPORTUNIDADES[5].numProcessos,
          },
          {
            x: 'abr/20',
            y: MOCK_OPORTUNIDADES[6].numProcessos,
          },
        ],
      },
      {
        id: 'Perdido',
        data: [
          {
            x: 'out/19',
            y: MOCK_OPORTUNIDADES[7].numProcessos,
          },
          {
            x: 'nov/19',
            y: MOCK_OPORTUNIDADES[8].numProcessos,
          },
          {
            x: 'dez/19',
            y: MOCK_OPORTUNIDADES[9].numProcessos,
          },
          {
            x: 'jan/20',
            y: MOCK_OPORTUNIDADES[10].numProcessos,
          },
          {
            x: 'fev/20',
            y: MOCK_OPORTUNIDADES[11].numProcessos,
          },
          {
            x: 'mar/20',
            y: MOCK_OPORTUNIDADES[6].numProcessos,
          },
          {
            x: 'abr/20',
            y: MOCK_OPORTUNIDADES[6].numProcessos,
          },
        ],
      },
    ]);
  };

  // const incomesChartData = useMemo(
  //   () =>
  //     _.chain(incomesQuery?.data)
  //       .groupBy('source')
  //       .map((value, key) => ({
  //         label: parseIncomeSourceLabel(key as Sources),
  //         value: _.reduce(value, (acc, income) => Number(income.value) + acc, 0),
  //       }))
  //       .value(),
  //   [incomesQuery.data],
  // );

  return (
    <Flex
      width={width}
      height={height}
      bg="white"
      flexDirection="column"
      justifyContent="space-around"
      boxShadow="sm"
      borderRadius="md"
    >
      <BumpChart width={width} height={height} label={label.toUpperCase()} data={data} />
      <BigBump />
    </Flex>
  );
};
