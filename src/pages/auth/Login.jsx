import { VStack, Image, Text, Button, Spinner } from '@chakra-ui/react'
import { useFormik } from 'formik'
import texagon from '../assets/texagon.svg'
import React, { useState } from 'react'
import InputField from '../components/InputField'
import rightarrow from '../assets/icons/rightarrow.svg'
import userIcon from '../assets/icons/user.svg'
import passwordIcon from '../assets/icons/password.svg'
import { toast } from 'react-toastify'

const Login = () => {

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues:
        {
            Username: '',
            Password: ''
        },

        onSubmit: async (user, { resetForm }) =>
        {
            if (user.Username.length && user.Password.length)
            {
                setLoading(true);
                
                console.log(user);

                //submit request
        
                setLoading(false);
                resetForm();
            }

            else if (user.Username.length)
            {
                toast.error('Password is required');
            }

            else
            {
                toast.error('Username is required');
            }
        }
    });

  const { handleChange, handleSubmit, values, errors, touched } = formik;

  return (
    <VStack
        w={'100%'}
        h={'100vh'}
        backgroundColor={'#181D23'}
        paddingY={20}
        justifyContent={'center'}
        spacing={20}
    >
        <Image 
            src={texagon}
            w={['30%', '35%', '20%','10%']}
            />
        <VStack
            w={['95%', '90%', '50%', '30%', '25%']}
            background={'linear-gradient(149deg, #445A6B 0%, #414762 100%)'}
            color={'white'}
            paddingX={10}
            paddingY={14}
            rounded={'sm'}
            fontFamily={'Lexend'}
            spacing={10}
            shadow={'xl'}
        >
            <Text
                fontSize={'2xl'}
                fontWeight={600}
            >
                Login
            </Text>
            <InputField name={'Username'} icon={userIcon} value={values.Username} onChange={handleChange} touched={touched}/>
            <InputField name={'Password'} forgotPassword={true} icon={passwordIcon} value={values.Password} onChange={handleChange} errors={errors}/>
            <Button
                marginTop={4}
                display={'flex'}
                w={'100%'}
                background={'linear-gradient(91deg, #334454 0%, #363C56 100%)'}
                _hover={{
                    background: '#334454',
                    transition: 'background 200ms linear'
                }}
                fontWeight={'400'}
                fontSize={'small'}
                color={'white'}
                justifyItems={'center'}
                onClick={handleSubmit}
                disabled={loading || values.Username.length === 0 || values.Password.length === 0}
                _disabled={{
                    background: '#666666',
                    cursor: 'auto',
                    _hover: {
                        background: '#666666'
                    }
                }}
            >
                <Text
                    textAlign={'center'}
                    w={'100%'}
                >
                    {
                        loading 
                        ?
                            <Spinner 
                                size={'sm'}
                            />
                        :
                            'Login'
                    }
                </Text>
                <Image
                    justifySelf={'end'}
                    ml={'auto'}
                    src={rightarrow}
                />
            </Button>
        </VStack>
    </VStack>
  )
}

export default Login