import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import NoMatch from '../NoMatch/NoMatch';

export const UserContext = createContext()

const Main = () => {

    return (
        <UserContext.Provider>
            <Router>
                <Switch>
                    <Route path='/home'>
                        <HomePage/>
                    </Route>
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