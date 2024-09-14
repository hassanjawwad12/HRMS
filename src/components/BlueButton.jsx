import { Button } from '@chakra-ui/react'
import React from 'react'

const BlueButton = ({ onClick, btnText, ...props }) => {
  return (
    <Button
        background={'linear-gradient(139deg, #7DC2EF 6.59%, #928EF4 76.7%);'}
        transition={'background 200ms ease'}
        _hover={{
            background: 'linear-gradient(139deg, #928EF4 6.59%, #7DC2EF 76.7%);'
        }}
        rounded={'xl'}
        shadow={'md'}
        color={'white'}
        fontFamily={'Lexend'}
        fontWeight={300}
        paddingX={6}
        paddingY={4}
        onClick={onClick ? onClick : () => {}}
        {...props}
    >
        {btnText}
    </Button>
  )
}

export default BlueButton