import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Scrollbar } from 'react-scrollbars-custom';

import MOCK_OPORTUNIDADES from '../../MOCK_OPORTUNIDADES';

import OportunityCard from './OportunityCard';

const Oportunities = () => {
  return (
    <Box>
      <Box
        bg="white"
        height="780px"
        width="390px"
        borderRadius="8px"
        padding="1rem"
        pl="0.1rem"
        pr="0.1rem"
        textAlign="center"
        overflowY="hidden"
      >
        <Text
          fontWeight="600"
          fontSize={18}
          textAlign="left"
          pl="3rem"
          pb="5px"
          pt="5px"
          font-family="Nunito Sans, sans-serif"
          fontStyle="normal"
        >
          OPORTUNIDADES EM ALTA
        </Text>
        <Scrollbar style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          <Box
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
            textAlign="center"
            alignItems="center"
            overflowY="auto"
            height="100%"
          >
            {MOCK_OPORTUNIDADES.map((card) => {
              return <OportunityCard key={card.id} {...card} />;
            })}
          </Box>
        </Scrollbar>
      </Box>
    </Box>
  );
};

export default Oportunities;
