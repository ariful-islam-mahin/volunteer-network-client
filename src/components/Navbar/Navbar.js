import React from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();
    const handleClick = (path) => {
        history.push(`/${path}`)
    }
    return (
        <div className="container my-4 d-flex justify-content-between">
            <img style={{width:'200px'}} src="https://iili.io/2WyllR.md.png" alt=""/>
            <div>
                <button onClick={() => handleClick('home')} className="btn btn-lg mx-1">Home</button>
                <button onClick={() => handleClick('register')} className="btn btn-primary btn-lg mx-1">Register</button>
                <button className="btn btn-dark btn-lg mx-1">Admin</button>
            </div>
        </div>
    );
};

export default Navbar;