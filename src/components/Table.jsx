import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Table = ({ head, children }) => {
    return (
        <>
            <HStack
                w={['98%', '95%', '90%', '90%', '90%']}
                justifyContent={'center'}
                color={'white'}
                paddingX={2}
                fontFamily={'Lexend'}
            >
                {
                    head.map(heading => <Text key={heading} paddingY={3} w={`${100/head.length}%`} textAlign={'center'}>{heading}</Text>)
                }
            </HStack>
            <VStack
                w={['98%', '95%', '90%', '90%', '90%']}
                background={'brand.main'}
                paddingX={2}
                paddingY={7}
                rounded={'lg'}
                shadow={'xl'}
                fontFamily={'Lexend'}
                overflowY={'auto'}
                h={'60%'}
            >
               {children}
            </VStack>
        </>
  )
}

export default Table

/*
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const TableComponent = ({ head, rows }) => {
  const navigate = useNavigate();

  const handleView = (memberId) => {
    navigate(`/pms/members/${memberId}`);
  };

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          {head.map((heading) => (
            <Th key={heading} textAlign="center">{heading}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row) => (
          <Tr key={row.id}>
            {row.record.map((field, index) => (
              <Td key={index} textAlign="center">{field}</Td>
            ))}
            <Td textAlign="center">
              <Button colorScheme="blue" onClick={() => handleView(row.id)}>
                View
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  
*/