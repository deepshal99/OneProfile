import React ,{useRef, useState} from 'react'
// import ReactDOM from 'react-dom';
import {Link,} from 'react-router-dom'

import {VStack, Input } from '@chakra-ui/react';
import {Button} from "@chakra-ui/react"
import {useAuth} from "../Handler/RegistrationHandler"


//Sign up Component


function Signup() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup } = useAuth();

    async function register(e) {
        e.preventDefault()
        console.log("Email: "+emailRef.current.value);
        console.log("Password: "+passwordRef.current.value);
        
        await signup(emailRef.current.value, passwordRef.current.value);
        console.log("Email After Submit : "+emailRef.current.value);
        console.log("Password After Submit : "+passwordRef.current.value);
    }
    return(
                <VStack p='4'>
                    <form onSubmit={register}> 
                        <Input placeholder="Name" id="name" ref={nameRef}/>
                        <Input placeholder="Email" id="email" ref={emailRef}/>
                        <Input placeholder="Password" type="password" id="password" ref={passwordRef}/>
                        <Button colorScheme="blue" type="submit">Sign Up</Button>
                    </form> 
                <Link to="/login">Already have an account?</Link >
                </VStack>
            
            ) ;  
}

export default Signup;