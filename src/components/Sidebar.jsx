import { Image, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import dashboard from '../assets/icons/dashboard.svg'
import projects from '../assets/icons/projects.svg'
import notifications from '../assets/icons/notification.svg'
import members from '../assets/icons/members.svg'
import teams from '../assets/icons/teams.svg'
import assist from '../assets/icons/assist.svg'
import SidebarLink from './SidebarLink';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../slices/currentPageSlice';
import { useLocation } from 'react-router-dom';

const Sidebar = ({ width, toggleWidth }) => {
  
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { route } = useSelector(state => state.currentPage);
  
  const sidebarLinks = [
    {
      title: 'Dashboard',
      description: '',
      name: 'Dashboard',
      src: dashboard,
      route: '/pms/dashboard'
    },
    {
      title: 'Projects Overview',
      description: 'Comprehensive details and insights to keep your project on track',
      name: 'Projects',
      src: projects,
      route: '/pms/projects'
    },
    {
      title: 'Members Details',
      description: 'Swiftly access member details for enhanced collaboration',
      name: 'Members',
      src: members,
      route: '/pms/members'
    },
    {
      title: 'Teams Details',
      description: 'Insights for effective team management',
      name: 'Teams',
      src: teams,
      route: '/pms/teams'
    },
    {
      title: 'AI Assist',
      description: 'Inquire with the assistant about the ongoing project',
      name: 'AI Assist',
      src: assist,
      route: '/pms/assist'
    },
    {
      title: 'Notifications',
      description: '',
      name: 'Notifications',
      src: notifications,
      route: '/pms/notifications'
    },
  ];
  
  const [currIndex, setCurrIndex] = useState(-1);
  
  useEffect(() =>
  {
    if (!route.includes(pathname) && !pathname.includes(route))
    {
      const moveToPage = sidebarLinks.find(sl => sl.route.includes(pathname) || pathname.includes(sl.route));
      setCurrIndex(sidebarLinks.indexOf(moveToPage));
      dispatch(changePage(moveToPage));
    }
  }, []);

  return (
    <VStack
      h={'100vh'}
      zIndex={60}
      background={'linear-gradient(180deg, #445A6B 0%, #414662 100%)'}
      spacing={0}
      position={['absolute', 'absolute', 'absolute', 'sticky']}
      w={[`${width}%`, `${width - 5}%`, `${width - 10}%`, `8%`, `6%`]}
      transition={'width 200ms linear'}
      left={0}
      overflow={'hidden'}
      fontFamily={'Lexend'}
    >
      <VStack
        paddingTop={8}
        paddingBottom={14}
        w={'100%'}
        cursor={'pointer'}
      >
        <Image
          src={logo}
          w={'45%'}
        />
      </VStack>
      {
        sidebarLinks.map(({title, description, route, name, src}, index) => (
          <SidebarLink
            key={route}
            name={name}
            src={src}
            route={route}
            onClick={()=>{setCurrIndex(index); dispatch(changePage({title, description, route, name, src})); toggleWidth();}}
            active={index === currIndex ? true : false}
          />
        ))
      }
    </VStack>
  )
}

export default Sidebar