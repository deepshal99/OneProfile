import React from 'react'
// /import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import {VStack, Input} from '@chakra-ui/react';
import { Button,  } from "@chakra-ui/react"



//Sign up Component
function Signup() {
    return (
        <VStack p='4'>
            <Input placeholder="Name" id="name"/>
            <Input placeholder="Email" id="email"/>
            <Input placeholder="Password" type="password" id="email"/>
            <Button colorScheme="blue">Sign Up</Button>
         {/* <Link to="/Login" colorScheme="gray" >Already have an account?</Link>  */}
        </VStack>
    )
}

export default Signup
