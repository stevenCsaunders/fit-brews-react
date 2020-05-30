import React from 'react';
import CategoryCardContainer from './CategoryCardContainer';
import { DRINKS } from '../shared/drinks';

const drinks = [...DRINKS]

const CategoryComponent = () => {
    return (
        <>
            <CategoryCardContainer drinks={ drinks }/>
            <CategoryCardContainer drinks={ drinks }/>
            <CategoryCardContainer drinks={ drinks }/>
            <CategoryCardContainer drinks={ drinks }/>
        </>
    )
}

export default CategoryComponent;