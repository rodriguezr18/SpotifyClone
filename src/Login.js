import React from 'react'
import './Assets/Login.css'
import { loginUrl } from './spotify'
// rfce is a es7 handy snippet that rides a functional component fully
function Login() {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            {/* Login with Spotify button */}
            
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a> {/* This is here to redirect the user to login into their spotify account */}
        </div>
    )
}

export default Login
