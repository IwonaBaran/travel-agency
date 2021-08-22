import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';


export default function SignUp() {
    return(
        <>
         <Navbar />
        <section className="sign-up-form">
        <div className="form-container">
        <form id="form" className="form">
            <h2>Register With Us</h2>
            <div className="form-control">
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="Enter username"></input>
            </div>
            <div className="form-control">
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Enter email"></input>
            </div>
            <div className="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter password"></input>
            </div>
            <div className="form-control">
                <label for="password2">Confirm password</label>
                <input type="password" id="password2" placeholder="Enter password again"></input>
            </div>
        
            <button>Submit</button>
        </form>
        </div>
        <div className="redirect">
        <p>Already have an account?</p>
        <Link id="redirect-link-sign-up" to="/log-in"><p>Log In</p></Link> 
        </div>
        </section>
    <Footer/>
    </>
    );
};