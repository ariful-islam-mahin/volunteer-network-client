import React from 'react';
import fakeData from '../../fakeData/fakeData';

const HomePage = () => {
    // console.log(props)

    return (
        <div>
            {/* <img src={service.picture} alt=""/> */}
            {/* <h4>{service.title}</h4> */}
            {
                fakeData.map(data => 
                    <div>
                        <img src={data.picture} alt=""/>
                        <h4>{data.title}</h4>
                    </div>
                )
            }
        </div>
    );
};

export default HomePage;