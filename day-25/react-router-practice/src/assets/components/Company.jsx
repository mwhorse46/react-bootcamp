import React from 'react';
import { useParams } from 'react-router-dom';




const Company = () => {
    const {name} = useParams();


    
    return (
        <div>
            <h2>This is Company Component</h2>
            <h3>Company: {name}</h3>
        </div>
    );
};

export default Company;