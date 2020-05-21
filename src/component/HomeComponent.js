import React from 'react';
import RenderItemCard from './ItemCard';


const HomePage = () => {
    return (
    <>
      <h1>Welcome to Fit Brews Homepage!</h1>
      <p>Join us for healthy and fit drink recipes</p>
      <div className="container">
        <div className="row">
            <RenderItemCard />
            <RenderItemCard />
            <RenderItemCard />
            <RenderItemCard />
            <RenderItemCard />
            <RenderItemCard />
            <RenderItemCard />
            <RenderItemCard />
        </div>
      </div>
    </>
    )};


    export default HomePage;