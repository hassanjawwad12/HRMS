import { Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import del from '../assets/project/delete.svg'

const DetailCard = ({ title, onDelete, children, ...props }) => {
  return (
    <VStack
        w={'90%'} 
        background={'brand.main'}
        paddingTop={7}
        paddingBottom={10}
        spacing={7}
        rounded={'xl'}
        {...props}
    >
        <HStack
            w={'100%'}
            justifyContent={'space-between'}
            paddingX={10}
        >
            <Text
                fontSize={'xl'}
            >
                {title}
            </Text>
            {
                onDelete ?
                <Button
                    bg={'red.600'}
                    _hover={{
                        bg: 'red.400'
                    }}
                    color={'white'}
                    fontWeight={'300'}
                    fontSize={'sm'}
                    paddingX={8}
                    rounded={'lg'}
                    shadow={'xl'}
                    onClick={onDelete}
                >
                    <Image
                        src={del}
                    />
                    &nbsp;
                    Delete
                </Button>
                : <></>
            }
        </HStack>
        {children}
    </VStack>
  )
}

export default DetailCard