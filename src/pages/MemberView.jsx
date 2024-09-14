import { Divider, Grid, HStack, Image, Select, Text, VStack } from '@chakra-ui/react'
import pname from '../assets/project/name.svg'
import name from '../assets/member/name.svg'
import personal from '../assets/member/personal.svg'
import company from '../assets/member/company.svg'
import github from '../assets/member/github.svg'
import joining from '../assets/member/joining.svg'
import role from '../assets/member/role.svg'
import position from '../assets/member/position.svg'
import projectImg from '../assets/member/projects.svg'
import cloudflare from '../assets/member/cloudflare.svg'
import DetailWidget from '../components/DetailWidget'
import DetailCard from '../components/DetailCard'
import flag from '../assets/member/flag.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Fragment, useEffect, useState } from 'react'
import { getSingleMember } from '../integeration/Members'
import { format } from 'date-fns'

export const MemberView = () => {

    const projects = [
        {
            id: 1,
            title: 'PMS',
            lead: 'John Doe',
            deadline: new Date(),
            milestone: 2
        },
        {
            id: 2,
            title: 'PMS',
            lead: 'John Doe',
            deadline: new Date(),
            milestone: 2
        },
        {
            id: 3,
            title: 'PMS',
            lead: 'John Doe',
            deadline: new Date(),
            milestone: 2
        }
    ]
    const { memberid } = useParams();
    const [member, setMember] = useState(useSelector(state => state.members.members.find(member => member.id === memberid)));

    useEffect(() => {
        async function getData() {
            console.log(memberid);
            if (!member) {
                setMember(await getSingleMember(memberid));
            }
        }
        getData();
    }, []);

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
                    onDelete={() => { }}
                >
                    <HStack
                        justifyContent={'space-between'}
                        flexDir={['column', 'column', , 'column', 'row']}
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
                            <DetailWidget src={name} title={'Name'} value={member?.name} />
                            <DetailWidget src={personal} title={'Personal Email'} value={member?.personal_email} />
                            <DetailWidget src={company} title={'Company Email'} value={member?.email} />
                        </VStack>
                        <VStack
                            spacing={8}
                            w={'100%'}
                            h={'100%'}
                            alignItems={'flex-start'}
                            borderLeft={['none', 'none', 'none', '1.5px solid #A0AEC0']}
                            paddingLeft={10}
                            paddingTop={[5, 5, 5, 0]}
                            justifyContent={'flex-start'}
                        >
                            <DetailWidget src={github} title={'Github Username'} value={member?.github_username} />
                            <DetailWidget src={joining} title={'Joining Date'} value={'2023-12-10T09:22:30+00:00'} />
                            <DetailWidget src={role} title={'Role'} value={member?.role} />
                        </VStack>
                        <VStack
                            spacing={8}
                            w={'100%'}
                            h={'100%'}
                            alignItems={'flex-start'}
                            borderLeft={['none', 'none', 'none', '1.5px solid #A0AEC0']}
                            paddingLeft={10}
                            paddingTop={[5, 5, 5, 0]}
                            justifyContent={'flex-start'}
                        >
                            <DetailWidget src={position} title={'Position'} value={'Full Stack Developer'} />
                            <DetailWidget src={projectImg} title={'Assigned Projects'} value={2} />
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
                        w={['100%', '100%', '100%', '55%']}
                    >
                        <VStack
                            w={'100%'}
                            spacing={8}
                            h={80}
                            overflowY={'auto'}
                            overflowX={'hidden'}
                        >
                            {
                                projects.map((project, index) => (
                                    <Fragment key={project.id}>
                                        <HStack
                                            w={'100%'}
                                            paddingX={10}
                                            justifyContent={'space-between'}
                                            >
                                            <DetailWidget
                                                src={pname}
                                                title={project?.title}
                                                deadline={project?.deadline ? format(project?.deadline, 'MM/dd/yyyy') : ''}
                                                w={'33%'}
                                            />
                                            <Text
                                                fontSize={'small'}
                                                color={'#A0AEC0'}
                                                textAlign={'center'}
                                                w={'33%'}
                                            >
                                                Team Lead: {project?.lead}
                                            </Text>
                                            <HStack
                                                alignItems={'center'}
                                                justifyContent={'flex-end'}
                                                w={'33%'}
                                            >
                                                <Image
                                                    src={flag}
                                                    w={2.5}
                                                    />
                                                <Text
                                                    fontSize={'x-small'}
                                                    color={'white'}
                                                    >
                                                    Milestone: {project?.milestone}
                                                </Text>
                                            </HStack>
                                        </HStack>
                                        {
                                            index !== projects?.length - 1 
                                            ?
                                                <Divider w={'90%'} />
                                            :
                                                <></>
                                        }
                                    </Fragment>
                                ))
                            }
                        </VStack>
                        </DetailCard>
                        <DetailCard
                        title={'Services Details'}
                    w={['100%', '100%', '100%', '45%']}
                    h={'100%'}
                    >
                        <HStack
                            w={'100%'}
                            paddingX={10}
                            justifyContent={'space-between'}
                            flexDir={['column', 'column', 'row']}
                        >
                            <DetailWidget
                                src={github}
                                title={'Github'}
                                status={'Success'}
                                w={['100%', '100%', '33%']}
                            />
                            <VStack
                                borderLeft={'1px solid #A0AEC0'}
                                paddingX={2}
                                w={['100%', '100%', '33%']}
                                h={'100%'}
                            >
                                <Text
                                    fontSize={'small'}
                                    w={'100%'}
                                >
                                    Type
                                </Text>
                                <Text
                                    fontSize={'x-small'}
                                    color={'#A0AEC0'}
                                    w={'100%'}
                                >
                                    Add
                                </Text>
                            </VStack>
                            <VStack
                                borderLeft={'1px solid #A0AEC0'}
                                paddingX={2}
                                w={['100%', '100%', '33%']}
                                h={'100%'}
                            >
                                <Text
                                    fontSize={'small'}
                                    w={'100%'}
                                >
                                    Rule Message
                                </Text>
                                <Text
                                    w={'100%'}
                                    fontSize={'x-small'}
                                    color={'#A0AEC0'}
                                >
                                    Added to Organization
                                </Text>
                            </VStack>
                        </HStack>
                        <Divider w={'90%'} />
                        <HStack
                            w={'100%'}
                            paddingX={10}
                            justifyContent={'space-between'}
                            flexDir={['column', 'column', 'row']}
                        >
                            <DetailWidget
                                src={cloudflare}
                                title={'Cloudflare'}
                                status={'Success'}
                                w={['100%', '100%', '33%']}
                            />
                            <VStack
                                borderLeft={'1px solid #A0AEC0'}
                                paddingX={2}
                                w={['100%', '100%', '33%']}
                                h={'100%'}
                            >
                                <Text
                                    fontSize={'small'}
                                    w={'100%'}
                                >
                                    Type
                                </Text>
                                <Text
                                    fontSize={'x-small'}
                                    color={'#A0AEC0'}
                                    w={'100%'}
                                >
                                    Add
                                </Text>
                            </VStack>
                            <VStack
                                borderLeft={'1px solid #A0AEC0'}
                                paddingX={2}
                                w={['100%', '100%', '33%']}
                                h={'100%'}
                            >
                                <Text
                                    fontSize={'small'}
                                    w={'100%'}
                                >
                                    Rule Message
                                </Text>
                                <Text
                                    w={'100%'}
                                    fontSize={'x-small'}
                                    color={'#A0AEC0'}
                                >
                                    Added to Organization
                                </Text>
                            </VStack>
                        </HStack>
                    </DetailCard>
                </HStack>
            </VStack>
        </>
    )
}
