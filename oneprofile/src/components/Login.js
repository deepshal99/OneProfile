import React from 'react'
import {VStack, Input} from '@chakra-ui/react';
import { Button,  } from "@chakra-ui/react"
// import { Link } from 'react-router-dom';
//Login Compenent Component
function Login() {
    return (
        <VStack>
            
            <Input placeholder="Email" id="email"/>
            <Input placeholder="Password" type="password" id="password"/>
            <Button colorScheme="blue">Sign Up</Button>
        </VStack>
    )
}

export default Login