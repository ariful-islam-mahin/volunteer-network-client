import React, { useState, useContext } from 'react';
import { UserContext } from '../Main/Main';

const RegisteredActivities = () => {
    const [volunteerData, setVolunteerData, loggedInUser] = useContext(UserContext);

    const [allRegister, setAllRegister] = useState([])

    fetch('http://localhost:5000/allRegister?email='+loggedInUser.email, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('token')}`  
        }
    })
    .then(res => res.json())
    .then(data => setAllRegister(data))

    const deleteActivity = (id) => {
        fetch(`http://localhost:5000/deleteActivity/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('deleted successfully')
        })
    }

    return (
        <div className="row container mx-auto">
            {
               allRegister.map(data => 
                    <div key={data._id} className="col-md-6 mt-3">
                        <div className="border border-secondary rounded d-flex py-2 bg-white">
                            <img className="w-100 col-5 pl-2" src={data.picture} alt=""/>
                            <div>
                                <h4>{data.activity}</h4>
                                <h5>{data.date}</h5>
                                <button onClick={() => deleteActivity(data._id)} className='btn btn-danger mt-3'>Cancel</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default RegisteredActivities;