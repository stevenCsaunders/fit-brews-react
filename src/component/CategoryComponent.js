import React from 'react';
import CategoryCardContainer from './CategoryCardContainer';
import { DRINKS } from '../shared/drinks';

const drinks = [...DRINKS]

const CategoryListComponent = () => {
    return (
        <>
            <CategoryCardContainer drinks={ drinks }/>
            <CategoryCardContainer drinks={ drinks }/>
            <CategoryCardContainer drinks={ drinks }/>
            <CategoryCardContainer drinks={ drinks }/>
        </>
    )
}

export default CategoryListComponent;