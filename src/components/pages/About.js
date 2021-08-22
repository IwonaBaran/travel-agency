import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function About() {
    return(
        <>
    <section className="about-container">
        <img className="about-img"alt='Destination' src="images/london.jpg?raw=true"/>
        <h1>WHY US?</h1>
        <h2>WE ARE A LEADING TRAVEL AGENCY IN LODNON</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </section>
    <Footer/>
    </>
    );
};