import React from 'react';
import '../App.css';
import './Main.css';
import { Link } from 'react-router-dom';


function Main() {
    return (
        <div className="background">
            <img alt="Background" src="./travel-agency/images/london.jpg"/>
        <div className="main-container">
            <video src="./travel-agency/videos/video1.mp4" autoPlay loop muted />
            <h1>PLAN YOUR NEXT JOURNEY</h1>
            <p>Where would you like to go?</p>
            <div className="main-btns">
            <Link to="/offers"><button className="btn" id="btn1">GET STARTED</button></Link>
            <Link to="/sign-up"><button className="btn" id="btn2">SIGN UP</button></Link>
            </div>
        </div>
        </div>
    )
}

export default Main;
