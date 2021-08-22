import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';


export default function LogIn() {
    return(
        <>
        <section className="log-in-form">
        <div className="form-container">
        <form id="form" className="form">
            <h2>Log In</h2>
            <div className="form-control">
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="Enter username"></input>
            </div>
            <div className="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter password"></input>
            </div>
            <button to="/log-in">Log In</button>
        </form>
        </div>
        <div className="redirect">
        <p>Don't have an account?</p>
        <Link id="redirect-link-log-in" to="/sign-up"><p>Sign Up</p></Link> 
        </div>
        </section>
    <Footer/>
    </>
    );
};