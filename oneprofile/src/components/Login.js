import React, { useRef } from 'react'
import {VStack, Input} from '@chakra-ui/react';
import { Button,  } from "@chakra-ui/react"
import { Link, useHistory } from 'react-router-dom';
import {getUserByEmail} from "../Handler/firestoreHandler"
import {login} from "../Handler/RegistrationHandler"

//Login Compenent Component
function Login() {
    
        const emailRef = useRef();
        const passwordRef = useRef();
        const h = useHistory();
    
        async function onClickHandler(e){
            e.preventDefault()
            login(emailRef.current.value,passwordRef.current.value).then(()=>{h.push("/profile")})
        }
        return(
        <div> 
            <form onSubmit={onClickHandler}>
            <VStack>
                <Input placeholder="Email" id="email" ref={emailRef} />
                <Input placeholder="Password" type="password" id="password" ref={passwordRef} />
                <Button colorScheme="blue" type="submit">Log in</Button>
                <Link to="/signup">Create a new account</Link >
            </VStack>
            </form>
        </div>
        )
    
 }
export default Login