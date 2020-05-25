import React from 'react';
import FeaturedCardContainer from './FeaturedCardContainer';
import CategoryCardContainer from './CategoryCardContainer';
import { DRINKS } from '../shared/drinks'

const drinks = [...DRINKS]  //Spread the DRINKS array of objects in to another array 

const HomePage = () => {
    return (
    <>
      <h1>Welcome to Fit Brews Homepage!</h1>
      <p>Join us for healthy and fit drink recipes</p>
      <div className="container">
        <div className="row">
            <FeaturedCardContainer drinks={drinks} />
            <CategoryCardContainer drinks={drinks} />
        </div>
      </div>
    </>
    )};


    export default HomePage;