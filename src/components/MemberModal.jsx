import { Image, Spinner, Text, VStack } from '@chakra-ui/react'
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import ModalInputField from './ModalInputField'
import BlueButton from './BlueButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMember } from '../slices/membersSlice';

const MemberModal = ({ setShowModal }) => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const formik = useFormik({

        initialValues:
        {
            Name: '',
            'Personal Email': '',
            'Company Email': '',
            'GitHub Username': '',
            'Joining Date': '',
            Role: '',
            Position: ''
        },

        onSubmit: async (member, { resetForm }) => {
            let isMissing = false;
            let missingName = '';

            for (let key of Object.keys(member)) {
                if (!member[key].length) {
                    isMissing = true;
                    missingName = key;
                    break;
                }
            }

            if (isMissing) {
                toast.error(missingName + ' is Required');
                return;
            }

            setLoading(true);

            console.log(member);

            /***
             * See /slices/membersSlice.js
            */
            dispatch(addMember({ name: member['Name'], companyEmail: member['Company Email'] }));
            /*** 
             * See /slices/membersSlice.js
            */

            //submit request

            setLoading(false);
            setShowModal(false);
            resetForm();
        }
    });

    const { handleSubmit, handleChange, values } = formik;

    return (
        <>
            <Text
                w={'100%'}
                paddingBottom={3}
            >
                Add New Members
            </Text>
            <ModalInputField
                onChange={handleChange}
                value={values.Name}
                placeholder={'Enter Name'}
                label={'Name'}
            />
            <ModalInputField
                onChange={handleChange}
                value={values['Personal Email']}
                type={'email'}
                placeholder={'Enter Email'}
                label={'Personal Email'}
            />
            <ModalInputField
                onChange={handleChange}
                value={values['Company Email']}
                type={'email'}
                placeholder={'Enter Email'}
                label={'Company Email'}
            />
            <ModalInputField
                onChange={handleChange}
                value={values['GitHub Username']}
                placeholder={'Enter GitHub Username'}
                label={'GitHub Username'}
            />
            <ModalInputField
                onChange={handleChange}
                value={values['Joining Date']}
                placeholder={'mm/dd/yyyy'}
                label={'Joining Date'}
                type={'date'}
            />
            <ModalInputField
                onChange={handleChange}
                value={values.Role}
                placeholder={'Example'}
                label={'Role'}
            />
            <ModalInputField
                onChange={handleChange}
                value={values.Position}
                placeholder={'Example'}
                label={'Position'}
            />
            <BlueButton
                btnText={!loading ? 'Add Member' : <Spinner size={'sm'} color={'white'} />}
                onClick={handleSubmit}
                marginTop={4}
            />
        </>
    )
}

export default MemberModal