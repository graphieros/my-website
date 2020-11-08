import React from 'react';
import './css/Login.css';
import Fractal from './graphieros/Fractal';

function Login() {


    return (
        <div className='login-body'>
            <div className='login-body-form'>
                <form>
                    <Fractal 
                        className='form-fractal'
                        sequence='qd-zs-sw ze-ed-dx-xw-wq-qz-ew-xs-dz'
                        svgSize='50'
                        colors={[122,161,216]}
                        light={true}
                        intensity='3'
                    />

                    <input type='text' />

                    <Fractal 
                        className='form-fractal'
                        sequence='qd-zs-sw zw-ws-qd-dx'
                        svgSize='50'
                        colors={[122,161,216]}
                        light={true}
                        intensity='3'
                    />
                   
                    <input type='password' />

                    <Fractal
                        className='form-fractal-post'
                        sequence='zw-qd-dx-xs qw-wd-de-eq-qs-se'
                        svgSize='50'
                        colors={[122,161,216]}
                        light={true}
                        intensity='3'
                    />

                    <input className='submit' type='submit' value='' />
                </form>
            </div>
        </div>

    );
}

export default Login;
