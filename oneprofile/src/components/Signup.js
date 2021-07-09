import React, { useRef } from 'react'
// import ReactDOM from 'react-dom';
import { Link, useHistory } from 'react-router-dom'
import { VStack, Input, Button } from '@chakra-ui/react'
import { signup } from "../Handler/RegistrationHandler"
import { saveUser } from "../Handler/firestoreHandler"


//Sign up Component

function Signup() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const h = useHistory();

    async function register(e) {
        e.preventDefault()
        try {
            console.log("Email: " + emailRef.current.value);
            console.log("Password: " + passwordRef.current.value);
            await signup(emailRef.current.value, passwordRef.current.value)
                .then(
                    saveUser(emailRef.current.value,
                        nameRef.current.value,
                        passwordRef.current.value)
                ).then(()=>{h.push("/profile")})

        } catch (error) {
            alert(error);
        }
    }

    return (
        <VStack p='4'>
            <form onSubmit={register}>
                <Input placeholder="Name" id="name" ref={nameRef} m="5" />
                <Input placeholder="Email" id="email" ref={emailRef}/>
                <Input placeholder="Password" type="password" id="password" ref={passwordRef} m="5" />
                <Button colorScheme="blue" type="submit">Sign Up</Button>
            </form>
            <Link to="/login">Already have an account?</Link >
        </VStack>

    );
}

export default Signup;