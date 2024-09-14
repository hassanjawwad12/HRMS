import { HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import hamburger from '../assets/icons/hamburger.svg'
import React from 'react'
import ProfileWidget from './ProfileWidget'

const Header = ({ title, toggleWidth }) => {

    return (
        <>
            <HStack
                w={'100%'}
                justifyContent={'space-between'}
                h={14}
                display={['flex', 'flex', 'flex', 'none']}
            >
                <ProfileWidget picWidth={10} justifyContent={'flex-start'} marginLeft={2} marginTop={1} />
                <Image src={hamburger} w={10} transform={'rotate(180deg)'} onClick={toggleWidth} cursor={'pointer'} />
            </HStack>
            <HStack
                alignItems={'flex-start'}
                w={'100%'}
                padding={[2, 3, 4, 7]}
                color={'white'}
                justifyContent={'space-between'}
            >
                <VStack>
                    <Heading
                        fontFamily={'Lexend'}
                        fontSize={['xl', 'xl', '2xl', '3xl']}
                        w={'100%'}
                    >
                        {title}
                    </Heading>
                    {/* <Text
                        fontFamily={'Lexend'}
                    >
                        {description}
                    </Text> */}
                </VStack>
                <ProfileWidget
                    display={['none', 'none', 'none', 'flex']}
                />
            </HStack>
        </>
    )
}

export default Header