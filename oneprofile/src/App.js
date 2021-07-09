import './App.css';
import { VStack } from '@chakra-ui/react';
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header';
import { Link, } from 'react-router-dom'
import Profile from './components/Profile'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>

                <VStack p='0'>
                    <Header />
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/home'>
                            <Home />
                        </Route>
                        <Route exact path='/profile'>
                            <Profile />
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
