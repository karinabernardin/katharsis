import React from 'react';
import Logo from './../../assets/img/katharsislogo.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink'
import Button from './../Button'
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="TYT"/>
            </Link>
            {/* <ButtonLink className="ButtonLink" href="/">
                New Video
            </ButtonLink> */}
            <Button as={Link} className="ButtonLink" to="/registration/video">
                New Video
            </Button>
        </nav>
    );
}


export default Menu;
