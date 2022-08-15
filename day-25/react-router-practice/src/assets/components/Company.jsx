import React from 'react';
import { useLocation, useParams } from 'react-router-dom';




const Company = () => {
    const {name} = useParams();
    const location = useLocation();
    console.log(location, 'location');
    
    return (
        <div>
            <h2>This is Company Component</h2>
            <h3>Company: {name}</h3>
        </div>
    );
};

export default Company;