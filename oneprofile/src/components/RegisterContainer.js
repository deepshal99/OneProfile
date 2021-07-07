import React,{useState} from 'react'
import {VStack, Input} from '@chakra-ui/react';
import {Button} from "@chakra-ui/react"
import Signup from './Signup'
import Login from './Login'

//Container To Display Register up Signup
class RegisterContainer extends React.Component {
    //[loginState,setState]=useState(False)
    changeState(){
        console.log("Change State")
    }
    render() {
        return (
            <div>
                <Signup changeStateFunction={this.changeState}></Signup>
                <Login></Login>
            </div>
        )
    }
}
export default RegisterContainer
