import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/logoVideo.png';
import userIcon from '../assets/icons/user-icon.png';


const Header = () => (
    <header className="header">
        <div className="header__img">
            <img src={logo} alt="Platzi-Video-Logo"/>
        </div>
        
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="profile"/>
                <p>Perfil</p>
            </div>
        
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>

        </div>

    </header>
);

export default Header;