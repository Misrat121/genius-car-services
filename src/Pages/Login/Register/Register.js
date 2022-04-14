import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {

    const navigate =useNavigate();
    const navigateLogin = () =>{
        navigate('/login')
    }

    const handleRegister = event =>{
        event.preventDefault()
    }
    return (
        <div className='register-form'>
            <h2>Please Register</h2>

            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <br/>
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <br/>
                <input type="password" name="password" id="" placeholder='Password' required />
        <br/>
        <input type="submit" value="Register" />
            </form>

            <p>Already have an account? <Link to="/login" className="text-danger text-decoration-none pe-auto" onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Register;