import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [allRegister, setAllRegister] = useState([])

    useEffect(() => {
        fetch('https://stormy-atoll-89779.herokuapp.com/allRegistedActivity')
        .then(res => res.json())
        .then(data  => {
            setAllRegister(data)
        })
    }, [])
    return (
        <div className='container mt-5'>
            <table className="table">
            <thead className="thead-light">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Registating date</th>
                <th scope="col">Volunteer list</th>
                </tr>
            </thead>
                <tbody>
                    {
                        allRegister.map(data => 
                                <tr key={data._id}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.date}</td>
                                    <td>{data.activity}</td>
                                </tr> 
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Admin;