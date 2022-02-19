import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';

const BigPie = () => {
  return (
    <Flex
      padding="1rem"
      maxWidth="100%"
      flexWrap="wrap"
      justifyContent="flex-start"
      paddingLeft="1.7rem"
      borderTop="2px solid #00000014"
      margin="0 15px"
    >
      <Flex maxWidth="160px" flexWrap="wrap" marginRight={5}>
        <Box color="#F1E15B" paddingTop={1} marginRight={2} fontSize="12px">
          <BsFillCircleFill />
        </Box>
        <Text maxWidth="80px" flexWrap="wrap" fontSize="13px" fontWeight="600">
          Processos abertos
        </Text>
      </Flex>
      <Flex maxWidth="160px" flexWrap="wrap" marginRight={5}>
        <Box color="#F47560" paddingTop={1} marginRight={2} fontSize="12px">
          <BsFillCircleFill />
        </Box>
        <Text maxWidth="80px" flexWrap="wrap" fontSize="13px" fontWeight="600">
          Processos ganhos
        </Text>
      </Flex>
      <Flex maxWidth="160px" flexWrap="wrap" marginRight={5}>
        <Box color="#E8A838" paddingTop={1} marginRight={2} fontSize="12px">
          <BsFillCircleFill />
        </Box>
        <Text maxWidth="80px" flexWrap="wrap" fontSize="13px" fontWeight="600">
          Processos perdidos
        </Text>
      </Flex>
      <Flex maxWidth="160px" flexWrap="wrap" marginRight={5}>
        <Box color="#E8C1A0" paddingTop={1} marginRight={2} fontSize="12px">
          <BsFillCircleFill />
        </Box>
        <Text maxWidth="80px" flexWrap="wrap" fontSize="13px" fontWeight="600">
          Processos declinados
        </Text>
      </Flex>
    </Flex>
  );
};

export default BigPie;
