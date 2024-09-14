import { Image, VStack } from '@chakra-ui/react'
import close from '../assets/icons/close.svg'
import { useEffect, useRef } from 'react';

const ModalContainer = ({ setShowModal, children }) => {
  
  const modalContainerRef = useRef(null);

  const slideOut = () =>
  {
    modalContainerRef.current.style.animation = "slideModalOut 200ms linear";
  }

  useEffect(() => 
  {
    modalContainerRef.current.style.animation = "slideModalIn 200ms linear";
  }, [])

  return (
    <VStack 
        position={'absolute'}
        transition={'transform 100ms linear'}
        zIndex={200}
        ref={modalContainerRef}
    >
        <VStack
            w={'120vw'}
            h={'100vh'}
            position={'absolute'}
            alignItems={'center'}
            justifyContent={'center'}
            background={'#2F363F'}
            opacity={0.85}
            zIndex={80}
            color={'white'}
        />
        <VStack
            w={'100vw'}
            h={'100vh'}
            position={'absolute'}
            alignItems={'center'}
            justifyContent={'center'}
            background={'transparent'}
            zIndex={80}
            color={'white'}
        >
            <VStack
                position={'absolute'}
                zIndex={90}
                background={'#1D2227'}
                w={['90%', '80%', '70%', '40%', '30%']}
                paddingY={7}
                paddingX={10}
                rounded={'xl'}
                color={'white'}
                fontFamily={'Lexend'}  
                fontSize={'2xl'}
                spacing={2}
            >
                <Image
                    src={close}
                    onClick={() => {slideOut(); setTimeout(() => setShowModal(false), 150);}}
                    marginLeft={'auto'}
                    marginY={0}
                    cursor={'pointer'}
                    w={5}
                    position={'absolute'}
                    right={10}
                />
                {children}
            </VStack>
        </VStack>
    </VStack>
  )
}

export default ModalContainer