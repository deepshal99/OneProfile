import React from 'react'
// import ReactDOM from 'react-dom';
import {Link,} from 'react-router-dom'

import {VStack, Input} from '@chakra-ui/react';
import {Button} from "@chakra-ui/react"

//Sign up Component

class Signup extends React.Component {
    render() {
        return (
            <div>
                <VStack p='4'>
                    <Input placeholder="Name" id="name"/>
                    <Input placeholder="Email" id="email"/>
                    <Input placeholder="Password" type="password" id="email"/>
                    <Button colorScheme="blue">Sign Up</Button>
                   {/* <Button onClick={this.props.changeState}>Already have an account?</Button >  */}
                   <Link to="/login">Already have an account?</Link >
                </VStack>
            </div>
        )
    }
}
export default Signup
