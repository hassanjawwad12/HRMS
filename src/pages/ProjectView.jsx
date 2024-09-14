import { Divider, Grid, HStack, Image, Select, Text, VStack } from '@chakra-ui/react'
import name from '../assets/project/name.svg'
import created from '../assets/project/created.svg'
import deadline from '../assets/project/deadline.svg'
import members from '../assets/project/members.svg'
import lead from '../assets/project/lead.svg'
import frontend from '../assets/project/frontend.svg'
import backend from '../assets/project/backend.svg'
import integration from '../assets/project/integration.svg'
import DetailWidget from '../components/DetailWidget'
import DetailCard from '../components/DetailCard'
import BlueButton from '../components/BlueButton'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ProjectView = () => {

  const { projectid } = useParams(); //getting project id 
  const projects = useSelector(state => state.members.members); //getting id in the parameters
  //const project = projects.find(project => project.id === projectid);

  return (
    <>
        <VStack
            fontFamily={'Lexend'}
            fontWeight={300}
            color={'white'}
            w={'100%'}
            overflowY={'auto'}
            overflowX={'hidden'}
            paddingBottom={10}
        >
            <DetailCard
                title={'General Details'}
                onDelete={() => {}}
            >
                <HStack 
                    justifyContent={'space-between'}
                    flexDir={['column', 'column', 'row']}
                    w={'100%'}
                    fontSize={'sm'}
                    >
                    <VStack
                        spacing={8}
                        w={'100%'}
                        h={'100%'}
                        alignItems={'flex-start'}
                        paddingLeft={10}
                    >
                        <DetailWidget src={name} title={'Project Name'} value={'PMS'} />
                        <DetailWidget src={created} title={'Created At'} value={'PMS'} />
                        <DetailWidget src={deadline} title={'Deadline'} value={'PMS'} />
                    </VStack>
                    <VStack
                        spacing={8}
                        w={'100%'}
                        h={'100%'}
                        alignItems={'flex-start'}
                        borderLeft={['none', 'none', '1.5px solid #A0AEC0']}
                        paddingLeft={10}
                        paddingTop={[5, 5, 0]}
                        justifyContent={'flex-start'}
                    >
                        <DetailWidget src={members} title={'Members Assigned'} value={'PMS'} />
                        <DetailWidget src={lead} title={'Team Lead'} value={'PMS'} />
                    </VStack>
                </HStack>
            </DetailCard>
            <HStack
                w={'90%'}
                flexDir={['column', 'column', 'column', 'row']}
            >
                <DetailCard
                    h={'100%'}
                    title={'Project Details'}
                    w={['100%', '100%', '100%', '60%']}
                >
                    <HStack
                        w={'100%'}
                        paddingX={10}
                        justifyContent={'space-between'}
                    >
                        <DetailWidget 
                            src={frontend} 
                            title={'Frontend'}  
                            deadline={new Date()}
                        />
                        <Select 
                            fontSize={'x-small'}
                            fontWeight={200}
                            w={'40%'}
                            color={'white'}
                            border={'1px solid #A0AEC0'}
                            focusBorderColor={'#A0AEC0'}
                        >
                            <option>In Progress</option>
                        </Select>
                    </HStack>
                    <Divider w={'90%'}/>
                    <HStack
                        w={'100%'}
                        paddingX={10}
                        justifyContent={'space-between'}
                    >
                        <DetailWidget 
                            src={backend} 
                            title={'Backend'}  
                            deadline={new Date()}
                        />
                        <Select 
                            fontSize={'x-small'}
                            fontWeight={200}
                            w={'40%'}
                            color={'white'}
                            border={'1px solid #A0AEC0'}
                            focusBorderColor={'#A0AEC0'}
                        >
                            <option>In Progress</option>
                        </Select>
                    </HStack>
                    <Divider w={'90%'}/>
                    <HStack
                        w={'100%'}
                        paddingX={10}
                        justifyContent={'space-between'}
                    >
                        <DetailWidget 
                            src={integration} 
                            title={'Integration'}  
                            deadline={new Date()}
                        />
                        <Select 
                            fontSize={'x-small'}
                            fontWeight={200}
                            w={'40%'}
                            color={'white'}
                            border={'1px solid #A0AEC0'}
                            focusBorderColor={'#A0AEC0'}
                        >
                            <option>In Progress</option>
                        </Select>
                    </HStack>
                </DetailCard>
                <DetailCard
                    title={'Members Details'}
                    w={['100%', '100%', '100%', '40%']}
                    h={'100%'}
                >
                    <HStack
                        w={'100%'}
                        paddingX={10}
                        justifyContent={'space-between'}
                    >
                        <DetailWidget 
                            src={frontend} 
                            title={'Frontend'}  
                            role={'Frontend Development'}
                        />
                        <Text 
                            fontSize={'x-small'}
                            textDecor={'underline'}
                            color={'#A0AEC0'}
                            cursor={'pointer'}
                        >
                            Show Info
                        </Text>
                    </HStack>
                    <Divider w={'90%'}/>
                    <HStack
                        w={'100%'}
                        paddingX={10}
                        justifyContent={'space-between'}
                    >
                        <DetailWidget 
                            src={backend} 
                            title={'Backend'}  
                            role={'Backend Development'}
                        />
                        <Text 
                            fontSize={'x-small'}
                            textDecor={'underline'}
                            color={'#A0AEC0'}
                            cursor={'pointer'}
                        >
                            Show Info
                        </Text>
                    </HStack>
                    <BlueButton btnText={'+ Add Member'}/>
                </DetailCard>
            </HStack>
        </VStack>
    </>
  )
}
