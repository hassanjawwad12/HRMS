import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SidebarLink = ({ name, src, route, active, onClick }) => {

    const navigate = useNavigate();

    return (
        <VStack
            w={"100%"}
            boxShadow={active ? '0px 4px 13.6px 0px rgba(0, 0, 0, 0.25) inset' : ''}
            paddingY={3}
            background={active ? '#394653' : 'transparent'}
            _hover={{
                background: '#394653',
                boxShadow: '0px 4px 13.6px 0px rgba(0, 0, 0, 0.25) inset'
            }}
            cursor={'pointer'}
            onClick={() => { onClick(); navigate(route); }}
        >
            <Image
                src={src}
                w={'45%'}
            />
            <Text
                fontSize={'x-small'}
                fontWeight={200}
                color={'white'}
            >
                {name}
            </Text>
        </VStack>
    )
}

export default SidebarLink