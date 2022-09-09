import React from 'react';
import './Navbar.css';
import pokemon from '../../../assets/pokemon_logo.png';
import sirius from '../../../assets/siriuslogo.png';
import {useNavigate} from "react-router-dom";
import {FaArrowLeft} from 'react-icons/fa';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <div className='back-btn' onClick={() => navigate(-1)}>
                <FaArrowLeft size={40}/>
            </div>
            <a href="/">
                <img className='poke-logo' src={pokemon} alt="pokelogo"/>
            </a>
            <img className='sirius' src={sirius} alt="siriuslogo"/>
        </div>
    );
};

export default Navbar;