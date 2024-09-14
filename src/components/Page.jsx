import { HStack, VStack } from '@chakra-ui/react'
import React, { Children, useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'

const Page = ({ children } ) => {

  useEffect(() =>
  {
    document.body.style.overflow="hidden";
    return () =>
    {
      document.body.style.overflow="auto";
    }
  }, []);

  const [width, setWidth] = useState(0);
  const currentPage = useSelector(state => state.currentPage);
  console.log(currentPage);
  
  const toggleWidth = () =>
  {
    setWidth((width) => width > 0 ? 0 : 20);
  }

  return (
    <HStack 
      h={'100vh'}
      w={'100%'}
      bg={'linear-gradient(139deg, #353D48 6.59%, #181D23 76.7%);'}
      spacing={0}
    >
      <Sidebar 
        width={width}
        toggleWidth={toggleWidth}
      />
      <VStack w={'100%'} h={'100vh'}>
        <Header 
          toggleWidth={toggleWidth} 
          title={currentPage.title}
          description={currentPage.description}
        />
          {children}
      </VStack>
    </HStack>
  )
}

export default Page