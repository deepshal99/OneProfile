import './App.css';
import { VStack } from '@chakra-ui/react';
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import HomeHeader from './components/HomeHeader';
import Profile from './components/Profile'
import RegistrationHandler from './Handler/RegistrationHandler'
import { SignIn } from './components/SignIn';
import Hero from './pages/hero.js'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import RegistrationHandler from './Handler/RegistrationHandler';

function App() {


    return (
        <RegistrationHandler>
            <Router>
                <div>

                    <VStack p='0'>
                        <Switch>
                            <Route exact path='/'>
                                <HomeHeader />
                                <Home />
                            </Route>
                            <Route exact path='/hero'>
                                <Hero />
                            </Route>
                            <Route exact path='/home'>
                                <HomeHeader />
                                <Home />
                            </Route>
                            <Route exact path='/profile'>
                                <Profile />
                            </Route>
                            <Route exact path='/signin'>
                                <SignIn />
                            </Route>
                            <Route exact path='/login'>
                                <HomeHeader />
                                <Login />
                            </Route>
                            <Route exact path='/signup'>
                                <HomeHeader />
                                <Signup />
                            </Route>
                        </Switch>
                        {/* <RegisterContainer></RegisterContainer> */}
                    </VStack>

                </div>
            </Router>
        </RegistrationHandler>

    );
}

export default App;
