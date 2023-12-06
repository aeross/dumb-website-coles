"use client"
import React, { useState } from 'react'
import Nav from '../components/Nav';

function Register() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(name, username, email, password)
    }

    return (<>
<Nav authenticated={false} />
<div className="h-full mt-16 flex justify-center items-center">
    <div id="form-bg">
        <h1 id="heading">Register</h1>
        <form id="form">
            <div id="form-input">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name"
                    name="name" 
                    className="input-text"
                    value={name}
                    onChange={ (e) => { setName(e.target.value) } }
                />
            </div>

            <div id="form-input">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username"
                    className="input-text"
                    value={username}
                    onChange={ (e) => { setUsername(e.target.value) } }
                />
            </div>

            <div id="form-input">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="input-text"
                    value={email}
                    onChange={ (e) => { setEmail(e.target.value) } }
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
                    onChange={ (e) => { setPassword(e.target.value) } }
                />
            </div>

            <div id="form-button">
                <button id="input-submit" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    </div>
</div>
    </>)
}

export default Register