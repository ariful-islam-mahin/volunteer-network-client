import React, { createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import Login from '../Login/Login';
import NoMatch from '../NoMatch/NoMatch';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Register from '../Register/Register';

export const UserContext = createContext()

const Main = () => {
    const [volunteerData, setVolunteerData] = useState({});
    const [loggedInUser, setLoggedInUser] = useState({
        name:'',
        email:''
    })

    return (
        <UserContext.Provider value={[volunteerData, setVolunteerData, loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route path='/home'>
                        <HomePage/>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <PrivateRoute path='/register'>
                        <Register/>
                    </PrivateRoute>
                    <Route exact path='/'>
                        <HomePage/>
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