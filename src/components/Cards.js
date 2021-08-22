import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our best offers...</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
               src="images/amsterdam.jpg"
              text='Lorem ipsum is simply dummy text of the printing and typesetting industry.'
              label='AMSTERDAM From £99'
              path='/log-in'
            />
            <CardItem
               src="images/rome.jpg"
              text='Lorem ipsum is simply dummy text of the printing and typesetting industry.'
              label='ROME From £79'
              path='/log-in'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
               src="images/paris.jpg"
              text='Lorem ipsum is simply dummy text of the printing and typesetting industry.'
              label='PARIS From £85'
              path='/log-in'
            />
            <CardItem
              src="images/prague.jpg"
              text='Lorem ipsum is simply dummy text of the printing and typesetting industry.'
              label='PRAGUE From £89'
              path='/log-in'
            />
            <CardItem
              src="images/athens.jpg"
              text='Lorem ipsum is simply dummy text of the printing and typesetting industry.'
              label='ATHENS From £99'
              path='/log-in'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;