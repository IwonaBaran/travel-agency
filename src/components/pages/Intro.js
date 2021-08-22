import React from 'react';
import { Link } from 'react-router-dom';

function Intro() {
    return (
        <div id="intro">
      <h1>WELCOME TO</h1>
      <h1><i id="intro-logo" className="fas fa-globe-americas" />LDTR</h1>
      <Link to="/home"><button className="btn">GET STARTED</button></Link>
      </div>
    )
}

export default Intro;
