import React from 'react';
import { UncontrolledCarousel } from 'reactstrap'

const RenderCarousel = ({ drinks }) => {
    // const checkFeatured = (drink) => drink.featured === true
    const slides = [
        {
            src: drinks[0].image,
            altText: drinks[0].name,
            caption: drinks[0].description,
            header: drinks[0].name,
            key: '1',
        },
        {
            src: drinks[1].image,
            altText: drinks[1].name,
            caption: drinks[1].description,
            header: drinks[1].name,
            key: '2',
        },
        {
            src: drinks[2].image,
            altText: drinks[2].name,
            caption: drinks[2].description,
            header: drinks[2].name,
            key: '3',
        },
    ]

    return (
        <div className="carouselImage">
            <UncontrolledCarousel items={slides} />
        </div>
    )
}

export default RenderCarousel;