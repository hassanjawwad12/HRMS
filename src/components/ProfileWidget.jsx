import React, { useState } from 'react'
import profile from '../assets/profile.svg'
import account from '../assets/icons/account.svg'
import logout from '../assets/icons/logout.svg'
import { Divider, HStack, Image, Text, VStack, background } from '@chakra-ui/react'
import { useDetectClickOutside } from 'react-detect-click-outside'


const ProfileWidget = ({ picWidth, ...props }) => {

    const [dropdown, setDropDown] = useState(false);

    const closeDropdown = () => setDropDown(false);

    const ref = useDetectClickOutside({ onTriggered: closeDropdown });

    return (
        <HStack
            ref={ref}
            w={['40%', '30%', '25%', '15%']}
            spacing={5}
            justifyContent={'flex-end'}
            zIndex={50}
            {...props}
            onClick={() => setDropDown((dropdown) => !dropdown)}
            cursor={'pointer'}
        >
            <Image
                w={picWidth || '30%'}
                src={profile}
            />
            <VStack
                w={'100%'}
                fontFamily={'Lexend'}
                display={['none', 'none', 'none', 'flex']}
            >
                <Text
                    w={'100%'}
                    fontSize={'small'}
                >
                    Jay Hargudson
                </Text>
                <Text
                    w={'100%'}
                    fontSize={'x-small'}
                    color={'#667085'}
                >
                    User
                </Text>
            </VStack>

            <VStack
                position={'absolute'}
                top={[14, 14, 14, 24]}
                right={{ lg: 16 }}
                left={{ base: 2, lg: 'auto' }}
                fontSize={'small'}
                fontFamily={'Lexend'}
                fontWeight={200}
                zIndex={10}
                background={'brand.main'}
                rounded={'md'}
                transition={'padding 200ms linear, height 200ms linear'}
                height={dropdown ? 28 : 0}
                padding={dropdown ? 2 : 0}
                overflow={'hidden'}
            >
                <HStack
                    paddingY={2.5}
                    paddingX={10}
                    rounded={'md'}
                    _hover={
                        {
                            background: '#667777'
                        }
                    }
                    cursor={'pointer'}
                >
                    <Image src={account} />
                    <Text
                        color={'white'}
                    >
                        Account
                    </Text>
                </HStack>
                <Divider />
                <HStack
                    paddingX={10}
                    paddingY={2.5}
                    _hover={
                        {
                            background: '#667777'
                        }
                    }
                    cursor={'pointer'}
                    rounded={'md'}
                >
                    <Image src={logout} />
                    <Text
                        color={'red'}
                    >
                        Logout
                    </Text>
                </HStack>
            </VStack>
        </HStack>
    )
}

export default ProfileWidget