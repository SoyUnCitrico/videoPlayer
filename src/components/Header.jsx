import React from 'react';
import '../assets/styles/components/Header.scss';

import {Link} from 'react-router-dom';
import logo from '../assets/logoVideo.png';
import userIcon from '../assets/icons/user-icon.png';


const Header = () => (
    <header className="header">
        <div className="header__img">
            <Link to="/">
            <img src={logo} alt="Platzi-Video-Logo"/>
            </Link>
        </div>
        
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="profile"/>
                <p>Perfil</p>
            </div>
        
            <ul>
                <li>
                    <Link to="/login">
                    Cuenta
                    </Link>                    
                </li>
                <li>
                    <Link to="/">
                    Cerrar Sesión
                    </Link>
                </li>
            </ul>

        </div>

    </header>
);

export default Header;