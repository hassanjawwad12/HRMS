import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import { format } from 'date-fns'
import React from 'react'

const DetailWidget = ({src, title, value, deadline, role, status, ...props}) => {
  return (
    <HStack
        spacing={3}
        {...props}
    >
        <Image src={src} w={10}/>
        <VStack
            spacing={deadline || role || status ? 0 : ''}
        >
            <Text
                w={'100%'}
            >
                {title}
            </Text>
            {
                deadline
                ? 
                    <>
                        <Text
                            fontSize={'x-small'}
                            w={'100%'}
                        >
                            Deadline
                        </Text>
                        <Text
                            fontSize={'x-small'}
                            w={'100%'}
                            color={'#A0AEC0'}
                        >
                            {format(deadline, 'MM/dd/yy')}
                        </Text>
                    </>
                :
                role 
                ?
                    <>
                        <Text
                            fontSize={'x-small'}
                            w={'100%'}
                        >
                            Role
                        </Text>
                        <Text
                            fontSize={'x-small'}
                            w={'100%'}
                            color={'#A0AEC0'}
                        >
                            {role}
                        </Text>
                    </>
                :
                status
                ?
                    <>
                        <Text
                            fontSize={'x-small'}
                            w={'100%'}
                        >
                            Status
                        </Text>
                        <Text
                            fontSize={'x-small'}
                            w={'100%'}
                            color={'#A0AEC0'}
                        >
                            {status}
                        </Text>
                    </>
                :
                    <Text
                        w={'100%'}
                        color={'#A0AEC0'}
                        fontWeight={300}
                    >
                        {value}
                    </Text>
            }
        </VStack>
    </HStack>
  )
}

export default DetailWidget