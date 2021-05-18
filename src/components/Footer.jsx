import React from 'react';
import '../assets/styles/components/Footer.scss';
import iconEnterprise from '../assets/icons/enterprise_light.svg';

const Footer = () => (
    <footer className="footer">
        <ul className="footer__links">
            <li><a href="https://www.instagram.com/mdrn.mx/" target="_blank">Instagram</a></li>
            <li><a href="https://github.com/SoyUnCitrico" target="_blank">Github</a></li>
            <li><a href="https://www.facebook.com/mndrn.mx/" target="_blank">Facebook</a></li>
        </ul>
        <img src={iconEnterprise} alt="logoEmpresarial"/>
    </footer>
);
export default Footer;