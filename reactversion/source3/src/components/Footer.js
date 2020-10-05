import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';

function Footer() {
    return (
        <div className='footer'>
            graphieros.com est développé et maintenu par <Link className='link' to='/alp'><u>Alec Lloyd Probert</u></Link>, 2020
            <Link to='/contact.php' target='_blank'>
                <p>contact</p>
            </Link>

            <div className='footer-end'>
                <Link
                    className='link'
                    to='/alp'>
                    <li>infos sur l'auteur</li>
                </Link>

                <Link
                    className='link'
                    to='/glyphes'>
                    <li>liste des glyphes</li>
                </Link>

                <Link
                    className='link'
                    to='/mots'>
                    <li>liste des mots</li>
                </Link>

                <Link
                    className='link'
                    to='/galerie'>
                    <li>galerie de peintures</li>
                </Link>

                <Link
                    className='link'
                    to='/blog'>
                    <li>blog</li>
                </Link>

                <Link
                    className='link'
                    to='/cle.html'
                    target="_blank">
                    <li>la clé</li>
                </Link>

                <Link
                    className='link'
                    to='/fractalspace'>
                    <li>fractal space</li>
                </Link>



            </div>
        </div>
    )
}

export default Footer;
