import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate =useNavigate();
    const navigateLogin = () =>{
        navigate('/login');

    }

    if(user){
        navigate('/home');
    }
    const handleRegister = event =>{
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

       createUserWithEmailAndPassword(email, password)
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
        <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;