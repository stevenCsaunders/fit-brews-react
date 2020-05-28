import React from 'react';
import FeaturedCardContainer from './FeaturedCardContainer';
import CategoryCardContainer from './CategoryCardContainer';
import { DRINKS } from '../shared/drinks';

const drinks = [...DRINKS]  //Spread the DRINKS array of objects in to another array 

const HomePage = () => {
    return (
    <>
      <div className="container">
        <div className="row">
            <FeaturedCardContainer drinks={ drinks } />
            <CategoryCardContainer drinks={ drinks } />
        </div>
      </div>
    </>
    )};


    export default HomePage;