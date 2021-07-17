import React, { useRef, useState } from 'react'
// import ReactDOM from 'react-dom';
import { Link, useHistory } from 'react-router-dom'
import { Flex, Box, Heading, FormLabel, VStack, Input, Button, Spinner, Center } from '@chakra-ui/react'
import { signup } from "../Handler/RegistrationHandler"
import { saveUser } from "../Handler/firestoreHandler"


//Sign up Component

function Signup() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const h = useHistory();
    const [loading, setLoading] = useState(false)

    async function register(e) {
        e.preventDefault()
        try {
            setLoading(true)
            console.log("Email: " + emailRef.current.value);
            console.log("Password: " + passwordRef.current.value);
            await signup(emailRef.current.value, passwordRef.current.value)
                .then(
                    saveUser(emailRef.current.value,
                        nameRef.current.value,
                        passwordRef.current.value)
                ).then(() => { h.push("/profile") })

        } catch (error) {
            alert(error);
        }

        setLoading(false);
    }

    return (
        <div>
            <VStack>
                <Flex width="Full" align="center" justifyContent="center">
                    <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
                        <Box textAlign="center">
                            <Heading> Signup </Heading>
                        </Box>
                        <Box my={4} textAlign="left">
                            <form onSubmit={register}>
                                <FormLabel>Name</FormLabel>
                                <Input placeholder="Joe Smith" id="name" ref={nameRef} mb={2} required />
                                <FormLabel>Email</FormLabel>
                                <Input placeholder="joesmith@email.com" id="email" ref={emailRef} mb={2} required />
                                <FormLabel>Password</FormLabel>
                                <Input placeholder="********" type="password" id="password" ref={passwordRef} mb={2} required />
                                <Button disabled={loading} colorScheme="blue" width="full" mt={4} type="submit">
                                    <Spinner size="sm" mr={3} style={{ display: (loading ? 'block' : 'none') }} />
                                    Sign Up
                                </Button>
                            </form>
                            <br />
                            <Center><Link to="/login">Already have an account?</Link ></Center>
                        </Box>
                    </Box>
                </Flex>
            </VStack>
        </div>

    );
}

export default Signup;