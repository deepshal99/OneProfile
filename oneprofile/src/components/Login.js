import React, { useRef, useState, useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { Input, Spinner, Button, Flex, Box, Heading, Center, FormLabel, Spacer } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import { login, AuthContext } from "../Handler/RegistrationHandler"
import firebase from "firebase"
import { saveUser } from "../Handler/firestoreHandler"
// import { signInWithGoogle } from "../Handler/firebase"


//Login Compenent Component
function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const h = useHistory();
    const [loading, setLoading] = useState(false)
    const user = useContext(AuthContext)
    const [redirect, setredirect] = useState(null)
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider()

 


    const signInWithGoogle = (e) => {
        e.preventDefault()
        auth.signInWithPopup(googleProvider).then((res) => {
            console.log("User ID:"+res.user.uid)
            localStorage.setItem("loadedInEmail", res.user.email)
            h.push("/profile")
        }).catch((error) => {
            console.log(error.message)
        })
    }

    useEffect(() => {
        if (user) {
            setredirect('/profile')
        }
    }, [user])
    if (redirect) {
        <Redirect to={redirect} />
    }

    async function onClickHandler(e) {
        setLoading(true)
        e.preventDefault()
        login(emailRef.current.value, passwordRef.current.value).then(() => {
            setLoading(false)
            localStorage.setItem("loadedInEmail", emailRef.current.value)
            h.push("/profile")
        })
    }
    return (
        
        <div>
            <Flex width="Full" align="center" justifyContent="center">
                <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
                    <Box textAlign="center">
                        <Heading> Login </Heading>
                    </Box>
                    <Box my={4} textAlign="left">
                        <form onSubmit={onClickHandler}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder="enter email" id="email" ref={emailRef} mb={2} required/>
                            <FormLabel>Password</FormLabel>
                            <Input placeholder="enter password" type="password" id="password" ref={passwordRef} mb={2} required/>
                            <Button disabled={loading} colorScheme="blue" width="full" mt={4} type="submit">
                                <Spinner size="sm" mr={3} style={{ display: (loading ? 'block' : 'none') }} />
                                Log in
                            </Button>
                            <Spacer height="16px" />
                            <div margin-top="10px" align="center" className="login-buttons">
                                <button className="login-provider-button" onClick={signInWithGoogle}>
                                    <Flex align="center" justifyContent="center">
                                        <img src="https://www.designbust.com/download/28/png/google_logo_icon512.png" width="30px" alt="google icon" />
                                        <Spacer width="10px" />
                                        <span p={2} >Continue with Google</span>
                                    </Flex>
                                </button>
                            </div>
                            <br />
                            <br />
                            <Center>
                                <Link to="/signup">
                                    Create a new account
                                </Link >
                            </Center>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </div>
    )

}
export default Login