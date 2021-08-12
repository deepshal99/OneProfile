import './App.css';
import { VStack } from '@chakra-ui/react';
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import HomeHeader from './components/HomeHeader';
import Profile from './components/Profile'
import RegistrationHandler from './Handler/RegistrationHandler'
import { SignIn } from './components/SigninNew/SignIn';

import Pricing from './pages/Pricing'
import MultiStepFormHolder from './components/MultiStepFormHolder/MultiStepFormHolder'
import Modal from './components/Modal/Modal'
import ProfileComponent from './components/ProfileComponent/ProfileComponent'


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

                            <Route exact path='/home'>
                                <HomeHeader />
                                <Home />
                            </Route>
                            <Route exact path='/profile'>
                                <ProfileComponent />
                            </Route>
                            <Route exact path='/signin'>
                                <SignIn />
                            </Route>
                            <Route exact path='/multistep'>
                                <MultiStepFormHolder />
                            </Route>
                            <Route exact path='/modal'>
                                <Modal />
                            </Route>
                            <Route exact path='/portfolio'>
                                <ProfileComponent />
                            </Route>
                            <Route exact path='/pricing'>
                                <HomeHeader />
                                <Pricing />
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
