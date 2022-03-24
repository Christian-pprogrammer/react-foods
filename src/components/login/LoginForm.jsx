import React from 'react'
import './LoginForm.css';
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa'
import SocialPlatform from './social-platform/SocialPlatform';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <form className='login-form'>
        <h3>Hello Again!</h3>
        <p>Welcome back you've <br/> been missed!</p>
        <div>
            <input type="text" placeholder="username" />   
        </div>
        <div>
            <input type="text" placeholder="password" />
        </div>
        <div className='recover-password'>
            Recover password
        </div>
        <button type="submit" className='login-button'>Sign in</button>
        <div className="continue-with">
            <div className="continue-with-line"></div>
            <span className="continue-with">
                Or continue with
            </span>
        </div>
        <div className="socials">
            <SocialPlatform icon={<FaGoogle />} />
            <SocialPlatform icon={<FaApple />} />
            <SocialPlatform icon={<FaFacebook />} />
        </div>
        <p className='not-member'>Not a member? <Link to="/" className='register-now'>register now</Link></p>
    </form>
  )
}

export default LoginForm