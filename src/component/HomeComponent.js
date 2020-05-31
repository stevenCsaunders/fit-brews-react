import React from 'react';
import FeaturedCardContainer from './FeaturedCardContainer';
import CategoryCardContainer from './CategoryCardContainer';
import ReviewHomeComponent from './ReviewHomeComponent'
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
      <ReviewHomeComponent drinks={ drinks } />
    </>
    )};


    export default HomePage;