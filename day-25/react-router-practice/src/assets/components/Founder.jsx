import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const Founder = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/home');
    }, [])
    return (
        <div>
            <h2>This is Founder Component</h2>
        </div>
    );
};

export default Founder;