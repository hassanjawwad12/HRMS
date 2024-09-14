import { Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'

const ModalInputField = ({label, placeholder, value, onChange, type, ...props}) => {
  return (
    <VStack
        w={'100%'}
        fontSize={'medium'}
    >
        <Text
            w={'100%'}
        >
            {label}
        </Text>
        {
            type === 'textarea' 
            ?
            <Textarea
              name={label}
              background={'brand.main'}
              paddingX={4}
              outline={'none'}
              border={'none'}
              _focus={{
                outline: 'none'
              }}
              focusBorderColor={'transparent'}
              fontWeight={300}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              id={label}
              type={type}
              resize={'none'}
              {...props}
            />
            :
            <Input
                name={label}
                background={'brand.main'}
                paddingX={4}
                outline={'none'}
                border={'none'}
                _focus={{
                    outline: 'none'
                }}
                focusBorderColor={'transparent'}
                fontWeight={300}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                id={label}
                type={type}
                {...props}
            />

        }
    </VStack>
  )
}

export default ModalInputField