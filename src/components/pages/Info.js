import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Info() {
    return(
        <>
         <section className='subscription'>
        <p className='subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='subscription-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button className="btn btn-subscribe">Subscribe</button>
          </form>
        </div>
      </section>

      <section className='contact-container'>
        <h1>GET IN TOUCH</h1>

        <div className="element">
        <h2>TELEPHONE</h2>
        <p>0000 000 000</p>
      </div>

      <div className="element">
        <h2>EMAIL</h2>
        <p>info@ldtr.co.uk</p>
        <p>careers@ldtr.co.uk</p>
      </div>

      <div className="element">
        <h2>ADRESS</h2>
        <p>20 Regent Street</p>
        <p>LONDON</p>
        <p>SW1Y 4PH</p>
      </div>
      </section>

        <Footer/>
        </>
    );
};

export default Info;