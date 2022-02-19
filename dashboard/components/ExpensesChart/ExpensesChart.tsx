import { Flex } from '@chakra-ui/react';

import BigPie from './ExpensesLegends/BigPie';
import SmallPie from './ExpensesLegends/SmallPie';

import { PieChart } from '@/components/Charts/PieChart';
import { chartsTheme } from '@/styles/theme/components/index';

type ExpensesChartProps = {
  width: number;
  height: number;
  label: string;
  data: IData[];
};

export interface IData {
  id: string;
  value: number;
}

export const ExpensesChart = ({ width, height, label, data }: ExpensesChartProps) => {
  //const expensesQuery = useExpenses({});

  // const expensesChartData = useMemo(
  //   () =>
  //     _.chain(expensesQuery?.data)
  //       .groupBy('category')
  //       .map((value, key) => ({
  //         label: parseExpenseCategoryLabel(key as Category),
  //         value: _.reduce(value, (acc, expense) => Number(expense.value) + acc, 0),
  //       }))
  //       .value(),
  //   [expensesQuery.data],
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
      <PieChart
        label={label.toUpperCase()}
        height={height - 80}
        width={width}
        data={data}
        theme={chartsTheme}
        margin={
          label === 'Número de processos'
            ? { top: 9, right: 350, bottom: 9, left: 0 }
            : { top: 15, right: 0, bottom: 15, left: 0 }
        }
        innerRadius={0.6}
        padAngle={0}
        cornerRadius={0}
        activeOuterRadiusOffset={8}
        borderWidth={0}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        fill={[
          {
            match: {
              id: 'abertos',
            },
            id: 'solid',
          },
          {
            match: {
              id: 'ganhos',
            },
            id: 'solid',
          },
          {
            match: {
              id: 'perdidos',
            },
            id: 'solid',
          },
          {
            match: {
              id: 'declinados',
            },
            id: 'solid',
          },
        ]}
        legends={[]}
      />
      {label === 'Número de processos' ? <BigPie /> : <SmallPie label={label} />}
    </Flex>
  );
};
