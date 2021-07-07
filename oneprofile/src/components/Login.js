import React from 'react'
import {VStack, Input} from '@chakra-ui/react';
import { Button,  } from "@chakra-ui/react"
import { Link } from 'react-router-dom';

//Login Compenent Component
class Login extends React.Component{
    render(){
        return(
        <div> 
            <VStack>
                <Input placeholder="Email" id="email"/>
                <Input placeholder="Password" type="password" id="password"/>
                <Button colorScheme="blue">Log in</Button>
                <Link to="/signup">Create a new account</Link >
            </VStack>
        </div>
        )
    }
 }
export default Login