import './App.css';
import { Heading, VStack } from '@chakra-ui/react';
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import { Link, } from 'react-router-dom'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>

                <VStack p='4'>
                    <Heading>OneProfile</Heading>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/login'>
                            <Login />
                        </Route>
                        <Route exact path='/signup'>
                            <Signup />
                        </Route>
                    </Switch>
                    {/* <RegisterContainer></RegisterContainer> */}
                </VStack>

            </div>
        </Router>

    );
}

export default App;
