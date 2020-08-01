import React from 'react';
import Logo from './../../assets/img/katharsislogo.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink'
import Button from './../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="TYT"/>
            </a>
            {/* <ButtonLink className="ButtonLink" href="/">
                New Video
            </ButtonLink> */}
            <Button className="ButtonLink" href="/">
                New Video
            </Button>
        </nav>
    );
}


export default Menu;
