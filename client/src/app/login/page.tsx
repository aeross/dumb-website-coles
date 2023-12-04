import React from 'react'

function Login() {
    return (<>
<div className="h-[100dvh] flex justify-center items-center">
    <div id="form-bg">
        <h1 id="heading">Login</h1>
        <form id="form">
            <div id="form-input">
                <label 
                    htmlFor="email"
                >
                    Email
                </label>
                <input type="email" id="email" className="input-text" />
            </div>

            <div id="form-input">
                <label 
                    htmlFor="password"
                >
                    Password
                </label>
                <input type="password" id="password" className="input-text" />
            </div>

            <div id="form-button">
                <button id="input-submit">Submit</button>
            </div>
        </form>
    </div>
</div>
    </>)
}

export default Login