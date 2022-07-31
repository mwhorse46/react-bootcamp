import React from 'react';
import playerImg from './assets/player.jpg';



const Header = () => {
    return (
        <header className='header'>
            <div className="logo">
                <img src={playerImg} alt="" />
            </div>
            <div className="text">
                <h2>Player Vs Player</h2>
            </div>
        </header>
    );
};

export default Header;