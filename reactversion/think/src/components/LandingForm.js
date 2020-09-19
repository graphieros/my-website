import React, { useState } from 'react';
import useCustomForm from '../hooks/useCustomForm';
import './css/LandingForm.css';

const LandingForm = () => {

    const { value: pseudo, bind: bindPseudo, reset: resetPseudo } = useCustomForm('');
    const { value: pwd, bind: bindPwd, reset: resetPwd } = useCustomForm('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${pseudo} ${pwd}`);
        resetPseudo();
        resetPwd();
    }


    return (
        <div className='landingForm'>
            
            <form onSubmit={handleSubmit}>
                <label>
                    pseudo.
        <input className='landingInput' type="text" {...bindPseudo} />
                </label>

                <label>
                    password.
        <input className='landingInput' type="text" {...bindPwd} />
                </label>
                <p>if you know someone you'll get in.</p>
                <input className='inputBtn' type="submit" value="log in." />
            </form>
        </div>

    );
}

export default LandingForm;