import React, { createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Task from '../Task/Task';
import Login from '../Login/Login';
import NoMatch from '../NoMatch/NoMatch';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Register from '../Register/Register';
import RegisteredActivities from '../RegisteredActivities/RegisteredActivities';
import Navbar from '../Navbar/Navbar';


export const UserContext = createContext()

const Main = () => {
    const [volunteerData, setVolunteerData] = useState({});
    const [loggedInUser, setLoggedInUser] = useState({});
    const [registerData, setRegisterData] = useState({})

    return (
        <UserContext.Provider value={[volunteerData, setVolunteerData, loggedInUser, setLoggedInUser, registerData, setRegisterData]}>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/home'>
                        <Task/>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <PrivateRoute path='/register'>
                        <Register/>
                    </PrivateRoute>
                    <Route path="/registeredActivities">
                        <RegisteredActivities/>
                    </Route>
                    <Route exact path='/'>
                        <Task/>
                    </Route>
                    <Route path='*'>
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default Main;