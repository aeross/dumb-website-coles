/* THIS IS SERVER-SIDE RENDERING */
// "use client"
import React, { useState } from 'react'
import Nav from '../../components/Nav';
import ClientFlash from '@/app/components/ClientFlash';
// import { APIResponse } from '@/app/api/responseTypeDef';
import { doLogin } from './action';

function Login() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // function handleSubmit(e: React.FormEvent) {
    //     e.preventDefault();
    //     console.log(email, password)
    // }

    // async function handleSubmit(data: FormData) {
    //     "use server"
    //     // console.log(data, "<<<<");

    //     const res: Response = await fetch("http://localhost:3000/api/login", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ 
    //             email: data.get("email"), 
    //             password: data.get("password") 
    //         })
    //     })
    //     const resJson: APIResponse<unknown> = await res.json();

    //     if (!res.ok) {
    //         let message = resJson.error ? resJson.error : "An error has occured";
    //         // return redirect
    //     }
    // }

    return (<>
<Nav authenticated={false} />
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
                    // value={email}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
                />
            </div>

            <div id="form-input">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password"
                    name="password" 
                    className="input-text" 
                    // value={password}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }}
                />
            </div>

            <div id="form-button">
                <button 
                    id="input-submit"
                    type="submit"
                    // onClick={handleSubmit}
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