import React from 'react';
import FeaturedCardContainer from './FeaturedCardContainer';
import CategoryCardContainer from './CategoryCardContainer';
import ReviewHomeComponent from './ReviewHomeComponent'

const HomePage = ({drinks}) => {
  
  const randomDrink= drinks[Math.floor(Math.random() * drinks.length)]
  
    return (
    <>
      <div className="container">
        <div className="row">
            <FeaturedCardContainer drinks={ drinks } />
        </div>
        <div className="row">
            <CategoryCardContainer drinks={ drinks } category={randomDrink.category} />
        </div>
      </div>
      <ReviewHomeComponent drinks={ drinks } />
    </>
    )};

    export default HomePage;