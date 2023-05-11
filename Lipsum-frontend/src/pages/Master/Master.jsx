import React from 'react'
import './Master.css'

function Master(){
    return(
        <div>
            <div class="hero-section">
                <img src="RECTANGLE1.jpeg" alt=""/>
            </div>

            <div class="login-section">

                <div class='lor'>
                    <img id="lorimg" src="Chakra.svg"/>
                    <p><span style="font-weight: 600;">Lorem</span>ipsum</p>

                </div>
                <div class="login-content">
                    <div class="wlcm">
                        Welcome Back !
                    </div>
                    <div class="wlcm2">
                        <p>Let's set up the test</p>
                    </div>
                    <div class='txt'>
                        <p>Email</p>
                        <input type="text" placeholder="Enter your email address"/>
                        <p>Password</p>
                        <input type="password" placeholder="Enter your password"/>
                    </div>
                    <div class="reem">
                        <div class="Reem">
                            <input type="checkbox"/>
                            <p>Remember me</p>
                        </div>  
                        <button class="button"><span>Sign In</span></button>
                    </div>
                    <div class="dont">
                        <p>Don't have an account ?</p>  
                        <a href="#">Sign Up.</a>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Master