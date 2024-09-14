import { HStack, Input, InputGroup, Spinner, Text } from '@chakra-ui/react'
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import ModalInputField from './ModalInputField'
import BlueButton from './BlueButton';  
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../slices/projectsSlice';
import useDigitInput from 'react-digit-input';

const ProjectModal = ({ setShowModal }) => {

  const [loading, setLoading] = useState(false);
  const [Milestone, onChange] = useState('---');
  const dispatch = useDispatch();
   
  const formik = useFormik({

    initialValues:
    {
        'Project Name': '',
        Description: '',
        'Team Lead': '',
        Status: '',
        Price: '',
        Date: '',
    },

    
    onSubmit: async (project, { resetForm }) =>
    {
        let isMissing = false;
        let missingName = '';
        
        for (let key of Object.keys(project))
        {
            if (!project[key].length)
            {   
                isMissing = true;
                missingName = key;
                break;
            }
        }

        if (!Milestone || Milestone === 0 || Milestone === '---')
        {
            missingName = 'Milestone';
            isMissing = true;
        }

        if (isMissing)
        {
            toast.error(missingName + ' is Required');
            return;
        }
        
        setLoading(true);
        
        console.log(project);
        
        /***
         * See /slices/membersSlice.js
        */
       dispatch(addProject({name: project['Project Name'], lead: project['Team Lead'], startedAt: project['Date']}));
       /*** 
        * See /slices/projectsSlice.js
       */
      
      //submit request
      
      
      setLoading(false);
      setShowModal(false);
      resetForm();
    }
  });
  
  const {handleSubmit, handleChange, values} = formik;

  const digits = useDigitInput({
      acceptedCharacters: /^[0-9]$/,
      length: 3,
      value: Milestone,
      onChange,
  });
  
  return (
    <>
        <Text
            w={'100%'}
            paddingBottom={3}
        >
            Add New Project
        </Text>
        <ModalInputField 
            onChange={handleChange} 
            value={values['Project Name']}
            placeholder={'Enter Name'}
            label={'Project Name'}
        />
        <ModalInputField 
            onChange={handleChange} 
            value={values['Description']}
            placeholder={'Description'}
            type={'textarea'}
            label={'Description'}
        />
        <ModalInputField 
            onChange={handleChange} 
            value={values['Team Lead']}
            placeholder={'Enter Name'}
            label={'Team Lead'}
        />
        <ModalInputField 
            onChange={handleChange} 
            value={values['Status']}
            placeholder={'Status'}
            label={'Status'}
        />
        <ModalInputField 
            onChange={handleChange} 
            value={values['Price']}
            placeholder={'Amount'}
            label={'Price'}
        />
        <ModalInputField 
            onChange={handleChange} 
            value={values['Date']}
            placeholder={'mm/dd/yyyy'}
            label={'Date'}
            type={'date'}
        />
        <HStack
          w={'100%'}
          justifyContent={'space-between'}
        >
            <Text 
              fontSize={'medium'}
            >
                Milestone
            </Text>
            <InputGroup
              w={'fit-content'}
            >
              <Input
                inputMode={'decimal'}
                rounded={'none'}
                roundedLeft={'md'}
                background={'brand.main'}
                focusBorderColor={'transparent'}
                w={12}
                textAlign={'right'}
                border={'none'}
                {...digits[0]}
              />
              <Input
                inputMode={'decimal'}
                background={'brand.main'}
                rounded={'none'}
                w={12}
                focusBorderColor={'transparent'}
                textAlign={'center'}
                border={'none'}
                {...digits[1]}
              />
              <Input
                w={12}
                inputMode={'decimal'}
                background={'brand.main'}
                roundedRight={'md'}
                rounded={'none'}
                focusBorderColor={'transparent'}
                textAlign={'left'}
                border={'none'}
                {...digits[2]}
              />
            </InputGroup>
        </HStack>
        <BlueButton 
            btnText={!loading ? 'Add Project' : <Spinner size={'sm'} color={'white'}/>}
            onClick={handleSubmit}
            marginTop={4}
        />
    </>
  )
}

export default ProjectModal