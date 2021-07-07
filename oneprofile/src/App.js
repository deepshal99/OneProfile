import './App.css';
import {Heading, VStack} from '@chakra-ui/react';
import Signup from './components/Signup'
// import { Link } from 'react-router-dom';

function App() {
    return (
        <VStack p='4'>
            <Heading>OneProfile</Heading>
            <Signup></Signup>
        </VStack>

    );
}

export default App;
