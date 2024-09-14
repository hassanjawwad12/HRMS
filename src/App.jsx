import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { VStack } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login';
import Members from './pages/Members';
import { Route, Routes, useLocation } from 'react-router-dom';
import Projects from './pages/Projects';
import Page from './components/Page';
import { MemberView } from './pages/MemberView';
import { ProjectView } from './pages/ProjectView';

function App() {

  const { pathname } = useLocation();

  return (
    <VStack
      w={'100%'}
    >
      <VStack
        position={'absolute'}
      >
        <ToastContainer />
      </VStack>
      <Routes>
        <Route path = "/" element={<Login />} /> {/* Change to Landing Page when done */}
        <Route path = "/login" element={<Login />}/>
      </Routes>
      {
        pathname.includes("/pms") 
        ?
        <Page>
          <Routes>
            <Route path = "/pms/members" element={<Members />} />
            <Route path = "/pms/projects" element={<Projects />} />
            <Route path = '/pms/members/:memberid' element={<MemberView />} />
            <Route path = '/pms/projects/:projectid' element={<ProjectView />} />
          </Routes>
        </Page> 
        :
        <>
        </>
      }
    </VStack>
  )
}

export default App
