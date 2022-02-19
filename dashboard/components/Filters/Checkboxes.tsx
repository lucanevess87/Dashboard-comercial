import { Checkbox } from '@chakra-ui/react';
import React from 'react';

const Checkboxes = ({ type, categories, setActivateFilters, activeFilters }) => {
  const filterTakeOff = (category) => {
    setActivateFilters({
      status: activeFilters.status.filter((item) => item !== category),
      estagio: activeFilters.estagio.filter((item) => item !== category),
      tipo: activeFilters.tipo.filter((item) => item !== category),
    });
  };

  const filterAddBack = (category) => {
    setActivateFilters({
      status: activeFilters.status.includes(category)
        ? [...activeFilters.status]
        : [...activeFilters.status, category],
      tipo: activeFilters.tipo.includes(category)
        ? [...activeFilters.tipo]
        : [...activeFilters.tipo, category],
      estagio: activeFilters.estagio.includes(category)
        ? [...activeFilters.estagio]
        : [...activeFilters.estagio, category],
    });
  };

  const checkedOrNot = (checked, category) => {
    if (checked) {
      filterAddBack(category);
    } else {
      filterTakeOff(category);
    }
  };

  return (
    <>
      {categories.map((category) => {
        return (
          <Checkbox
            colorScheme="primary"
            value={category}
            onChange={(e) => checkedOrNot(e.target.checked, e.target.value)}
            key={category}
          >
            {category}
          </Checkbox>
        );
      })}
    </>
  );
};

export default Checkboxes;
