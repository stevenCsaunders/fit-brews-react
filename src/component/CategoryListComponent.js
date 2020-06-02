import React from 'react'
import CategoryCardContainer from './CategoryCardContainer'

const CategoryListComponent = ({ drinks, uniqueCategories }) => {
	
	const categoryContainer = uniqueCategories.map((category) => {
		return <CategoryCardContainer key={category} drinks={drinks} category={category} />
	})

	return <div>{categoryContainer}</div>
}


export default CategoryListComponent