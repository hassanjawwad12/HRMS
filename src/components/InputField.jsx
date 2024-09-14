import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import React from 'react'

const InputField = ({name, value, onChange, icon, forgotPassword}) => {
  return (
    <VStack
        w={'100%'}
        fontWeight={'200'}
        spacing={0}
    >
        <Text
            w={'100%'}
            fontSize={'small'}
        >
            {name}
        </Text>
        <HStack
            border={'none'}
            borderBottom={'1px solid white'}
            rounded={'none'}
            w={'100%'}
            paddingY={2}
        >
            <Image
                src={icon}
            />
            <Input
                fontWeight={'200'}
                onChange={onChange}
                value={value}
                id={name}
                name={name}
                border={'none'}
                w={'100%'}
                padding={0}
                height={'fit-content'}
                focusBorderColor={'transparent'}
                autoComplete={'off'}
            />    
        </HStack>  
        {
            forgotPassword 
            ?
                <Text
                    fontSize={'x-small'}
                    w={'100%'}
                    fontWeight={'300'}
                    color={'#939393'}
                    marginTop={7}
                    cursor={'pointer'}
                >
                    Forgot Password?
                </Text>
            :
                ''
        }
    </VStack>
  )
}

export default InputField