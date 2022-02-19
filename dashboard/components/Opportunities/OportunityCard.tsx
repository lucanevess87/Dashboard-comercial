import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Text, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router';

import { useActivateModal } from '../../context/activateModal';

type OportunityProps = {
  nome: string;
  valor: number;
  id: number;
  status: string;
  data: number;
};

const OportunityCard = ({ nome, valor, id }: OportunityProps) => {
  const navigate = useNavigate();
  const { setChangePage, setName, setId } = useActivateModal();

  const handleNavigate = () => {
    navigate('/oportunidades');
    setChangePage(true);
    setName(nome);
    setId(id);
  };
  return (
    <Box
      bg="#DAFAF4"
      width="90%"
      height="65px"
      borderRadius="8px"
      margin={4}
      mb={1.5}
      display="flex"
      justifyContent="space-between"
      key={id}
      padding={3}
      paddingRight={0}
      _hover={{
        transform: 'scale(103%)',
        cursor: 'pointer',
      }}
    >
      <Flex flexDirection="column" justifyContent="space-between">
        <Text fontSize={14} fontWeight="600" textAlign="left" mb={1}>
          {nome.toUpperCase()}
        </Text>
        <Text textAlign="left" fontSize={13}>
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)}
        </Text>
      </Flex>

      <Button
        border="none"
        bg="transparent"
        height="100%"
        mr={0}
        pr={0}
        pl={0}
        outline="none"
        _hover={{
          background: 'transparent',
        }}
        borderLeft="1px solid #00000029"
        borderRadius={0}
        onClick={handleNavigate}
      >
        <ChevronRightIcon w={6} h={6} />
      </Button>
    </Box>
  );
};

export default OportunityCard;
