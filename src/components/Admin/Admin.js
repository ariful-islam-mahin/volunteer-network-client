import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [allRegister, setAllRegister] = useState([]);

    useEffect(() => {
        fetch('https://stormy-atoll-89779.herokuapp.com/allRegistedActivity')
        .then(res => res.json())
        .then(data  => {
            setAllRegister(data)
        })
    }, []);

    const deleteActivity = (id) => {
        fetch(`https://stormy-atoll-89779.herokuapp.com/deleteActivity/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                window.location.reload();
            }
        })
        
    }
    return (
        <div className='container mt-5'>
            <table className="table">
            <thead className="thead-light">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Registating date</th>
                <th scope="col">Volunteer list</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
                <tbody className="bg-white">
                    {
                        allRegister.map(data => 
                                <tr key={data._id}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.date}</td>
                                    <td>{data.activity}</td>
                                    <td><button className="btn btn-danger" onClick={() => deleteActivity(data._id)}>delete</button></td>
                                </tr> 
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Admin;