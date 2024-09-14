import { HStack, Text } from '@chakra-ui/react'
import React from 'react'
import BlueButton from './BlueButton'

const TableRow = ({ record, onView }) => {
    return (
        <HStack
            w={'100%'}
            justifyContent={'center'}
            color={'white'}
        >
            {
                record.map(field => <Text key={field} paddingY={3} w={`${100 / (record.length + 1)}%`} textAlign={'center'}>{field}</Text>)
            }
            <HStack w={`${100 / (record.length + 1)}%`} marginX={'auto'} justifyContent={'center'}>
                <BlueButton btnText={'View'} onClick={onView} />
            </HStack>
        </HStack>
    )
}

export default TableRow