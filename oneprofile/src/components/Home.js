import React from 'react'
import {Link,} from 'react-router-dom'
import {Button} from '@chakra-ui/react'


export default function Home() {
    return (
        <div class="Home-buttons">
            <Link to="/login"><Button mb='4' size='lg' colorScheme="blue">Login</Button></Link >
            <br />
            <Link to="/signup"><Button mb='4' colorScheme="green">Signup</Button></Link >
        </div>
    )
}
