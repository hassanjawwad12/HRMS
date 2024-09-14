import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ModalContainer from '../components/ModalContainer';
import { Divider, HStack, Spinner, VStack } from '@chakra-ui/react';
import BlueButton from '../components/BlueButton';
import { format } from 'date-fns';
import ProjectModal from '../components/ProjectModal';
import Table from '../components/Table';
import TableRow from '../components/TableRow';
import { useNavigate } from 'react-router-dom';
import { getProjects } from '../integeration/Projects';
import { setProjects } from '../slices/projectsSlice';

const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const projects = useSelector(state => state.projects.projects);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const getProjectsList = async () => {
            setLoading(true);

            const ProjectList = await getProjects();

            
            dispatch(setProjects(ProjectList));
            //can be moved to App.js if required once and projects length can also be checked to see if api call is required
            setLoading(false);
        }

        getProjectsList();
    }, []);


    return (
        <>
            {
                showModal
                    ?
                    <ModalContainer
                        setShowModal={setShowModal}
                    >
                        <ProjectModal setShowModal={setShowModal} />
                    </ModalContainer>
                    :
                    <></>
            }
            <>
                {
                    !loading
                        ?
                        <>
                            <HStack
                                w={['98%', '95%', '90%', '90%', '90%']}
                                justifyContent={'flex-end'}
                                paddingY={5}
                                fontFamily={'Lexend'}
                            >
                                <BlueButton
                                    btnText={'+ New Project'}
                                    onClick={() => { setShowModal(true) }}
                                />
                            </HStack>
                            <Table
                                head={['Name', 'Team Lead', 'Started At', 'Deadline', 'Members', 'Meetings', 'Details']}
                            >
                                {
                                    projects?.map((project, index) => {
                                        return <Fragment key={project.startedAt + project.deadline}>
                                            <TableRow
                                                record={[project?.name, project?.lead, project?.startedAt ? format(project?.startedAt, 'MM/dd/yy') : '', project?.deadline ? format(project?.deadline, 'MM/dd/yy') : '', project?.members, project?.meetings]}
                                                onView={() => navigate(`/pms/members/${project?.id}`)}
                                            />
                                            {
                                                index !== projects.length - 1 ?
                                                    <Divider w={['98%', '98%', '98%', '95%']}  marginY={2}/>
                                                    :
                                                    ''
                                            }
                                        </Fragment>
                                    })
                                }
                            </Table>
                        </>
                        :
                        <VStack w={'100%'} h={'100%'} justifyContent={'center'}>
                            <Spinner color={'white'} size={'xl'} position={'relative'} bottom={'10%'} />
                        </VStack>
                }
            </>
        </>
    )
}

export default Projects