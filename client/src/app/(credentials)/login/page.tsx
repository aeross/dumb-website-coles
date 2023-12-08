/* THIS IS SERVER-SIDE RENDERING */
// "use client"
import React from 'react'
import ClientFlash from '@/app/(components)/ClientFlash';
// import { APIResponse } from '@/app/api/responseTypeDef';
import { doLogin } from './action';

function Login() {

    return (<>
<div className="h-full mt-16 flex justify-center items-center">
    <div id="form-bg">
        <h1 id="heading">Login</h1>
        <ClientFlash />

        <form id="form" action={doLogin}>
            <div id="form-input">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    className="input-text"
                />
            </div>

            <div id="form-input">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password"
                    name="password" 
                    className="input-text"
                />
            </div>

            <div id="form-button">
                <button 
                    id="input-submit"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
</div>
    </>)
}

export default Login