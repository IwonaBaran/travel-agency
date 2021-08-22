import React from 'react';
import '../App.css';
import './Main.css';
import { Link } from 'react-router-dom';


function Main() {
    return (
        
        <div className="main-container">
            <video src="./travel-agency/videos/video1.mp4" autoPlay loop muted />
            <h1>PLAN YOUR NEXT JOURNEY</h1>
            <p>Where would you like to go?</p>
            <div className="main-btns">
            <Link to="/log-in"><button className="btn" id="btn1">LOG IN</button></Link>
            <Link to="/sign-up"><button className="btn" id="btn2">SIGN UP</button></Link>
            </div>
        </div>
    )
}

export default Main;
