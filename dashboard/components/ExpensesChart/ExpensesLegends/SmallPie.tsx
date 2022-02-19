import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';

const SmallPie = ({ label }) => {
  return (
    <Flex
      padding="1rem 1.5rem"
      maxWidth="100%"
      flexWrap="wrap"
      fontSize={14}
      justifyContent="space-between"
      textAlign="center"
      borderTop="2px solid #00000014"
      margin="0 5px"
    >
      <Flex width="120px" flexWrap="wrap" marginBottom={2}>
        <Box color="#E8C1A0" paddingTop={1} marginRight={2} fontSize="12px">
          <BsFillCircleFill />
        </Box>
        <Text maxWidth="120px" flexWrap="wrap" fontWeight="600" fontSize="13px">
          {label === 'Processos de funil' ? 'Ana. Técnica' : 'Reg. Fund.'}
        </Text>
      </Flex>
      <Flex width="120px" flexWrap="wrap" marginBottom={2}>
        <Box color="#F47560" paddingTop={1} marginRight={2} fontSize="12px">
          <BsFillCircleFill />
        </Box>
        <Text maxWidth="120px" flexWrap="wrap" fontWeight="600" fontSize="13px">
          {label === 'Processos de funil' ? 'An. Comercial' : 'Social'}
        </Text>
      </Flex>
      <Flex width="120px" flexWrap="wrap" marginBottom={2}>
        <Box color="#F1E15B" paddingTop={1} marginRight={2} fontSize="12px">
          <BsFillCircleFill />
        </Box>
        <Text maxWidth="120px" flexWrap="wrap" fontWeight="600" fontSize="13px">
          {label === 'Processos de funil' ? 'Concluído' : 'Pes. Social'}
        </Text>
      </Flex>
      <Flex width="120px" flexWrap="wrap" marginBottom={2}>
        <Box color="#E8A838" paddingTop={1} marginRight={2} fontSize="12px">
          <BsFillCircleFill />
        </Box>
        <Text maxWidth="120px" flexWrap="wrap" fontWeight="600" fontSize="13px">
          {label === 'Processos de funil' ? 'Elaboração' : 'Sustentável'}
        </Text>
      </Flex>
      <Flex width="120px" flexWrap="wrap" marginBottom={2}>
        <Box color="#61CDBB" paddingTop={1} marginRight={2} fontSize="12px">
          <BsFillCircleFill />
        </Box>
        <Text maxWidth="120px" flexWrap="wrap" fontWeight="600" fontSize="13px">
          {label === 'Processos de funil' ? 'Suspenso' : 'Saneamento'}
        </Text>
      </Flex>
      <Flex width="120px" flexWrap="wrap" marginBottom={2}>
        <Box color="#97E3D5" paddingTop={1} marginRight={2} fontSize="12px">
          <BsFillCircleFill />
        </Box>
        <Text maxWidth="120px" flexWrap="wrap" fontWeight="600" fontSize="13px">
          {label === 'Processos de funil' ? 'Entregue' : 'Outros'}
        </Text>
      </Flex>
    </Flex>
  );
};

export default SmallPie;
