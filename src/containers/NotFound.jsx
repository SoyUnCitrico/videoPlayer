import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
    <>
       <div className="notFound__main"> 
        <div className="notFound__card">
            <h1>Error 404</h1>
            <h2>¡ Lo sentimos !</h2>
            <h3>No pudimos encontrar este elemento</h3>   
            <Link className="notFound__link" to="/">
                Regresa al Home
            </Link>
        </div>    
        </div> 
    </>
);
export default NotFound;