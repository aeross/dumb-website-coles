"use client"
import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(email, password)
    }

    return (<>
<div className="h-[100dvh] flex justify-center items-center">
    <div id="form-bg">
        <h1 id="heading">Login</h1>
        <form id="form">
            <div id="form-input">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    className="input-text" 
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
                />
            </div>

            <div id="form-input">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password"
                    name="password" 
                    className="input-text" 
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }}
                />
            </div>

            <div id="form-button">
                <button 
                    id="input-submit"
                    onClick={handleSubmit}
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