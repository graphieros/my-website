import React from 'react';
import Think from '../components/Think';
import LandingForm from './LandingForm';
import './css/LandingPage.css'

const LandingPage = () => {
    return (
        <div className='landingPage'>
            <div className='landingLeft'>
                <div className='landingLeftLogoWrapper'>
                    <Think fontSize='3em' color='white' />
                    <p className='motto'>juste vos idées.</p>
                </div>
            </div>
            <div className='landingRight'>
                <LandingForm />
            </div>
            
        </div>
    )
}

export default LandingPage;