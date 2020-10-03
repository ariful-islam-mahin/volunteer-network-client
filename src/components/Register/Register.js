import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { UserContext } from '../Main/Main';

const Register = () => {
    const [volunteerData, setVolunteerData, loggedInUser, setLoggedInUser] = useContext(UserContext);

    const today = new Date();
    today.setDate(today.getDate());
    const newDate = today.toISOString().substr(0,10);

    const [date, setDate] = useState(newDate);

    const handleTitleChange = event => setDate(event.target.value);

    const handleSubmit = (event) => {
            // for (let i = 0; i < 5; i++) {
            //     const name = event.target.elements[i].value;
            //     console.log(name)
            // }
            // name : event.target.elements.name.value,
            // email : event.target.elements.email.value,
            // number : event.target.elements.number.value,
            // time : event.target.elements.time.value,
            // date : event.target.elements.date.value,
            // doctor: doctorDetail.title
        
    }
    

    return (
        <div style={{width:'400px'}} className=' mx-auto text-center p-5 border border-secondary rounded mt-5'>
            <h4 className='font-weight-bold mb-4'>Register as a Volunteer</h4>
            <form onSubmit={handleSubmit}>
                <TextField 
                    className="form-control my-2" 
                    name="name" 
                    id="filled-size-small" 
                    size="small" 
                    type="text"
                    placeholder="Name"
                    defaultValue={loggedInUser.name}
                    variant="outlined" 
                    required
                />

                <TextField 
                    className="form-control my-2" 
                    name="email" 
                    id="filled-size-small" 
                    size="small" 
                    type="email"
                    placeholder="Email"
                    defaultValue={loggedInUser.email}
                    variant="outlined" 
                    required
                />

                <TextField 
                    className="form-control my-2" 
                    name="date" 
                    type="date" 
                    defaultValue={date}
                    onChange={handleTitleChange}
                    id="date" 
                    size="small" 
                    placeholder="Your Email"
                    variant="outlined" 
                    required
                />

                <TextField 
                    className="form-control my-2" 
                    name="description" 
                    id="filled-size-small" 
                    size="small" 
                    type="text"
                    placeholder="Description"
                    variant="outlined" 
                    required
                />

                <TextField 
                    className="form-control my-2" 
                    name="activity" 
                    id="filled-size-small" 
                    size="small" 
                    type="text"
                    placeholder="Volunteer Activity"
                    defaultValue={volunteerData.title}
                    variant="outlined" 
                    required
                />

                <Button onClick={handleSubmit} className="w-100 my-2"   variant="contained" color="primary">Registration</Button>
            </form>
            
        </div>
    );
};

export default Register;