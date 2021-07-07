import React from 'react'
import {Link,} from 'react-router-dom'
import {Button} from '@chakra-ui/react'


export default function Home() {
    return (
        <div>
            <Link to="/login"><Button size='lg' colorScheme="blue">Login</Button></Link >
            <br />
            <Link to="/signup"><Button colorScheme="green">Signup</Button></Link >
        </div>
    )
}
