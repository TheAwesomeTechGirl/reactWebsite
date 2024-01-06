import React from 'react'
import Carditems from './Carditems'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'> 
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
            <ul className='cards-items'>
                 <Carditems
                 src="src/assets/images/img-9.jpg"
                 text="Explore the hidden waterfall deep inside the Amazon Jungle"
                 label='Adventure'
                 path='/Services'
                 
                 />

<Carditems
                 src="src/assets/images/img-2.jpg"
                 text="Travel through the Islands of Bali in a Private Cruise"
                 label='Luxury'
                 path='/Services'
                 
                 />
            </ul>

            <ul className='cards-items'>
            <Carditems
                 src="src/assets/images/img-3.jpg"
                 text="Set Sail in the Atlantic Ocean visiting uncharted Waters"
                 label='Mystery'
                 path='/Services'
                 
                 />
<Carditems
                 src="src/assets/images/img-4.jpg"
                 text="Experience Football on Top Of the Himilayan Mountains"
                 label='Adventure'
                 path='/Products'
                 
                 />

<Carditems
                 src="src/assets/images/img-8.jpg"
                 text="Ride through the Sahara Desert on a guided Camel tour"
                 label='Adrenaline'
                 path='/Sign-up'
                 
                 />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
